import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, Navbar } from '../shared/components';
import AppRoutes from './AppRoutes';

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<div className="container px-2 mx-auto md:px-0">
					<AppRoutes />
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}
