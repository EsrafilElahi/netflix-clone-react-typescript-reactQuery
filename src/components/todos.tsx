const queryClient = useQueryClient();

useMutation({
	mutationFn: updateTodo,
	// When mutate is called:
	onMutate: async (newTodo) => {
		// Cancel any outgoing refetches
		// (so they don't overwrite our optimistic update)
		await queryClient.cancelQueries({ queryKey: ['todos'] });

		// Snapshot the previous value
		const previousTodos = queryClient.getQueryData(['todos']);

		// Optimistically update to the new value
		queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);

		// Return a context object with the snapshotted value
		return { previousTodos };
	},
	// If the mutation fails,
	// use the context returned from onMutate to roll back
	onError: (err, newTodo, context) => {
		queryClient.setQueryData(['todos'], context.previousTodos);
	},
	// Always refetch after error or success:
	onSettled: () => {
		queryClient.invalidateQueries({ queryKey: ['todos'] });
	},
});
