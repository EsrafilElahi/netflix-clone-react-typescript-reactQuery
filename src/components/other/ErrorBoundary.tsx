import React from 'react';

type ErrorBoundaryProps = {
	children: React.ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// Handle the error here, e.g., log it or display an error message
		console.error(error, errorInfo);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			// Render a fallback UI
			return <div>Something went wrong.</div>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
