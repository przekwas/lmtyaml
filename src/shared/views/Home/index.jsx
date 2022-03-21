import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resultsService } from '../../services';
import HelloThere from '../../../assets/hello-there.jpg';
import HeadShot from '../../../assets/headshot.jpg';

import { Container } from '../../components';
import { InformationCircleIcon, CodeIcon, AtSymbolIcon } from '@heroicons/react/solid';

export default function Home() {
	const [data, setData] = useState({});

	useEffect(() => {
		resultsService
			.totals()
			.then(data => setData(data))
			.catch(e => alert(e.message));
	}, []);

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
			<div
				className="flex flex-col items-center justify-center py-20"
				style={{
					minHeight: `75vh`
				}}>
				<div className="pb-5 text-2xl">
					We're here to <b>pump</b>{' '}
					<span role="img" aria-label="Clapping Hands">
						👏
					</span>{' '}
					you up!
				</div>
				<div className="mb-10 shadow-lg stats stats-vertical lg:stats-horizontal">
					<div className="stat">
						<div className="stat-title">Total Weight</div>
						<div className="stat-value">{data.exercise?.total_weight_moved}</div>
						<div className="stat-desc">pounds</div>
					</div>
					<div className="stat">
						<div className="stat-title">Total Sets</div>
						<div className="stat-value">{data.exercise?.total_sets}</div>
						<div className="stat-desc">sets</div>
					</div>
					<div className="stat">
						<div className="stat-title">Total Repetitions</div>
						<div className="stat-value">{data.exercise?.total_reps}</div>
						<div className="stat-desc">reps</div>
					</div>
				</div>
				<div className="pb-5 text-2xl">
					We're going the <i>distance</i>!{' '}
					<span role="img" aria-label="Person Running">
						🏃
					</span>
				</div>
				<div className="shadow-lg stats stats-vertical lg:stats-horizontal">
					<div className="stat">
						<div className="stat-title">Total Time</div>
						<div className="stat-value">{data.cardio?.total_time}</div>
						<div className="stat-desc">minutes</div>
					</div>
					<div className="stat">
						<div className="stat-title">Total Distance</div>
						<div className="stat-value">{data.cardio?.total_miles}</div>
						<div className="stat-desc">miles</div>
					</div>
					<div className="stat">
						<div className="stat-title">Total Calories</div>
						<div className="stat-value">{data.cardio?.total_calories}</div>
						<div className="stat-desc">kcal burned</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center min-h-screen bg-base-100">
				<div className="flex flex-col items-center justify-center my-10 md:my-20">
					<h2 className="pb-5 text-5xl font-bold">About Me.</h2>
					<figure>
						<img className="mask mask-hexagon" src={HeadShot} alt="Headshot" />
					</figure>
					<div className="shadow-xl card w-96 bg-base-100">
						<div className="card-body">
							<h3 className="card-title">Luke Przekwas</h3>
							<div className="flex items-center">
								<div className="mr-1 badge badge-sm badge-primary badge-outline">
									Codes
								</div>
								<div className="mr-1 badge badge-sm badge-primary badge-outline">
									Enthusiastic
								</div>
								<div className="mr-1 badge badge-sm badge-secondary badge-outline">
									Loud
								</div>
								<div className="badge badge-sm badge-secondary badge-outline">
									Dork
								</div>
							</div>
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
			<div className=" bg-primary-content">
				<Container>
					<div className="min-h-screen hero text-base-100">
						<div className="flex-col hero-content lg:flex-row-reverse">
							<div className="max-w-sm rounded-lg shadow-2xl mockup-code">
								<pre data-prefix="$">
									<code>npm i working-on-it</code>
								</pre>
								<pre data-prefix=">" className="text-success-content">
									<code>installing...</code>
								</pre>
								<pre data-prefix=">" className="bg-warning text-warning-content">
									<code>Error, dev is human!</code>
								</pre>
							</div>
							<div>
								<h1 className="text-5xl font-bold">Notice a bug?</h1>
								<p className="py-6">
									There's probably ... a lot! I code a lot and don't bother
									testing like a <i>real</i> professional developer (
									<span role="img" aria-label="Eyes">
										👀
									</span>
									). Shoot me an email (<b>luke@covalence.io</b>) or open an issue
									on GitHub! Or hell, fix it yourself and submit a pull request.{' '}
									<span role="img" aria-label="Folded Hands">
										🙏
									</span>
								</p>
								<button
									onClick={() =>
										(window.location =
											'mailto:luke@covalence.io?subject=Your+Code+Sucks%2C+Idiot.')
									}
									className="gap-2 btn btn-primary">
									Email Me
									<AtSymbolIcon className="w-6 h-6" />
								</button>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
