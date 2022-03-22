export function sanitizeData(data) {
	const sanitized = Object.fromEntries(
		Object.entries(data).map(([key, value]) => [key, value.trim().toLowerCase()])
	);

	return sanitized;
}

export function removeEmptyFields(data) {
	const sanitized = { ...data };

	for (const key in sanitized) {
		if (sanitized[key] === '' || sanitized[key] === null) {
			delete sanitized[key];
		}
	}

	return sanitized;
}
