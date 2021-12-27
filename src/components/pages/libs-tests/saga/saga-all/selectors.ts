import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../../store';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state?.['saga-all'] || initialState;

export const selectCounter1 = createSelector([selectDomain], (state) => state.counterValue1);
export const selectCounter2 = createSelector([selectDomain], (state) => state.counterValue2);