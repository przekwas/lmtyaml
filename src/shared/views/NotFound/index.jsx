import { useNavigate } from 'react-router-dom';

import { Container } from '../../components';
import { RewindIcon } from '@heroicons/react/outline';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<Container>
			<div
				className="flex flex-col items-center justify-center"
				style={{ minHeight: `80vh` }}>
				<svg width="96" height="96" fill="none" className="text-gray-900 ">
					<path
						d="M36 28.024A18.05 18.05 0 0025.022 39M59.999 28.024A18.05 18.05 0 0170.975 39"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"></path>
					<ellipse cx="37.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor"></ellipse>
					<ellipse cx="58.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor"></ellipse>
					<path
						d="M24.673 75.42a9.003 9.003 0 008.879 5.563m-8.88-5.562A8.973 8.973 0 0124 72c0-7.97 9-18 9-18s9 10.03 9 18a9 9 0 01-8.448 8.983m-8.88-5.562C16.919 68.817 12 58.983 12 48c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36a35.877 35.877 0 01-14.448-3.017"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"></path>
					<path
						d="M41.997 71.75A14.94 14.94 0 0148 70.5c2.399 0 4.658.56 6.661 1.556a3 3 0 003.999-4.066 12 12 0 00-10.662-6.49 11.955 11.955 0 00-7.974 3.032c1.11 2.37 1.917 4.876 1.972 7.217z"
						fill="currentColor"></path>
				</svg>
				<h1 className="text-5xl font-bold">404</h1>
				<h2 className="text-xl font-semibold">Not Found</h2>
				<button className="gap-2 my-5 btn btn-outline" onClick={() => navigate(-1)}>
					<RewindIcon className="w-7 h-7" />
					Return From Whence You Came
				</button>
			</div>
		</Container>
	);
}
