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


export function* fetchinventoriesRequest(api, action) {
  const  inventId  = action.payload

  const response = yield api.getInventories(inventId);
  
  if (response.ok) {
    yield put(
      InventoriesActions.fetchinventoriesSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.fetchinventoriesFailure());
  }
}

