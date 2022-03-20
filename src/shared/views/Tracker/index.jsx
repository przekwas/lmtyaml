import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { Container } from '../../components';

export default function Tracker() {
	const { pathname } = useLocation();

	// adding a class to which link button is active
	// surely there's a better way to do this garbo lol
	const addActive = linkNames => {
		const paths = pathname.split('/');
		if (paths.length === 3) {
			if (paths[2] === linkNames[0]) return 'btn-active';

			if (linkNames.includes(paths[2])) return 'btn-active';
		}
	};

	return (
		<Container>
			<div className="mb-5 btn-group">
				<Link
					className={`w-1/2 btn btn-outline btn-sm ${addActive(['today'])}`}
					to="/tracker/today">
					Today's Workout
				</Link>
				<Link
					className={`w-1/2 btn btn-outline btn-sm ${addActive([
						'sessions',
						'choice',
						'cardio',
						'sets',
						'exercise'
					])}`}
					to="/tracker/sessions">
					Let's Get Fit
				</Link>
			</div>
			<Outlet />
		</Container>
	);
}
