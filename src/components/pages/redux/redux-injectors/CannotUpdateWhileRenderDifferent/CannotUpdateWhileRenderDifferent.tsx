import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createSlice, createStore, Reducer, createSelector, configureStore  } from "@reduxjs/toolkit";
import React, { useCallback, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { useInjectReducer  } from 'redux-injectors';
import { createInjectorsEnhancer } from "redux-injectors";

export type CannotUpdateWhileRenderDifferentPropsType = any;

const FirstSlice = createSlice({
    name: 'FirstSlice',
    initialState: {a: 1},
    reducers: {},
  });

const SecondSlice = createSlice({
    name: 'SecondSlice',
    initialState: {b: 2},
    reducers: {},
});
const selectFirstDomain = (state: any) => state?.FirstSlice || {a: 1};
const selectSecondDomain = (state: any) => state?.SecondSlice || {b: 2};

const selectA  = createSelector([selectFirstDomain ], (state) => state.a);

function First() {
    useInjectReducer({ key:  FirstSlice.name, reducer: FirstSlice.reducer });

    const a  = useSelector(selectA);
    return <>First! Use value: {a}</>;
}

function Second() {
    useInjectReducer({ key:  SecondSlice.name, reducer: SecondSlice.reducer });
    return <>Second! </>;
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