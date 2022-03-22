export default function FormError({ type, message = '' }) {
    console.log(message)
	switch (type) {
		case 'required':
			return <ErrorSpan message="required" />;
		case 'maxLength':
			return <ErrorSpan message="max 50 characters" />;
		case 'minLength':
			return <ErrorSpan message="min 6 characters" />;
		case 'pattern':
			return <ErrorSpan message={message ? message : 'bad pattern'} />;
		default:
			return null;
	}
}

function ErrorSpan({ message }) {
	return <span className="ml-auto label-text-alt text-error">{message}</span>;
}
