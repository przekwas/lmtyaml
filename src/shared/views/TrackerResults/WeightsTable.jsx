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
						<th>Set Name</th>
						<th>Reps</th>
						<th>
							Weight <small className="text-gray-500">lbs</small>
						</th>
					</tr>
				</thead>
				<tbody>
					{weights.map(result => (
						<tr key={result.id}>
							<td>{result.name}</td>
							<td>
								{result.set_reps.split(';;').map((rep, idx, arr) => {
									return idx === arr.length - 1 ? `${rep}` : `${rep} / `;
								})}
							</td>
							<td>
								{result.set_weights.split(';;').map((weight, idx, arr) => {
									return idx === arr.length - 1 ? `${weight}` : `${weight} / `;
								})}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
