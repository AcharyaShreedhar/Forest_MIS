import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import AppActions from "../actions/app";

export function* loginRequest(api, action) {
  const { payload } = action;
  const response = yield api.loginByUsername(payload);
  if (response.ok) {
    const { msg, token, user } = response.data.data;
    window.token = token;
    yield put(AppActions.loginSuccess({ token, user }));
  } else {
    yield put(AppActions.loginFailure());
  }
}

export function* logoutRequest(api, action) {
  yield put(AppActions.clearRequest());
  yield put(AppActions.logoutSuccess());
  yield call(history.push, "/home");
}
