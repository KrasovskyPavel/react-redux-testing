import { createSlice } from '@reduxjs/toolkit';
import { SquareType } from '../types';


export interface initialStateProps {
    squares: SquareType[];
}

const initialState: initialStateProps = {
  squares: [],
};

export const squaresSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    addSquare: (state) => {
        const newSquare = {
            id: Date.now(),
            color: `${'#' + Math.floor(Math.random()*16777215).toString(16)}`,
          };
          state.squares.unshift(newSquare);
    },
    removeSquare: (state) => {
      state.squares.pop();
    },
  },
});

export const { addSquare, removeSquare } = squaresSlice.actions;
export default squaresSlice.reducer;
