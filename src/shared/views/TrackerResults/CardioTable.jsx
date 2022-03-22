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
						<th>
							Time <small className="text-gray-500">min</small>
						</th>
						<th>
							Calories <small className="text-gray-500">kcal</small>
						</th>
						<th>
							Distance <small className="text-gray-500">miles</small>
						</th>
					</tr>
				</thead>
				<tbody>
					{cardio.map(result => (
						<tr key={result.id}>
							<td>{result.name}</td>
							<td>{result.time}</td>
							<td>
								{result.estimated_calories ? (
									<>{result.estimated_calories}</>
								) : (
									'--'
								)}
							</td>
							<td>
								{result.estimated_distance ? (
									<>{result.estimated_distance}</>
								) : (
									'--'
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
