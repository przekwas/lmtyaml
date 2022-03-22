import { useState, useEffect } from 'react';
import { resultsService } from '../../services';

import NoResults from './NoResults';
import CardioTable from './CardioTable';
import WeightsTable from './WeightsTable';
import { LoaderCard, AlertError } from '../../components';

export default function TrackerResults() {
	const [alertError, setAlertError] = useState('');
	const [results, setResults] = useState({
		weights: [],
		cardio: [],
		loading: true
	});

	useEffect(() => {
		resultsService
			.daily()
			.then(data => setResults(data))
			.catch(e => {
				setAlertError(e.message);
				setResults(prev => ({ ...prev, loading: false }));
			});
	}, []);

	if (results.loading) {
		return <LoaderCard length={2} size="min-vh-75" />;
	}

	if (!results.weights.length && !results.cardio.length && !results.loading && !alertError) {
		return <NoResults />;
	}

	if (alertError) {
		return (
			<div className="flex items-center justify-center">
				<AlertError message={alertError} callback={setAlertError} />
			</div>
		);
	}

	return (
		<>
			<WeightsTable weights={results.weights} />
			<CardioTable cardio={results.cardio} />
		</>
	);
}
