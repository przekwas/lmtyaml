import { Link } from 'react-router-dom';
import HelloThere from '../../../assets/hello-there.jpg';

export default function Home() {
	return (
		<>
			<div
				className="hero"
				style={{
					backgroundImage: `url(${HelloThere})`
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="text-center hero-content text-neutral-content">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello there.</h1>
						<p className="py-6">
							Let Me Tell You About My Life (<b>LMTYAML</b>) is a workout tracking
							app. It's designed to help you collect data from your workouts, and
							visualize them on your dashboard.
						</p>
						<p className="pb-6">Time to have fun and get fit!</p>
						<Link to="/login" className="btn btn-secondary">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
