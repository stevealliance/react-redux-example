import { takeEvery, call, put } from  'redux-saga/effects';

import {
  login,
  logout
} from './api';

import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,

  receiveLogin,
  receiveLogout,
} from './actions';

function* callLogin(action){
  
  var results = yield call (login, action.payload);
  console.log("Results:", results)
  yield put(receiveLogin(results));

}

export function* loginSaga() {
  yield takeEvery(REQUEST_LOGIN, callLogin);
}


function* callLogout(action){

  var results = yield call (logout, action.payload);

  yield put(receiveLogout(results));

}


export function* logoutSaga(){
  yield takeEvery(REQUEST_LOGOUT, callLogout);
}