// useMutation({
// 	mutationFn: updateTodo,
// 	// When mutate is called:
// 	onMutate: async (newTodo) => {
// 		// Cancel any outgoing refetches
// 		// (so they don't overwrite our optimistic update)
// 		await queryClient.cancelQueries({ queryKey: ['todos', newTodo.id] });

// 		// Snapshot the previous value
// 		const previousTodo = queryClient.getQueryData(['todos', newTodo.id]);

// 		// Optimistically update to the new value
// 		queryClient.setQueryData(['todos', newTodo.id], newTodo);

// 		// Return a context with the previous and new todo
// 		return { previousTodo, newTodo };
// 	},
// 	// If the mutation fails, use the context we returned above
// 	onError: (err, newTodo, context) => {
// 		queryClient.setQueryData(['todos', context.newTodo.id], context.previousTodo);
// 	},
// 	// Always refetch after error or success:
// 	onSettled: (newTodo) => {
// 		queryClient.invalidateQueries({ queryKey: ['todos', newTodo.id] });
// 	},
// });
