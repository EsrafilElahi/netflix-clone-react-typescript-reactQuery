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
  </React.StrictMode>
);

// const queryClient = new QueryClient();

// // Define the "addTodo" mutation
// queryClient.setMutationDefaults(['addTodo'], {
// 	mutationFn: addTodo,
// 	onMutate: async (variables) => {
// 		// Cancel current queries for the todos list
// 		await queryClient.cancelQueries({ queryKey: ['todos'] });

// 		// Create optimistic todo
// 		const optimisticTodo = { id: uuid(), title: variables.title };

// 		// Add optimistic todo to todos list
// 		queryClient.setQueryData(['todos'], (old) => [...old, optimisticTodo]);

// 		// Return context with the optimistic todo
// 		return { optimisticTodo };
// 	},
// 	onSuccess: (result, variables, context) => {
// 		// Replace optimistic todo in the todos list with the result
// 		queryClient.setQueryData(['todos'], (old) =>
// 			old.map((todo) => (todo.id === context.optimisticTodo.id ? result : todo)),
// 		);
// 	},
// 	onError: (error, variables, context) => {
// 		// Remove optimistic todo from the todos list
// 		queryClient.setQueryData(['todos'], (old) => old.filter((todo) => todo.id !== context.optimisticTodo.id));
// 	},
// 	retry: 3,
// });

// // Start mutation in some component:
// const mutation = useMutation({ mutationKey: ['addTodo'] });
// mutation.mutate({ title: 'title' });

// // If the mutation has been paused because the device is for example offline,
// // Then the paused mutation can be dehydrated when the application quits:
// const state = dehydrate(queryClient);

// // The mutation can then be hydrated again when the application is started:
// hydrate(queryClient, state);

// // Resume the paused mutations:
// queryClient.resumePausedMutations();
