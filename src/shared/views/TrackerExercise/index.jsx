import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../utils/use-form';
import { exercisesService } from '../../services';

export default function TrackerExercise() {
	const navigate = useNavigate();
	const { values, handleChanges } = useForm();

	const handleSubmit = () => {
		if (!Object.values(values).length) return;

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
						<span className="label-text-alt">optional</span>
					</label>
					<input
						type="text"
						placeholder="12"
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
						type="text"
						placeholder="100"
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
						type="text"
						placeholder="190"
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
			</form>
		</div>
	);
}
