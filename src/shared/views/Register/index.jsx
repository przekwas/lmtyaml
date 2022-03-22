import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../utils/use-auth';
import { authService } from '../../services';
import { EMAIL_PATTERN } from '../../utils/patterns';

import { AlertError, Container, FormError } from '../../components';

export default function Register() {
	const { authenticated, signin } = useAuth();
	const [alertError, setAlertError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleRegister = data => {
		authService
			.registerUser(data)
			.then(() => signin('/dashboard'))
			.catch(e => setAlertError(e.message));
	};

	if (authenticated) {
		return <Navigate to="/dashboard" />;
	}

	console.log(errors);

	return (
		<Container>
			<form className="flex flex-col items-center justify-center">
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						type="email"
						placeholder="fox@mccloud.com"
						autoComplete="current-email"
						maxLength="50"
						className="w-full max-w-xs input input-bordered"
						name="email"
						{...register('email', {
							required: true,
							maxLength: 50,
							pattern: {
								value: EMAIL_PATTERN,
								message: 'invalid email format'
							}
						})}
					/>
					<label className="label">
						{errors.email?.type && (
							<FormError type={errors.email.type} message={errors.email.message} />
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">First Name</span>
					</label>
					<input
						type="text"
						placeholder="Joseph"
						autoComplete="given-name"
						maxLength="50"
						className="w-full max-w-xs input input-bordered"
						name="first_name"
						{...register('first_name', { required: true, maxLength: 50 })}
					/>
					<label className="label">
						{errors.first_name?.type && (
							<FormError
								type={errors.first_name.type}
								message={errors.first_name.message}
							/>
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Last Name</span>
					</label>
					<input
						type="text"
						placeholder="Marquez"
						autoComplete="family-name"
						maxLength="50"
						className="w-full max-w-xs input input-bordered"
						name="last_name"
						{...register('last_name', { required: true, maxLength: 50 })}
					/>
					<label className="label">
						{errors.last_name?.type && (
							<FormError
								type={errors.last_name.type}
								message={errors.last_name.message}
							/>
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Username</span>
						<span className="label-text-alt">optional</span>
					</label>
					<input
						type="text"
						placeholder="mang0"
						autoComplete="given-name"
						maxLength="50"
						className="w-full max-w-xs input input-bordered"
						name="username"
						{...register('username', {
							required: false,
							maxLength: 50,
							pattern: {
								value: /^[a-zA-Z0-9_.]+$/,
								message: 'a-z, A-Z, 0-9, . and _ only'
							}
						})}
					/>
					<label className="label">
						{errors.username?.type && (
							<FormError
								type={errors.username.type}
								message={errors.username.message}
							/>
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="20xxMultishine"
						autoComplete="current-password"
						className="w-full max-w-xs input input-bordered"
						name="password"
						maxLength="50"
						{...register('password', { required: true, maxLength: 50, minLength: 6 })}
					/>
					<label className="label">
						{errors.password?.type && (
							<FormError
								type={errors.password.type}
								message={errors.password.message}
							/>
						)}
					</label>
				</div>
				<button
					type="button"
					className="mt-5 btn btn-secondary btn-wide"
					onClick={handleSubmit(handleRegister)}>
					Register
				</button>
				{alertError && (
					<AlertError message={alertError} callback={setAlertError} className="mt-5" />
				)}
			</form>
		</Container>
	);
}
