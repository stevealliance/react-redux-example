import { takeEvery, call, put } from  'redux-saga/effects';

import {
  getPageData
} from './api';

import {
  REQUEST_ADD_ITEM,
  REQUEST_PAGE_DATA,

  receiveAddItem,
  receivePageData,
} from './actions';

function* callRequestAddItem(action){
  // API if Needed

  yield put(receiveAddItem(action.payload));

}

export function* requestAddItemSaga() {
  yield takeEvery(REQUEST_ADD_ITEM, callRequestAddItem);
}


function* callRequestPageData(action){

  var results = yield call (getPageData, action.payload);

  yield put(receivePageData(results));

}


export function* requestPageDataSaga(){
  yield takeEvery(REQUEST_PAGE_DATA, callRequestPageData);
}