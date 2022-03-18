import { Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Tracker } from '../shared/views';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/Profile" element={<Profile />} />
			<Route path="/tracker" element={<Tracker />} />
		</Routes>
	);
}
