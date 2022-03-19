import { Link, Outlet } from 'react-router-dom';

export default function Tracker() {
	return (
		<div>
			<div className="flex items-center justify-between mb-5">
				<div>
				<Link className="btn btn-outline btn-sm" to="/tracker/today">
					Today's Workout
				</Link>
				</div>
				<Link className="btn btn-outline btn-sm" to="/tracker/sessions">
					Let's Get Fit
				</Link>
			</div>
			<Outlet />
		</div>
	);
}
