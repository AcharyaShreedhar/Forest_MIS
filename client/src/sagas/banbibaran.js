import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchsamudayikbanbibaranRequest(api, action) {
  const { payload } = action;
  const response = yield api.postCareerProgram(payload);

  if (response.ok) {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranSuccess());
  } else {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranFailure());
  }
}
