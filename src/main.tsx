import ErrorBoundary from 'components/other/ErrorBoundary';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient,QueryClientProvider,useQuery } from 'react-query';
import App from './App.tsx';
import { fetchHomePage } from './api gateway/HomePage.ts';
import './styles/index.css';


const homePageURLs = [
	import.meta.env.VITE_TRENDING_MOVIES,
	import.meta.env.VITE_FAVORITE_MOVIES,
	import.meta.env.VITE_ALL_SERIES,
];

const fetchAllDefaultsHomePage = () => {
	fetchHomePage(homePageURLs)
		.then((results) => {
			const finalData = results.filter((result) => result.status === 'fulfilled').map((res) => res.value);
			queryClient.setQueryData(['home', 'trendings', 'favorites', 'series'], finalData);
			return finalData;
		})
		.catch((err) => {
			console.log('err catch :', err);
		});
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			queryKey: ['home', 'trendings', 'favorites', 'series'],
			queryFn: fetchAllDefaultsHomePage,
			initialData: [],
		},
	},
});


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</QueryClientProvider>
	</React.StrictMode>
);
