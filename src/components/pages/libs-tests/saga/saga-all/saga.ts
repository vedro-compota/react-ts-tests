import { actions } from "./slice";
import { takeLatest,  put,  all, takeEvery } from 'redux-saga/effects';


function* testPut() {
    console.log('saga testPut');
    yield put(actions.increment1());
    yield put(actions.increment2());
}


function* testAllPut() {
    console.log('saga testAllPut');
    yield all([put(actions.increment1()),put(actions.increment2())]); 

}

export function* sagaAllSaga() {
    yield takeEvery(actions.testPut,  testPut);
    yield takeEvery(actions.testAllPut,  testAllPut);

 }