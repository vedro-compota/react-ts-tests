import { createSelector } from '@reduxjs/toolkit';

type UserInfo = {
    name: string,
    active: boolean
    items: string[]
}

type RootState = {
    user: UserInfo
}

export const initialState: UserInfo = {
     name: '',
     items: [],
     active: true
  };

const selectDomain = (state: RootState) => state?.user || initialState;
const selectUserName = createSelector([selectDomain], ({ name }) => name);
const selectIsActive = createSelector([selectDomain], ({ active }) => active);

export const selectDemo1 = createSelector([selectDomain], ({ name }) => name);


export const selectUserInfo = createSelector([selectUserName, 
    selectIsActive, 
    // uncomment selector below to see error: 
    // selectDemo1, 
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1,
    // selectDemo1, 
],
     (name, active ) => `${name} ${active}`);

