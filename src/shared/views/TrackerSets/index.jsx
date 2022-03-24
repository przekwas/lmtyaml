import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setsService } from '../../services';
import { setSet, getSet } from '../../utils/storage';

import { AlertError, FormError } from '../../components';

export default function TrackerSets() {
	const navigate = useNavigate();
	const [sets, setSets] = useState([]);
	const [selected, setSelected] = useState(getSet() || 'default');
	const [name, setName] = useState('');
	const [alertError, setAlertError] = useState('');
	const [formError, setFormError] = useState({});

	useEffect(() => {
		setsService
			.getAllForUserAndSession()
			.then(data => setSets(data))
			.catch(e => setAlertError(e.message));
	}, []);

	const handleCreateNew = () => {
		if (name && selected === 'default') {
			if (name.length > 50) {
				setFormError({ name: { type: 'maxLength' } });
				return;
			}

			setsService
				.createNew(name.trim().toLowerCase())
				.then(id => {
					setSet(id);
					navigate('/tracker/exercise');
				})
				.catch(e => alert(e.message));
			return;
		}

		if (!name && selected !== 'default') {
			setSet(selected);
			navigate('/tracker/exercise');
			return;
		}
	};

	const handleSelectChange = e => {
		setSelected(e.target.value);
		setName('');
	};

	const handleInput = e => {
		setName(e.target.value);
		setSelected('default');
	};

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
					<li>
						<Link to="/tracker/choice">Choice</Link>
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
						<select
							className="select select-bordered"
							value={selected}
							onChange={handleSelectChange}>
							<option value="default" disabled>
								{sets.length ? 'Select One' : 'No Sets'}
							</option>
							{sets.map(set => (
								<option key={set.id} value={set.id}>
									{set.name} - {dayjs(set.created_at).format('MMM DD, YYYY')}
								</option>
							))}
						</select>
					</div>
					<div className="w-full max-w-xs mx-auto mt-10 mb-5 divider">OR</div>
					<div className="w-full max-w-xs form-control">
						<label className="label">
							<span className="label-text">Create New</span>
						</label>
						<input
							type="text"
							placeholder="biceps curl"
							autoComplete="organization"
							className="w-full max-w-xs input input-bordered"
							maxLength="50"
							value={name}
							onChange={handleInput}
						/>
						<label className="label">
							{formError.name?.type && (
								<FormError
									type={formError.name.type}
									message={formError.name.message}
								/>
							)}
						</label>
					</div>
					<button
						type="button"
						className="mt-10 btn btn-secondary btn-wide"
						onClick={handleCreateNew}>
						Set it
					</button>
					{alertError && (
						<AlertError
							message={alertError}
							className="mt-5"
							callback={setAlertError}
						/>
					)}
				</form>
			</div>
		</div>
	);
}
