import { Container } from '../../components';

export default function Dashboard() {
	return (
		<Container>
			<div
				className="flex flex-col items-center justify-center"
				style={{ minHeight: '80vh' }}>
				<div className="mockup-code">
					<pre data-prefix="$">
						<code>npm i working-on-it</code>
					</pre>
					<pre data-prefix=">" className="text-success-content">
						<code>installing...</code>
					</pre>
					<pre data-prefix=">" className="bg-warning text-warning-content">
						<code>Error, dev is lazy!</code>
					</pre>
				</div>
			</div>
		</Container>
	);
}
