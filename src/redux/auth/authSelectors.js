export const selectIsLoggedIn = state => !!state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsErrorLogin = state => state.auth.errorLogin;
