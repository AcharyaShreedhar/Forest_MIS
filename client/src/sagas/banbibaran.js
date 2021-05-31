import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchsamudayikbanbibaranRequest(api, action) {
    console.log('.......................sagas')
  
  const response = yield api.getSamudayikbanBibaranList();
console.log('saga',response)
  if (response.ok) {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranFailure());
  }
}
