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
  
