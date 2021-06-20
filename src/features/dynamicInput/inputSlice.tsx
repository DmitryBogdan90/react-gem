import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface InputState {
  value: string;
  focus: boolean;
}

const initialState: InputState = {
  value: '',
  focus: false,
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    add: (state: InputState, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    focusOn: (state: InputState) => {
      state.focus = true;
    },
    focusOff: (state: InputState) => {
      state.focus = false;
    },
  },
});

export const { add, focusOff, focusOn } = inputSlice.actions;

export const getInput = (state: RootState) => state.input.value;

export const getFocus = (state: RootState) => state.input.focus;

export default inputSlice.reducer;
