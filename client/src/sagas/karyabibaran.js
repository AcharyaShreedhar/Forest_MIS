import { put } from "redux-saga/effects";
import { isNil } from "ramda";
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

export function* fetchsamajikkaryabibaranRequest(api, action) {
  const samajikkaryabibaranId = action.payload;

  const response = yield api.getSamajikkaryabibaran(samajikkaryabibaranId);
  console.log("...sagadaata", response);
  if (response.ok) {
    yield put(
      KaryabibaranActions.fetchkarmacharidarbandiSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.fetchsamajikkaryabibaranFailure());
  }
}
