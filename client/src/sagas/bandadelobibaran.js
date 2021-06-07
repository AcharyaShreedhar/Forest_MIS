import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BandadelobibaranActions from "../actions/bandadelobibaran";


export function* fetchallbandadelobibaranRequest(api, action) {
    const response = yield api.getBandadelobibaranList();

    if (response.ok) {
      yield put(
        BandadelobibaranActions.fetchallbandadelobibaranSuccess(response.data)
      );
    } else {
      yield put(BandadelobibaranActions.fetchallbandadelobibaranFailure());
    }
  }
  

  export function* fetchbandadelobibaranRequest(api, action) {
    const  bandadeloBibaranId  = action.payload
  
    const response = yield api.getBandadelobibaran(bandadeloBibaranId);
    if (response.ok) {
      yield put(
        BandadelobibaranActions.fetchbandadelobibaranSuccess(response.data)
      );
    } else {
      yield put(BandadelobibaranActions.fetchbandadelobibaranFailure());
    }
  }
  
