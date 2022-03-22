import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { exercisesService } from '../../services';
import { sanitizeData, removeEmptyFields } from '../../utils/sanitize-data';

import { FormError, AlertError } from '../../components';

export default function TrackerExercise() {
	const navigate = useNavigate();
	const [alertError, setAlertError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({});

	const handleCreate = data => {
		const prepped = removeEmptyFields(data);
		exercisesService
			.createNew(sanitizeData(prepped))
			.then(() => navigate(-1))
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
						<Link to="/tracker/sets">Sets</Link>
					</li>
					<li>Exercise</li>
				</ul>
			</div>
			<form className="flex flex-col items-center justify-center">
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Reps</span>
					</label>
					<input
						type="number"
						placeholder="12"
						min="0"
						max="999"
						className="w-full max-w-xs input input-bordered"
						name="reps"
						{...register('reps', { required: true, min: 0, max: 999 })}
					/>
					<label className="label">
						{errors.reps?.type && (
							<FormError type={errors.reps.type} message={errors.reps.message} />
						)}
					</label>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Weight</span>
						<span className="label-text-alt">optional</span>
					</label>
					<input
						type="number"
						placeholder="100"
						min="0"
						max="999"
						className="w-full max-w-xs input input-bordered"
						name="weight"
						{...register('weight', { required: false, min: 0, max: 999 })}
					/>
					<label className="label">
						{errors.weight?.type && (
							<FormError type={errors.weight.type} message={errors.weight.message} />
						)}
					</label>
				</div>
				<button
					type="button"
					className="mt-10 btn btn-secondary btn-wide"
					onClick={handleSubmit(handleCreate)}>
					Pump It
				</button>
				{alertError && (
					<AlertError message={alertError} className="mt-5" callback={setAlertError} />
				)}
			</form>
		</div>
	);
}
