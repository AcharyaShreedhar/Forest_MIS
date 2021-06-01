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


export function* fetchsamudayikbanbibaranRequest(api, action) {
  const  samudayikbanBibaranId  = action.payload

  const response = yield api.getSamudayikbanBibaran(samudayikbanBibaranId);
  
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchsamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranFailure());
  }
}


export function* fetchalldharmikbanbibaranRequest(api, action) {
  const response = yield api.getDharmikbanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchalldharmikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchalldharmikbanbibaranFailure());
  }
}