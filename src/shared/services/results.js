import { get } from './base';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);

const TZ = dayjs.tz.guess();

export async function daily() {
	try {
		const results = await get('/mylife/results/user/today');
		const weights = results.weights.filter(weight => dayjs(weight.created_at).tz(TZ).isToday());
		const cardio = results.cardio.filter(cardio => dayjs(cardio.created_at).tz(TZ).isToday());
		return { cardio, weights };
	} catch (error) {
		throw error;
	}
}

export async function weekly() {
	try {
		const results = await get('/mylife/results/user/weekly');
		return results;
	} catch (error) {
		throw error;
	}
}

export async function totals() {
	try {
		const results = await get('/mylife/results/totals');
		return results;
	} catch (error) {
		throw error;
	}
}
