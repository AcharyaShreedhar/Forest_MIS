import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import KarmacharibibaranActions from "../actions/karmacharibibaran";

export function* fetchallemployeesRequest(api, action) {
  const response = yield api.getEmployeesList();

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchallemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchallemployeesFailure());
  }
}