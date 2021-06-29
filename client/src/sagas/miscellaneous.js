import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import { isNil } from "ramda";
import MiscellaneousActions from "../actions/miscellaneous";

export function* fetchallrojgarsrijanaRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getRojgarSrijanaList(payloaddata);

  if (response.ok) {
    yield put(MiscellaneousActions.fetchallrojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.fetchallrojgarsrijanaFailure());
  }
}

