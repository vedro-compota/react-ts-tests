import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { sagaAllSaga } from '../components/pages/libs-tests/saga/saga-all/saga';
import {reducer as sagaAllReducer} from '../components/pages/libs-tests/saga/saga-all/slice';



const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const middlewares = [sagaMiddleware];
const { run: runSaga } = sagaMiddleware;


export const store = configureStore({
  reducer: {
    'saga-all': sagaAllReducer,
  },
  middleware: middlewares,
  devTools: true,
});
sagaMiddleware.run(sagaAllSaga);

export type RootState = ReturnType<typeof store.getState>;

