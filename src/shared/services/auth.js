import { get, post } from './base';
import { setToken } from '../utils/storage';

export async function validateToken() {
    try {
        await get('/tokens/validate')
    } catch (error) {
        throw error;
    }
}

export async function loginUser(payload) {
    try {
        const token = await post('/auth/login', payload);
        setToken(token);
    } catch (error) {
        throw error;
    }
}