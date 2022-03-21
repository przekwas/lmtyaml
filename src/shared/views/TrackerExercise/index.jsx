import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../utils/use-form';
import { exercisesService } from '../../services';

const MAX = 999;
const MIN = 0;

export default function TrackerExercise() {
	const navigate = useNavigate();
	const { values, handleChanges, error, setError } = useForm();

	const handleSubmit = () => {
		// make sure something is filled in
		if (!Object.values(values).length) {
			setError('fill something in, please');
			return;
		}

		// make sure no value is higher than 999
		// or less than zero
		for (const key in values) {
			if (values[key] > MAX || values[key] < MIN) {
				setError(`${values[key]}, you sure about that?`);
				return;
			}
		}

		exercisesService
			.createNew(values)
			.then(() => navigate(-1))
			.catch(e => alert(e.message));
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
						value={values.reps || ''}
						onChange={handleChanges}
					/>
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
						value={values.weight || ''}
						onChange={handleChanges}
					/>
				</div>
				<div className="w-full max-w-xs form-control">
					<label className="label">
						<span className="label-text">Body Weight</span>
						<span className="ml-auto label-text-alt">optional</span>
					</label>
					<input
						type="number"
						placeholder="190"
						min="0"
						max="999"
						className="w-full max-w-xs input input-bordered"
						name="body_weight"
						value={values.body_weight || ''}
						onChange={handleChanges}
					/>
				</div>
				<button
					type="button"
					className="mt-10 btn btn-secondary btn-wide"
					onClick={handleSubmit}>
					Pump It
				</button>
				{error && (
					<div
						className="max-w-xs mt-5 shadow-lg alert alert-error"
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
			</form>
		</div>
	);
}
