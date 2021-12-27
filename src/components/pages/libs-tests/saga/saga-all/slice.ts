

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    counterValue1: number,
    counterValue2: number
  }

export const initialState: CounterState = {
  counterValue1: 0,
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
    testPut(state) {
      return state;
    },
    testAllPut(state) {
      return state;
    },
    increment1(state) {
      state.counterValue1 += 1;
    },
    increment2(state) {
      state.counterValue2 += 1;
    },
  },
});
