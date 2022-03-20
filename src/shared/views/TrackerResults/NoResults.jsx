export default function NoResults() {
	return (
		<div className="flex flex-col items-center justify-center pt-5">
            <div className="p-5 font-semibold">No Results Today</div>
			<div className="flex flex-col items-center justify-center p-10 border rounded-lg">
				<div>Remember rest days are important.</div>
				<div className="text-2xl">
					<span role="img" aria-label="Flexed Biceps">
						💪
					</span>
					<span role="img" aria-label="Smiling Face with Smiling Eyes">
						😊
					</span>
				</div>
				<div>Take care of those muscles!</div>
			</div>
		</div>
	);
}
