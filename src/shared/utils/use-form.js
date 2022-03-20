import { useState } from 'react';

export function useForm(initialState = {}) {
	const [values, setValues] = useState(initialState);
	const [error, setError] = useState('');

	const handleChanges = e => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

	const sanitize = obj => {
		const sanitized = Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [key, value.trim().toLowerCase()])
		);

		return sanitized;
	};

	const clear = () => setValues({});

	return {
		values,
		handleChanges,
		clear,
		error,
		setError,
		sanitize
	};
}
