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

export function* fetchmuddaanusandhandayariRequest(api, action) {
    const  muddaAnusandhanDayariId  = action.payload
 
    const response = yield api.getMuddaanusandhandayari(muddaAnusandhanDayariId);
    console.log("response..saga...", response);
    if (response.ok) {
      yield put(
        MuddaanusandhandayariActions.fetchmuddaanusandhandayariSuccess(response.data)
      );
    } else {
      yield put(MuddaanusandhandayariActions.fetchmuddaanusandhandayariFailure());
    }
  }

