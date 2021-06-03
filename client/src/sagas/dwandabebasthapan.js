import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import DwandabebasthapanActions from "../actions/dwandabebasthapan";

export function* fetchallbanyajantuuddarRequest(api, action) {
 
  const response = yield api.getBanyajantuUddarList();
  if (response.ok) {
    yield put(
        DwandabebasthapanActions.fetchallbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchallbanyajantuuddarFailure());
  }
}