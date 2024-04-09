
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../utils/userSlice';
import gameReducer from '../utils/gameSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
});

export default store;
