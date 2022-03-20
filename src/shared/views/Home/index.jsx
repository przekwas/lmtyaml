import { Link } from 'react-router-dom';
import HelloThere from '../../../assets/hello-there.jpg';
import HeadShot from '../../../assets/headshot.jpg';

import { InformationCircleIcon, CodeIcon } from '@heroicons/react/solid';

export default function Home() {
	return (
		<>
			<div
				className="hero"
				style={{
					backgroundImage: `url(${HelloThere})`,
					minHeight: `75vh`
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
			<div className="flex items-center justify-center min-h-screen">
				<div className="flex flex-col items-center justify-center my-10 md:my-20">
					<h2 className="pb-5 text-5xl font-bold">About Me.</h2>
					<figure>
						<img className="mask mask-hexagon" src={HeadShot} alt="Headshot" />
					</figure>
					<div className="shadow-xl card w-96 bg-base-100">
						<div className="card-body">
							<h3 className="card-title">Luke Przekwas</h3>
							<p className="pb-5">
								Ten years a barista and now four years a developer. I love playing
								and watching competetive Super Smash Bros. Melee and speedrunning
								Super Punch Out. I've started working out for my health (mental and
								physical) recently, and this application is a side project of mine.
							</p>
							<div className="items-center justify-between card-actions">
								<a
									href="https://github.com/przekwas"
									target="_blank"
									rel="noreferrer noopener"
									className="gap-2 btn btn-outline">
									My Github
									<InformationCircleIcon className="w-8 h-8" />
								</a>
								<a
									href="https://github.com/przekwas/workout-tracker"
									target="_blank"
									rel="noreferrer noopener"
									className="gap-2 btn btn-outline">
									This Repo
									<CodeIcon className="w-8 h-8" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
