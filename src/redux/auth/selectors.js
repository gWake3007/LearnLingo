export const selectUser = state => Boolean(state.auth.user);

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;
