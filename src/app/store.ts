import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { loginAPI } from '../features/login/loginAPI';
import  ManageUsersAPI  from '../components/adminDashboard/manageUsers/ManageUsersAPI';

//auth persist config
const persistConfig = {
  key: 'auth',
  storage,
}

//combine all reducers
const rootReducer = combineReducers({
//   todo: todoReducer,
//   [loginAPI.reducerPath]: loginAPI.reducer,
  [ManageUsersAPI.reducerPath]: ManageUsersAPI.reducer,
});

//apply pesist Reducer to only counter reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(ManageUsersAPI.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;