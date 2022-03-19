import { post } from './base';
import { getSession, getSet } from '../utils/storage';

export async function createNew(payload) {
	try {
		const session_id = getSession();
		const set_id = getSet();
		const result = await post('/mylife/exercises', { ...payload, session_id, set_id });
		return result.id;
	} catch (error) {
		throw error;
	}
}
