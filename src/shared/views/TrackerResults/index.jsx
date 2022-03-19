import { useState, useEffect } from 'react';
import { resultsService } from '../../services';

export default function TrackerResults() {
	const [results, setResults] = useState([]);

	useEffect(() => {
		resultsService
			.daily()
			.then(data => setResults(data))
			.catch(e => alert(e.message));
	}, []);

	return (
		<div className="overflow-x-auto">
			<div className="pb-5">
				<b>Weights</b>
			</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th>Name</th>
						<th>Reps</th>
						<th>Weight</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{results.weights?.map(result => (
						<tr key={result.id}>
							<td>{result.name}</td>
							<td>{result.reps}</td>
							<td>{result.weight} lbs</td>
							<td>{result.body_weight} lbs</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="py-5">
				<b>Cardio</b>
			</div>
			<table className="table w-full">
				<thead>
					<tr>
						<th>Name</th>
						<th>Time</th>
						<th>Est. Calories</th>
					</tr>
				</thead>
				<tbody>
					{results.cardio?.map(result => (
						<tr key={result.id}>
							<td>{result.name}</td>
							<td>{result.time}</td>
							<td>{result.estimated_calories} kcal</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
