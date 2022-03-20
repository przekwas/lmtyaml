import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, Navbar } from '../shared/components';
import AppRoutes from './AppRoutes';

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<AppRoutes />
			</AuthProvider>
		</BrowserRouter>
	);
}
