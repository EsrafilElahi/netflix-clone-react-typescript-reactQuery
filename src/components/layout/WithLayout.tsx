import React,{ ComponentType } from 'react';
import Layout from './MainLayout';

type WithLayoutProps = {
	// Define any additional props needed for the layout component
};

function withLayout<T>(WrappedComponent: ComponentType<T>) {
	const WithLayoutInner: React.FC<T & WithLayoutProps> = (props) => {
		return (
			<Layout>
				<WrappedComponent {...props} />
			</Layout>
		);
	};

	return WithLayoutInner;
}

export default withLayout;
