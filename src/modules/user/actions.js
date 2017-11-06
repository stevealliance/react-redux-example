import { createAction } from 'redux-actions';
// action     type
// request*   REQUEST_*
// receive*   RECEIVE_*


export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'; 

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT'; 



export const requestLogin = createAction(REQUEST_LOGIN);
export const receiveLogin = createAction(RECEIVE_LOGIN);

export const requestLogout = createAction(REQUEST_LOGOUT);
export const receiveLogout = createAction(RECEIVE_LOGOUT);
