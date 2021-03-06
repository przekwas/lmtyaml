const TOKEN_KEY = 'workout_derpz';
const SESSION_KEY = 'session_herpz';
const SET_KEY = 'set_pizza';
const EXERCISE_KEY = 'kill_me';

export function setToken(token) {
	localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
	return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
	localStorage.removeItem(TOKEN_KEY);
}

export function setSession(session_id) {
	localStorage.setItem(SESSION_KEY, session_id);
}

export function getSession() {
	return localStorage.getItem(SESSION_KEY);
}

export function clearSession() {
	localStorage.removeItem(SESSION_KEY);
}

export function setSet(set_id) {
	localStorage.setItem(SET_KEY, set_id);
}

export function getSet() {
	return localStorage.getItem(SET_KEY);
}

export function clearSet() {
	localStorage.removeItem(SET_KEY);
}

export function setExercise(payload) {
	localStorage.setItem(EXERCISE_KEY, JSON.stringify(payload));
}

export function getExercise() {
	return JSON.parse(localStorage.getItem(EXERCISE_KEY));
}

export function clearExercise() {
	localStorage.removeItem(EXERCISE_KEY);
}
