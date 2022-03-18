import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './auth-context';
import { clearToken } from './storage';

export function useAuth() {
	const navigate = useNavigate();
	const [authState, setAuthState] = useContext(AuthContext);

	const signin = path => {
		setAuthState({
			checking: false,
			authenticated: true
		});
		navigate(path);
	};

	const logout = () => {
		setAuthState({
			checking: false,
			authenticated: false
		});
		clearToken();
		navigate('/');
	};

	return {
		authenticated: authState.authenticated,
		signin,
		logout
	};
}