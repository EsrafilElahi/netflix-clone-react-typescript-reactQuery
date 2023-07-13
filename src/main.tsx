import ErrorBoundary from 'components/other/ErrorBoundary';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App title='Home' />
		</ErrorBoundary>
	</React.StrictMode>,
);
