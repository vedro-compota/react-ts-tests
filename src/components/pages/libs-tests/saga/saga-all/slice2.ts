

import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    counterValue2: number
  }

export const initialState: CounterState = {
  counterValue2: 0,
};

export const {
  actions,
  reducer,
  name: sliceKey,
} = createSlice({
  name: 'saga-all',
  initialState,
  reducers: {
    increment2(state) {
      console.log('SLICE2 inc2  itself');
      state.counterValue2 += 1;
    },
  },
});
