import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchallbaramaditchijbastuRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBaramaditchijbastuList(payloaddata);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallbaramaditchijbastuSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallbaramaditchijbastuFailure());
  }
}

export function* fetchbaramaditchijbastuRequest(api, action) {
    const baramaditchijbastuId= action.payload
  
    const response = yield api.getBaramaditchijbastu(baramaditchijbastuId);
    if (response.ok) {
      yield put(
        BanbibaranActions.fetchbaramaditchijbastuSuccess(response.data)
      );
    } else {
      yield put(BanbibaranActions.fetchbaramaditchijbastuFailure());
    }
  }

  export function* fetchallbanxetraanyaprayojanRequest(api, action) {
    const { payload } = action;
    const payloaddata = isNil(payload) ? action : payload;
    const response = yield api.getBanxetraanyaprayojanList(payloaddata);
    if (response.ok) {
      yield put(
        BanbibaranActions.fetchallbanxetraanyaprayojanSuccess(response.data)
      );
    } else {
      yield put(BanbibaranActions.fetchallbanxetraanyaprayojanFailure());
    }
  }

  export function* fetchbanxetraanyaprayojanRequest(api, action) {
    const banxetraanyaprayojanId= action.payload
  
    const response = yield api.getBanxetraanyaprayojan(banxetraanyaprayojanId);
    if (response.ok) {
      yield put(
        BanbibaranActions.fetchbanxetraanyaprayojanSuccess(response.data)
      );
    } else {
      yield put(BanbibaranActions.fetchbanxetraanyaprayojanFailure());
    }
  }