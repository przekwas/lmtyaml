import { post } from './base';
import { getSession } from '../utils/storage';

export async function createNew(payload) {
	try {
		const session_id = getSession();
		const result = await post('/mylife/cardios', { ...payload, session_id });
		return result.id;
	} catch (error) {
		throw error;
	}
}