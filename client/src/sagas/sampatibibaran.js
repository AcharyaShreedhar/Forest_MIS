import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import SampatibibaranActions from "../actions/sampatibibaran";

export function* fetchallassetsRequest(api, action) {
 
  const response = yield api.getAssetsList();
    if (response.ok) {
    yield put(
        SampatibibaranActions.fetchallassetsSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.fetchallassetsFailure());
  }
}

export function* fetchassetsRequest(api, action) {
    const  assetId  = action.payload
 
    const response = yield api.getAssets(assetId);
    
    if (response.ok) {
      yield put(
        SampatibibaranActions.fetchassetsSuccess(response.data)
      );
    } else {
      yield put(SampatibibaranActions.fetchassetsFailure());
    }
  }