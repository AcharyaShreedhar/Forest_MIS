import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import MuddaanusandhandayariActions from "../actions/muddaanusandhandayari";

export function* fetchallmuddaanusandhandayariRequest(api, action) {
 
  const response = yield api.getMuddaanusandhandayariList();
    if (response.ok) {
    yield put(
        MuddaanusandhandayariActions.fetchallmuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(MuddaanusandhandayariActions.fetchallmuddaanusandhandayariFailure());
  }
}

