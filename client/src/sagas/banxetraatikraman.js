import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanxetraatikramanActions from "../actions/banxetraatikraman";

export function* fetchallbanxetraatikramanRequest(api, action) {
 
  const response = yield api.getBanxetraatikramanList();
    if (response.ok) {
    yield put(
        BanxetraatikramanActions.fetchallbanxetraatikramanSuccess(response.data)
    );
  } else {
    yield put(BanxetraatikramanActions.fetchallbanxetraatikramanFailure());
  }
}