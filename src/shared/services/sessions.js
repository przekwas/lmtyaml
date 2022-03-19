import { get, post } from './base';

export async function getAllForUser() {
    try {
        const result = await get('/mylife/sessions/user');
        return result;
    } catch (error) {
        throw error;
    }
}

export async function createNew(payload) {
    try {
        const result = await post('/mylife/sessions', { name: payload });
        return result.id;
    } catch (error) {
        throw error;
    }
}