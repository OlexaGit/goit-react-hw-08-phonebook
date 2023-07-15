export const selectContacts = state => {
  return {
    items: state.contacts.contacts.items,
    isLoading: state.contacts.contacts.isLoading,
    error: state.contacts.contacts.error,
  };
};
export const selectContactsItems = state => state.contacts.contacts;
export const selectFilterContacts = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
