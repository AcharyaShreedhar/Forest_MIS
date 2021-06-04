import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import SampatibibaranActions from "../actions/sampatibibaran";

export function* fetchallassetsRequest(api, action) {
 
  const response = yield api.getAssetsList();
    if (response.ok) {
    yield put(
        SampatibibaranActions.fetchallassetsSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.fetchallassetsFailure());
  }
}