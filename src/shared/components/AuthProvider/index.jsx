import { useState, useEffect } from 'react';
import { AuthContext } from '../../utils/auth-context';
import { authService } from '../../services';

import LoaderCard from '../LoaderCard';

export default function AuthProvider({ children }) {
	const [authState, setAuthState] = useState({
		authenticated: false,
		checking: true
	});

	useEffect(() => {
		authService
			.validateToken()
			.then(() => {
				setAuthState({
					authenticated: true,
					checking: false
				});
			})
			.catch(() => {
				setAuthState({
					authenticated: false,
					checking: false
				});
			});
	}, []);

	if (authState.checking) return <LoaderCard length={3} />;

	return (
		<AuthContext.Provider value={[authState, setAuthState]}>{children}</AuthContext.Provider>
	);
}
