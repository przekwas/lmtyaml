import { Link } from 'react-router-dom';

export default function TrackerSets() {
	return (
		<div>
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<span>Tracker</span>
					</li>
					<li>
						<Link to="/tracker/sessions">Sessions</Link>
					</li>
					<li>Sets</li>
				</ul>
			</div>
			<div>
				<form className="flex flex-col items-center justify-center">
					<div className="w-full max-w-xs form-control">
						<label className="label">
							<span className="label-text">Select Existing</span>
						</label>
						<select className="select select-bordered">
							<option value="default" disabled>
								Select One
							</option>
						</select>
					</div>
					<div className="w-full max-w-xs mx-auto mt-10 mb-5 divider">OR</div>
					<div className="w-full max-w-xs form-control">
						<label className="label">
							<span className="label-text">Create New</span>
						</label>
						<input
							type="text"
							placeholder="Grog's Gym"
							autoComplete="organization"
							className="w-full max-w-xs input input-bordered"
						/>
					</div>
					<button type="button" className="mt-10 btn btn-secondary btn-wide">
						Set it
					</button>
				</form>
			</div>
		</div>
	);
}
