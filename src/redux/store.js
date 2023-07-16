// import { configureStore } from '@reduxjs/toolkit';

// import contactReducer from './contactSlice';
// import filterReducer from './filterSlice';
// import authReducer from './auth/authSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//     auth: authReducer,
//   },
// });

// *****
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
// import contactReducer from '../redux/contactSlice';
// import filterReducer from './filterSlice';
// import authReducer from './auth/authSlice';
// console.log(PersistGate);

// const authpersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const reducers = combineReducers({
//   auth: authReducer,
//   contacts: contactReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(authpersistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// *****
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import contactReducer from './contactSlice';
import filterReducer from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
