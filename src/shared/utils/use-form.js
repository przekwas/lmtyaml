import { useState } from 'react';

export function useForm(initialState = {}) {
	const [values, setValues] = useState(initialState);
	const [error, setError] = useState('');

	const handleChanges = e => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

	const clear = () => setValues({});

	return {
		values,
		handleChanges,
        clear,
		error,
		setError
	};
}
