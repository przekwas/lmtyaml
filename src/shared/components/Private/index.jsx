import { useAuth } from '../../utils/use-auth';
import { Navigate } from 'react-router-dom';

export default function Private({ children }) {
	const { authenticated } = useAuth();

	if (!authenticated) {
		return <Navigate to="/login" replace={true} />;
	}

	return <>{children}</>;
}