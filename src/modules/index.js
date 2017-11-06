import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fork, all } from 'redux-saga/effects';

import { ui } from './ui/reducers';
import * as uiSagas from './ui/sagas';

import { user } from './user/reducers';
import * as userSagas from './user/sagas';


export const rootReducer = combineReducers({
  ui,
  user,
  router: routerReducer
});

export function* rootSaga() {
  yield all([
    ...Object.values(uiSagas),
    ...Object.values(userSagas),
  ].map(fork));
};


