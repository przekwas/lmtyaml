import { useState, useEffect } from 'react';
import { resultsService } from '../../services';
import CardioTable from './CardioTable';

import NoResults from './NoResults';
import WeightsTable from './WeightsTable';

export default function TrackerResults() {
	const [results, setResults] = useState({
		weights: [],
		cardio: []
	});

	useEffect(() => {
		resultsService
			.daily()
			.then(data => setResults(data))
			.catch(e => alert(e.message));
	}, []);

	if (!results.weights.length && !results.cardio.length) {
		return <NoResults />;
	}

	return (
		<>
			<WeightsTable weights={results.weights} />
			<CardioTable cardio={results.cardio} />
		</>
	);
}
