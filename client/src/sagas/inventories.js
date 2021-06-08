import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import InventoriesActions from "../actions/inventories";

export function* fetchallinventoriesRequest(api, action) {
  const response = yield api.getInventoriesList();

  if (response.ok) {
    yield put(InventoriesActions.fetchallinventoriesSuccess(response.data));
  } else {
    yield put(InventoriesActions.fetchallinventoriesFailure());
  }
}