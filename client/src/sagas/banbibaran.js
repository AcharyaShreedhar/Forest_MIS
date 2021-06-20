import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchallbaramaditchijbastuRequest(api, action) {
  const response = yield api.getBaramaditchijbastuList();
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
    const response = yield api.getBanxetraanyaprayojanList();
    if (response.ok) {
      yield put(
        BanbibaranActions.fetchallbanxetraanyaprayojanSuccess(response.data)
      );
    } else {
      yield put(BanbibaranActions.fetchallbanxetraanyaprayojanFailure());
    }
  }
