export default function FormError({ type, message = '' }) {
	switch (type) {
		case 'required':
			return <ErrorSpan message="required" />;
		case 'maxLength':
			return <ErrorSpan message={message ? message : 'max 50 characters'} />;
		case 'minLength':
			return <ErrorSpan message={message ? message : 'min 6 characters'} />;
		case 'max':
			return <ErrorSpan message={message ? message : 'max number 999'} />;
		case 'min':
			return <ErrorSpan message={message ? message : 'min number 0'} />;
		case 'pattern':
			return <ErrorSpan message={message ? message : 'bad pattern'} />;
		default:
			return null;
	}
}

function ErrorSpan({ message }) {
	return <span className="ml-auto label-text-alt text-error">{message}</span>;
}
