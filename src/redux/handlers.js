export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== payload.id);
};

export const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

export const handleLogInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

export const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.isLoading = false;
};

export const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = null;
};
