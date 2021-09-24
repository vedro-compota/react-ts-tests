import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createSlice, createStore, Reducer, createSelector, configureStore  } from "@reduxjs/toolkit";
import React, { useCallback, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { useInjectReducer  } from 'redux-injectors';
import { createInjectorsEnhancer } from "redux-injectors";

export type CannotUpdateWhileRenderDifferentPropsType = any;

const firstInitial = {a: {a2: 1}};
const FirstSlice = createSlice({
    name: 'FirstSlice',
    initialState: firstInitial,
    reducers: {},
  });
const secondInitial = {b: {b2: 1}};
const SecondSlice = createSlice({
    name: 'SecondSlice',
    initialState: secondInitial,
    reducers: {},
});
const selectFirstDomain = (state: any) => state?.FirstSlice || firstInitial;
const selectSecondDomain = (state: any) => state?.SecondSlice || secondInitial;

const selectA  = () => createSelector([selectFirstDomain ], (state) => ({...state.a}) );
const selectВ  = () => createSelector([selectSecondDomain ], (state) => ({...state.b}) );

function First() {
    useInjectReducer({ key:  FirstSlice.name, reducer: FirstSlice.reducer });

    const a  = useSelector(selectA());
    console.log('--a', a);
    return <>First! Use value: {a.a2}</>;
}

function Second() {
    useInjectReducer({ key:  SecondSlice.name, reducer: SecondSlice.reducer });

    const b = useSelector(selectВ());
    return <>Second!  Use value: {b.b2}</>;
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: { [key: string]: Reducer } = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  } else {
    return combineReducers({
      ...injectedReducers,
    });
  }
}

export default function CannotUpdateWhileRenderDifferent(props: CannotUpdateWhileRenderDifferentPropsType) {
    const [showFirst, setShowFirst] = useState(true);

    const sagaMiddleware = createSagaMiddleware({});
    const { run: runSaga } = sagaMiddleware;
    const middlewares = [sagaMiddleware];

      const enhancers = [
        createInjectorsEnhancer({
          createReducer,
          runSaga,
        }),
      ];

    const store = configureStore({
        reducer: createReducer(),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
        devTools: process.env.NODE_ENV !== 'production',
        // A bit dirty because of https://github.com/react-boilerplate/redux-injectors/issues/27
        // Waiting on redux-injectors to fix their typings for recent reduxjs/toolkit
        enhancers: enhancers as any,
    });

    const handleClick = useCallback(() =>{
        setShowFirst((old) => !old);

    }, [ setShowFirst])
    return (
        <Provider store={store}>
        <div onClick={handleClick}>Change view</div> 
        <div onClick={handleClick}>
            {showFirst ? <First /> :  <Second />}
            </div>
        </Provider>
    );
}