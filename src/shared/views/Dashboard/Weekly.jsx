export default function Weekly({ data }) {
	console.log(data);
	return (
		<div>
			<div>Weights</div>
			{data.weights.map(weight => (
				<div key={weight.id}>
					<div>
						{weight.name} - {weight.weight} - {weight.reps}
					</div>
				</div>
			))}
			<div className="divider"></div>
			<div>Cardio</div>
			{data.cardio.map(c => (
				<div key={c.id}>
					<div>
						{c.name} - {c.time} - {c.estimated_calories} - {c.estimated_distance}
					</div>
				</div>
			))}
		</div>
	);
}
