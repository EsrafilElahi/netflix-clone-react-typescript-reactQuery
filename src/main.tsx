import ErrorBoundary from 'components/other/ErrorBoundary';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient,QueryClientProvider,useQuery } from 'react-query';
import { Result,Value } from 'types/HomePageTypes';
import App from './App.tsx';
import { fetchHomePage } from './api gateway/HomePage.ts';
import './styles/index.css';


const homePageURLs: string[] = [
	import.meta.env.VITE_TRENDING_MOVIES,
	import.meta.env.VITE_FAVORITE_MOVIES,
	import.meta.env.VITE_ALL_SERIES,
];


type PromiseFulFilled = { status: 'fulfilled'; value: Value };
type PromiseRejected = { status: 'rejected'; reason: any };
type PromiseSettledResult = PromiseFulFilled | PromiseRejected;


const fetchAllDefaultsHomePage = async (): Promise<Value[]> => {
	return fetchHomePage(homePageURLs)
		.then((results: PromiseSettledResult[]) => {
			const data: Value[] = results
				.filter((result): result is PromiseFulFilled => result.status === 'fulfilled')
				.map((res) => res.value);

			// another way
			// const data: Value[] = results.reduce((accumulator: Value[], result: PromiseSettledResult) => {
			// 	if (result.status === 'fulfilled') {
			// 		accumulator.push(result.value);
			// 	} else {
			// 		// Handle rejected promises if needed
			// 		console.log('Promise rejected:', result.reason);
			// 	}
			// 	return accumulator;
			// }, []);

			queryClient.setQueryData(['home', 'trendings', 'favorites', 'series'], data);
			return data;
		})
		.catch((err) => {
			console.log('err catch :', err);
			throw err;
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
