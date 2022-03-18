import { AuthProvider } from '../shared/components';

export default function App() {
	return (
		<AuthProvider>
			<main>
				<section>
					<div>
						<h1>Hello World</h1>
						<button className="btn btn-primary">Button Test</button>
					</div>
				</section>
			</main>
		</AuthProvider>
	);
}
