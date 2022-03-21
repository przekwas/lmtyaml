import { Routes, Route } from 'react-router-dom';
import { Private } from '../shared/components';
import {
	Home,
	Login,
	Register,
	Dashboard,
	NotFound,
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
			<Route path="register" element={<Register />} />
			<Route
				path="dashboard"
				element={
					<Private>
						<Dashboard />
					</Private>
				}
			/>
			<Route
				path="tracker"
				element={
					<Private>
						<Tracker />
					</Private>
				}>
				<Route path="today" element={<TrackerResults />} />
				<Route path="sessions" element={<TrackerSessions />} />
				<Route path="choice" element={<TrackerChoice />} />
				<Route path="sets" element={<TrackerSets />} />
				<Route path="cardio" element={<TrackerCardio />} />
				<Route path="exercise" element={<TrackerExercise />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
