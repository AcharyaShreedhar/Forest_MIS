import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";

import { history } from "../reducers";
import KaryabibaranActions from "../actions/karyabibaran";

export function* fetchallsamajikkaryabibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getSamajikkaryabibaranList(payloaddata);
  if (response.ok) {
    yield put(
      KaryabibaranActions.fetchallsamajikkaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.fetchallsamajikkaryabibaranFailure());
  }
}