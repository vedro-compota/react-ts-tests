import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../../store';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state?.['saga-all'] || initialState;
const selectDomain2 = (state: RootState) => state?.['saga-all2'] || initialState;

export const selectCounter1 = createSelector([selectDomain], (state) => state.counterValue1);
export const selectCounter2 = createSelector([selectDomain], (state) => state.counterValue2);


export const selectCounter22 = createSelector([selectDomain2], (state) => state.counterValue2);