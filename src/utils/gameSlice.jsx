
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameHistory: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addGameToHistory: (state, action) => {
      state.gameHistory.push(action.payload);
    },
  },
});

export const { addGameToHistory } = gameSlice.actions;

export default gameSlice.reducer;
