import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createSlice, Reducer, createSelector, configureStore  } from "@reduxjs/toolkit";
import { useCallback, useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { useInjectReducer  } from 'redux-injectors';
import { createInjectorsEnhancer } from "redux-injectors";

export type CannotUpdateWhileRenderDifferentPropsType = any;

//----------------store-------------

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

//--------------------------------------


const firstInitial = {a: {a2: 'First value'}};
const FirstSlice = createSlice({
    name: 'FirstSlice',
    initialState: firstInitial,
    reducers: {},
  });
const secondInitial = {b: {b2: 'Second value'}};
const SecondSlice = createSlice({
    name: 'SecondSlice',
    initialState: secondInitial,
    reducers: {},
});
const parentInitial = {p: {p2: 'Parent VALUE'}};
const ParentSlice = createSlice({
    name: 'ParentSlice',
    initialState: {},
    // initialState:  parentInitial,
    reducers: {}, 
});

const selectFirstDomain = (state: any) => state?.FirstSlice || {...firstInitial};
const selectSecondDomain = (state: any) => state?.SecondSlice || {...secondInitial};
const selectParentDomain = (state: any) => state?.ParentSlice || parentInitial;

const selectA  = () => createSelector([selectFirstDomain ], (state) => ({...state.a}) );
const selectВ  = () => createSelector([selectSecondDomain ], (state) => ({...state.b}) );
const selectP  = () => createSelector([selectParentDomain ], (state) => ({...state.p}) );

type FirstProps = {
    setParentState: (value: boolean) => void,
}
function First({setParentState}: FirstProps) {
    useInjectReducer({ key:  FirstSlice.name, reducer: FirstSlice.reducer });

    // setParentState(false);

    const a  = useSelector(selectA());

    return <>First! Use value: {a.a2}</>;
}

function Second() {
    useInjectReducer({ key:  SecondSlice.name, reducer: SecondSlice.reducer });

    const b = useSelector(selectВ());
    return <>Second!  Use value: {b.b2}</>; 
}

 function Parent() {
    useInjectReducer({ key: ParentSlice.name, reducer: ParentSlice.reducer });
    const p = useSelector(selectP());
    const [showFirst, setShowFirst] = useState(true);

    const handleClick = useCallback(() =>{
        setShowFirst((old) => !old);

    }, [ setShowFirst]);

    console.log('------p', p);
    useEffect(() => {
        console.log('p is new!', p);

    }, [p]);
    return ( 
        <>
            <div onClick={handleClick}>Change view</div> 
            <div onClick={handleClick}>
                {showFirst ? <First setParentState={setShowFirst} /> :  <Second />}
            </div>
            <div>
                Parent use value: {p.p2}      
            </div>
        </>
    );
}

function ParentWrapper() {
    useInjectReducer({ key: ParentSlice.name, reducer: ParentSlice.reducer });

    return (  <Parent /> );
}


export default function CannotUpdateWhileRenderDifferent(props: CannotUpdateWhileRenderDifferentPropsType) {
    return (
        <Provider store={store}>
             <ParentWrapper />
        </Provider>
    );
}