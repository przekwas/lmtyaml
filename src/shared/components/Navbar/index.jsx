import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/use-auth';
import Container from '../Container';

export default function Navbar() {
	const { authenticated } = useAuth();

	return (
		<Container>
			<div className="mb-2 navbar bg-base-100" id="navbar">
				<div className="flex-1">
					<Link to="/" className="text-lg font-bold normal-case">
						LMTYAML
					</Link>
				</div>
				<div className="flex-none">
					<ul className="p-0 menu menu-horizontal menu-compact">
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
										to="/dashboard"
										className={({ isActive }) => `${isActive && 'active'}`}>
										Dashboard
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
		</Container>
	);
}
