import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BiruwautpadanActions from "../actions/biruwautpadan";

export function* fetchallbiruwautpadanRequest(api, action) {
  const response = yield api.getBiruwautpadanList();
  if (response.ok) {
    yield put(
      BiruwautpadanActions.fetchallbiruwautpadanSuccess(response.data)
    );
  } else {
    yield put(BiruwautpadanActions.fetchallbiruwautpadanFailure());
  }
}

export function* fetchbiruwautpadanRequest(api, action) {
  const  biruwautpadanId  = action.payload

  const response = yield api.getBiruwautpadan(biruwautpadanId);
  
  if (response.ok) {
    yield put(
      BiruwautpadanActions.fetchbiruwautpadanSuccess(response.data)
    );
  } else {
    yield put(BiruwautpadanActions.fetchbiruwautpadanFailure());
  }
}
