

import { createSlice } from '@reduxjs/toolkit';

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
      console.log('inc1 itself');
      let i = 0;
      while (i < 1000000000) {
        i++;
      }
      state.counterValue1 += i;
    },
    increment2(state) {
      console.log('inc2  itself');
      state.counterValue2 += 1;
    },
  },
});
