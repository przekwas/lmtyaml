export default function Weekly({ data }) {
	console.log(data);
	return (
		<div className="pb-5">
			<h1 className="pb-5 text-4xl font-extrabold">Weights</h1>
			<div className="flex flex-col items-center justify-center">
				<div className="pb-5 text-2xl font-semibold text-center">Max / Avg</div>
				<div className="w-3/4 shadow-xl lg:w-full stats stats-vertical lg:stats-horizontal">
					{data.weights.map(exercise => (
						<div key={`${exercise.id}-max-avg`} className="stat place-items-center">
							<div className="stat-title">{exercise.name}</div>
							<div className="stat-value">
								{exercise.max_weight} / {exercise.avg_weight}
							</div>
							<div className="stat-desc">lbs</div>
						</div>
					))}
				</div>
				<div className="pt-10 pb-5 text-2xl font-semibold text-center">Totals</div>
				<div className="w-3/4 shadow-xl lg:w-full stats stats-vertical lg:stats-horizontal">
					{data.weights.map(exercise => (
						<div key={`${exercise.id}-totals`} className="stat place-items-center">
							<div className="stat-title">{exercise.name}</div>
							<div className="stat-value">{exercise.total_weight}</div>
							<div className="stat-desc">lbs</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
