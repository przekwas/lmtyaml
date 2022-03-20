import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../utils/use-form';
import { cardioService } from '../../services';

export default function TrackerCardio() {
    const navigate = useNavigate();
	const { values, handleChanges, sanitize } = useForm();

	const handleSubmit = () => {
		if (!Object.values(values).length) return;
		
		cardioService
			.createNew(sanitize(values))
			.then(() => navigate('/tracker/today'))
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
						placeholder="eliptical"
						className="w-full max-w-xs input input-bordered"
						name="name"
						value={values.name || ''}
						onChange={handleChanges}
					/>
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
						value={values.time || ''}
						onChange={handleChanges}
					/>
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
						value={values.estimated_calories || ''}
						onChange={handleChanges}
					/>
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
						name="estimated_calories"
						value={values.estimated_calories || ''}
						onChange={handleChanges}
					/>
				</div>
				<button
					type="button"
					className="mt-10 btn btn-secondary btn-wide"
					onClick={handleSubmit}>
					Sweat It
				</button>
			</form>
		</div>
	);
}
