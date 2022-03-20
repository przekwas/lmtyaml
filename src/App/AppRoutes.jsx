import { Routes, Route } from 'react-router-dom';
import {
	Home,
	Login,
	Dashboard,
	Tracker,
	TrackerSessions,
	TrackerChoice,
	TrackerSets,
	TrackerCardio,
	TrackerExercise,
	TrackerResults
} from '../shared/views';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="dashboard" element={<Dashboard />} />
			<Route path="tracker" element={<Tracker />}>
				<Route path="today" element={<TrackerResults />} />
				<Route path="sessions" element={<TrackerSessions />} />
				<Route path="choice" element={<TrackerChoice />} />
				<Route path="sets" element={<TrackerSets />} />
				<Route path="cardio" element={<TrackerCardio />} />
				<Route path="exercise" element={<TrackerExercise />} />
			</Route>
			<Route path="*" element={<div>not found</div>} />
		</Routes>
	);
}
