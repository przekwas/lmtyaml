import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/use-auth';

export default function Navbar() {
	const { authenticated } = useAuth();
	
	return (
		<div className="mb-5 navbar bg-base-100">
			<div className="flex-1">
				<div className="text-lg font-bold normal-case">Workout Tracker</div>
			</div>
			<div className="flex-none">
				<ul className="p-0 menu menu-horizontal menu-compact">
					<li>
						<NavLink to="/" className={({ isActive }) => `${isActive && 'active'}`}>
							Home
						</NavLink>
					</li>
					{!authenticated ? (
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) => `${isActive && 'active'}`}>
								Login
							</NavLink>
						</li>
					) : (
						<>
							<li>
								<NavLink
									to="/profile"
									className={({ isActive }) => `${isActive && 'active'}`}>
									Profile
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/tracker"
									className={({ isActive }) => `${isActive && 'active'}`}>
									Tracker
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</div>
	);
}
