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

export function* fetchdharmikbanbibaranRequest(api, action) {
  const  dharmikbanBibaranId  = action.payload

  const response = yield api.getDharmikbanBibaran(dharmikbanBibaranId);
  console.log("response", response);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchdharmikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchdharmikbanbibaranFailure());
  }
}


export function* fetchallnijibanbibaranRequest(api, action) {
  const response = yield api.getNijibanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallnijibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallnijibanbibaranFailure());
  }
}



export function* fetchallkabuliyatibanbibaranRequest(api, action) {
  const response = yield api.getKabuliyatibanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallkabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallkabuliyatibanbibaranFailure());
  }
}
