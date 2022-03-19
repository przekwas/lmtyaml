import { get, post } from './base';
import { getSession } from '../utils/storage';

export async function getAllForUserAndSession() {
	try {
		const session_id = getSession();
		const result = await get(`/mylife/sets/user/session?id=${session_id}`);
		return result;
	} catch (error) {
		throw error;
	}
}

export async function createNew(payload) {
	try {
		const session_id = getSession();
		const result = await post(`/mylife/sets`, { name: payload, session_id });
		return result.id;
	} catch (error) {
		throw error;
	}
}