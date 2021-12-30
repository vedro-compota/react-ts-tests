import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { sagaAllSaga } from '../components/pages/libs-tests/saga/saga-all/saga';
import {reducer as sagaAllReducer} from '../components/pages/libs-tests/saga/saga-all/slice';
import {reducer as sagaAllReducer2} from '../components/pages/libs-tests/saga/saga-all/slice2';



const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const middlewares = [sagaMiddleware];
//const { run: runSaga } = sagaMiddleware;


export const store = configureStore({
  reducer: {
    'saga-all': sagaAllReducer,
    'saga-all2': sagaAllReducer2,
  },
  middleware: middlewares,
  devTools: true,
});
sagaMiddleware.run(sagaAllSaga);

export type RootState = ReturnType<typeof store.getState>;

