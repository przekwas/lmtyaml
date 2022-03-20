export default function CardioTable({ cardio }) {
	if (!cardio || !cardio.length) {
		return (
			<div className="flex items-center justify-center p-5 border rounded-lg">
				<p className="font-semibold">No Cardio</p>
			</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<div className="py-5">
				<b>Cardio</b>
			</div>
			<table className="table w-full table-compact">
				<thead>
					<tr>
						<th>Name</th>
						<th>Time</th>
						<th>Calories</th>
                        <th>Distance</th>
					</tr>
				</thead>
				<tbody>
					{cardio.map(result => (
						<tr key={result.id}>
							<td>{result.name}</td>
							<td>{result.time}</td>
							<td>{result.estimated_calories} kcal</td>
							<td>{result.estimated_distance} miles</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
