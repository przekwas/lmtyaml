export default function WeightsTable({ weights }) {
	if (!weights || !weights.length) {
		return (
			<div className="flex items-center justify-center p-5 border rounded-lg">
				<p className="font-semibold">No Weights</p>
			</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<div className="pb-5">
				<b>Weights</b>
			</div>
			<table className="table w-full table-compact">
				<thead>
					<tr>
						<th>Name</th>
						<th>Reps</th>
						<th>Weight</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{weights.map(result => (
						<tr key={result.id}>
							<td>{result.name}</td>
							<td>{result.reps}</td>
							<td>{result.weight} lbs</td>
							<td>{result.body_weight ? `${result.body_weight} lbs` : '--' } </td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
