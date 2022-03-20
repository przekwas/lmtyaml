export default function Container({ children, ...rest }) {
	return <div className="container px-2 mx-auto md:px-0" {...rest}>{children}</div>;
}
