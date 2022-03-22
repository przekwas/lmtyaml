import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../utils/use-auth';
import { authService } from '../../services';
import { EMAIL_PATTERN } from '../../utils/patterns';

import { AlertError, Container, FormError } from '../../components';
import { PencilAltIcon } from '@heroicons/react/solid';

export default function Login() {
	const { authenticated, signin } = useAuth();
	const [alertError, setAlertError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleLogin = data => {
		authService
			.loginUser(data)
			.then(() => signin('/dashboard'))
			.catch(e => setAlertError(e.message));
	};

	if (authenticated) {
		return <Navigate to="/dashboard" />;
	}

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
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="20xxMultishine"
						autoComplete="current-password"
						maxLength="50"
						className="w-full max-w-xs input input-bordered"
						name="password"
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
					onClick={handleSubmit(handleLogin)}>
					Login
				</button>
				{alertError && (
					<AlertError message={alertError} className="mt-5" callback={setAlertError} />
				)}
				<div className="py-10 my-10 divider">Don't have an account?</div>
				<Link className="gap-2 btn btn-primary btn-wide" to="/register">
					Create One!
					<PencilAltIcon className="h-7 w-7" />
				</Link>
			</form>
		</Container>
	);
}
