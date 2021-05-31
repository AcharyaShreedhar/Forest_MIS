import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchallsamudayikbanbibaranRequest(api, action) {
  const response = yield api.getSamudayikbanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallsamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallsamudayikbanbibaranFailure());
  }
}
