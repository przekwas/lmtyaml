import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sessionsService } from '../../services';
import { setSession } from '../../utils/storage';

export default function TrackerSessions() {
	const navigate = useNavigate();
	const [sessions, setSessions] = useState([]);
	const [selected, setSelected] = useState('default');
	const [name, setName] = useState('');

	useEffect(() => {
		sessionsService
			.getAllForUser()
			.then(data => setSessions(data))
			.catch(e => alert(e.message));
	}, []);

	const handleCreateNew = () => {
		if (name && selected === 'default') {
			sessionsService
				.createNew(name.trim().toLowerCase())
				.then(session_id => {
					setSession(session_id);
					navigate('/tracker/choice');
				})
				.catch(e => alert(e.message));
			return;
		}

		if (!name && selected !== 'default') {
			setSession(selected);
			navigate('/tracker/choice');
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
					<li>Sessions</li>
				</ul>
			</div>
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
							Select One
						</option>
						{sessions.map(session => (
							<option key={session.id} value={session.id}>
								{session.name} - {dayjs(session.created_at).format('MMM DD, YYYY')}
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
						placeholder="Grog's Gym"
						autoComplete="organization"
						maxLength="50"
						className="w-full max-w-xs input input-bordered"
						value={name}
						onChange={handleInput}
					/>
				</div>
				<button
					type="button"
					className="mt-10 btn btn-secondary btn-wide"
					onClick={handleCreateNew}>
					Set it
				</button>
			</form>
		</div>
	);
}
