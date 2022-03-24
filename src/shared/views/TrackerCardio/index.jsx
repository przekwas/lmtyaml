import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { cardioService } from '../../services';
import { sanitizeData, removeEmptyFields } from '../../utils/sanitize-data';

import { FormError, AlertError } from '../../components';

export default function TrackerCardio() {
	const navigate = useNavigate();
	const [alertError, setAlertError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const handleCreate = data => {
		const prepped = removeEmptyFields(data);
		cardioService
			.createNew(sanitizeData(prepped))
			.then(() => navigate('/tracker/today'))
			.catch(e => setAlertError(e.message));
	};

	return (
		<div>
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<span>Tracker</span>
					</li>
					<li>
						<Link to="/tracker/sessions">Sessions</Link>
					</li>
					<li>
						<Link to="/tracker/choice">Choice</Link>
					</li>
					<li>Cardio</li>
				</ul>
			</div>
			<form className="flex flex-col items-center justify-center">
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Name</span>
					</label>
					<input
						type="text"
						placeholder="elliptical"
						className="w-full max-w-xs input input-bordered"
						name="name"
						{...register('name', { required: true, maxLength: 50 })}
					/>
					<label className="label">
						{errors.name?.type && (
							<FormError type={errors.name.type} message={errors.name.message} />
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Time</span>
						<span className="ml-auto label-text-alt">in minutes</span>
					</label>
					<input
						type="number"
						placeholder="42"
						className="w-full max-w-xs input input-bordered"
						name="time"
						{...register('time', { required: true, max: 999 })}
					/>
					<label className="label">
						{errors.time?.type && (
							<FormError type={errors.time.type} message={errors.time.message} />
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Estimated Calories</span>
						<span className="ml-auto label-text-alt">optional</span>
					</label>
					<input
						type="number"
						placeholder="420"
						className="w-full max-w-xs input input-bordered"
						name="estimated_calories"
						{...register('estimated_calories', { required: false, max: 999 })}
					/>
					<label className="label">
						{errors.estimated_calories?.type && (
							<FormError
								type={errors.estimated_calories.type}
								message={errors.estimated_calories.message}
							/>
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Estimated Distance</span>
						<span className="ml-auto label-text-alt">optional - in miles</span>
					</label>
					<input
						type="number"
						placeholder="69"
						className="w-full max-w-xs input input-bordered"
						name="estimated_distance"
						{...register('estimated_distance', { required: false, max: 999 })}
					/>
					<label className="label">
						{errors.estimated_distance?.type && (
							<FormError
								type={errors.estimated_distance.type}
								message={errors.estimated_distance.message}
							/>
						)}
					</label>
				</div>
				<button
					type="button"
					className="mt-10 btn btn-secondary btn-wide"
					onClick={handleSubmit(handleCreate)}>
					Sweat It
				</button>
				{alertError && (
					<AlertError message={alertError} className="mt-5" callback={setAlertError} />
				)}
			</form>
		</div>
	);
}
