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

