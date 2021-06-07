import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanpaidawarActions from "../actions/banpaidawar";

export function* fetchallbanpaidawarRequest(api, action) {
 
  const response = yield api.getBanpaidawarList();
    if (response.ok) {
    yield put(
        BanpaidawarActions.fetchallbanpaidawarSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.fetchallbanpaidawarFailure());
  }
}