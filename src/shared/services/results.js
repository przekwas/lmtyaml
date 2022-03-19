import { get } from './base';

export async function daily() {
    try {
        const results = await get('/mylife/results/user/today');
        return results;
    } catch (error) {
        throw error;
    }
}