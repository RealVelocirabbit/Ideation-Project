import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/noteReducer.js';
import userReducer from './reducers/userReducer.js'

const store = configureStore({
  reducer: { notes: notesReducer, users: userReducer},
});

export default store;
