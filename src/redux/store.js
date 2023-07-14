import { configureStore } from '@reduxjs/toolkit';

import contactReducer from './contactSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';
// import contactsReducer from '../redux/contactSlice';
// import filterReducer from './filterSlice';
// import authReducer from './auth/authSlice';
// console.log(PersistGate);

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// // const { reducers } = combineReducers({
// //   auth: authReducer,
// //   contacts: contactReducer,
// //   filter: filterReducer,
// // });

// // const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reduser: {
//     auth: persistReducer(persistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   // reducer: persistReducer(persistConfig, reducers),
//   // reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
