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


  export function* fetchallvehiclesRequest(api, action) {
 
    const response = yield api.getVehiclesList();
    
        if (response.ok) {
      yield put(
          SampatibibaranActions.fetchallvehiclesSuccess(response.data)
      );
    } else {
      yield put(SampatibibaranActions.fetchallvehiclesFailure());
    }
  }


  export function* fetchvehiclesRequest(api, action) {
    const  vehicleId  = action.payload
 
    const response = yield api.getVehicles(vehicleId);
    
    if (response.ok) {
      yield put(
        SampatibibaranActions.fetchvehiclesSuccess(response.data)
      );
    } else {
      yield put(SampatibibaranActions.fetchvehiclesFailure());
    }
  }