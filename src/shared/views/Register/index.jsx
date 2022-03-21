import { Navigate } from 'react-router-dom';
import { useForm } from '../../utils/use-form';
import { useAuth } from '../../utils/use-auth';
import { authService } from '../../services';

import { Container } from '../../components';

export default function Register() {
	const { authenticated, signin } = useAuth();
	const { values, handleChanges, error, setError } = useForm({});

	const handleSubmit = () => {
		authService
			.registerUser(values)
			.then(() => signin('/dashboard'))
			.catch(e => setError(e.message));
	};

	if (authenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
		<Container>
			<form className="flex flex-col items-center justify-center">
				{error && (
					<div
						className="max-w-xs mb-5 shadow-lg alert alert-error"
						onClick={() => setError('')}>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="flex-shrink-0 w-6 h-6 stroke-current"
								fill="none"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span>{error}</span>
						</div>
					</div>
				)}
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
						value={values.email || ''}
						onChange={handleChanges}
					/>
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
						value={values.first_name || ''}
						onChange={handleChanges}
					/>
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
						value={values.last_name || ''}
						onChange={handleChanges}
					/>
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
						value={values.username || ''}
						onChange={handleChanges}
					/>
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
						value={values.password || ''}
						onChange={handleChanges}
					/>
				</div>
				<button
					type="button"
					className="mt-5 btn btn-secondary btn-wide"
					onClick={handleSubmit}>
					Register
				</button>
			</form>
		</Container>
	);
}
