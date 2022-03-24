import { useEffect, useState } from 'react';
import { resultsService } from '../../services';

import Weekly from './Weekly';
import Monthly from './Monthly';
import Yearly from './Yearly';
import Totals from './Totals';
import { Container, AlertError } from '../../components';
import { CursorClickIcon } from '@heroicons/react/outline';

export default function Dashboard() {
	const [menuItem, setMenuItem] = useState(null);
	const [data, setData] = useState({ loading: true, error: null });

	const addActiveClassName = item => {
		return item === menuItem ? 'btn-active' : '';
	};

	const renderComponent = () => {
		switch (menuItem) {
			case 'week':
				return <Weekly data={data.weekly} />;
			case 'month':
				return <Monthly />;
			case 'year':
				return <Yearly />;
			case 'total':
				return <Totals />;
			default:
				return (
					<div className="flex flex-col items-center justify-center">
						<CursorClickIcon className="w-20 h-20 text-info" />
						<h2 className="text-lg font-semibold text-primary-content">
							Clicky click a button to get going.
						</h2>
					</div>
				);
		}
	};

	useEffect(() => {
		Promise.all([resultsService.weekly()])
			.then(([weekly]) => setData(prev => ({ ...prev, loading: false, weekly })))
			.catch(e => setData({ loading: false, error: e.message }));
	}, []);

	return (
		<Container>
			<div className="w-full mb-5 btn-group">
				<button
					className={`w-1/4 btn-outline btn btn-sm ${addActiveClassName('week')}`}
					onClick={() => setMenuItem('week')}>
					Week
				</button>
				<button
					className={`w-1/4 btn-outline btn btn-sm ${addActiveClassName('month')}`}
					onClick={() => setMenuItem('month')}>
					Month
				</button>
				<button
					className={`w-1/4 btn-outline btn btn-sm ${addActiveClassName('year')}`}
					onClick={() => setMenuItem('year')}>
					Year
				</button>
				<button
					className={`w-1/4 btn-outline btn btn-sm ${addActiveClassName('total')}`}
					onClick={() => setMenuItem('total')}>
					Total
				</button>
			</div>
			{renderComponent()}
			{data.error && (
				<AlertError
					message={data.error}
					className="mx-auto mt-5"
					callback={() => setData(prev => ({ ...prev, error: null }))}
				/>
			)}
		</Container>
	);
}
