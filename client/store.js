import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './reducers/noteReducer.js';
import userReducer from './reducers/userReducer.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: { notes: noteReducer, users: persistedReducer},
});

const persistor = persistStore(store);
// const store = configureStore(persistedReducer);
export { store, persistor };