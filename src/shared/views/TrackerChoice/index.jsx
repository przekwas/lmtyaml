import { Link } from 'react-router-dom';

export default function TrackerChoice() {
	return (
		<div>
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<span>Tracker</span>
					</li>
					<li>Sessions</li>
				</ul>
			</div>
			<div className="flex flex-col mt-10">
				<Link to="/tracker/cardio" className="btn btn-secondary">Cardio</Link>
				<div className="w-full max-w-xs mx-auto my-10 divider">OR</div>
				<Link to="/tracker/sets" className="btn btn-secondary">Set</Link>
			</div>
		</div>
	);
}
