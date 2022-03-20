import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/use-auth';
import Container from '../Container';

export default function Navbar() {
	const { authenticated } = useAuth();

	return (
		<Container>
			<div className="mb-5 navbar bg-base-100"  id="navbar">
				<div className="flex-1">
					<div className="text-lg font-bold normal-case">LMTYAML</div>
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
