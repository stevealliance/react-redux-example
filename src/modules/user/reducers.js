import { handleAction, combineActions } from 'redux-actions';

import {
  RECEIVE_LOGIN,
  RECEIVE_LOGOUT,

  receiveLogin,
  receiveLogout,

} from './actions';


var defaultState = {
  items: []
};

export const user = handleAction(combineActions(
  receiveLogin,
  receiveLogout
), {
    next(state, action) {
      switch (action.type) {
        case RECEIVE_LOGIN:
          var newState = {
            ...state
          };

          newState.loginData = action.payload;
          

          return newState;
        case RECEIVE_LOGOUT:
          var newState = {
            ...state
          };

          newState.logoutData = action.payload;

          return newState;
        default:
          return state;
      }
    },
    throw(state, action) {
      switch (action.type) {
        case RECEIVE_LOGIN:
          var newState = {
            ...state
          };

          newState.loginError = action.payload;

          return newState;
        case RECEIVE_LOGOUT:
          var newState = {
            ...state
          };

          newState.logoutError = action.payload;

          return newState;

        default:
          return state;
      }
    }
  }, defaultState
)