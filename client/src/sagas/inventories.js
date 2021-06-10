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

export function* fetchallentryRequest(api, action) {
  const response = yield api.getEntryList();

  if (response.ok) {
    yield put(InventoriesActions.fetchallentrySuccess(response.data));
  } else {
    yield put(InventoriesActions.fetchallentryFailure());
  }
}

export function* fetchentryRequest(api, action) {
  const  entryId  = action.payload

  const response = yield api.getEntry(entryId);
  
  if (response.ok) {
    yield put(
      InventoriesActions.fetchentrySuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.fetchentryFailure());
  }
}

export function* fetchallexitRequest(api, action) {
  const response = yield api.getExitList();

  if (response.ok) {
    yield put(InventoriesActions.fetchallexitSuccess(response.data));
  } else {
    yield put(InventoriesActions.fetchallexitFailure());
  }
}


export function* fetchexitRequest(api, action) {
  const  exitId  = action.payload

  const response = yield api.getExit(exitId);
  
  if (response.ok) {
    yield put(
      InventoriesActions.fetchexitSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.fetchexitFailure());
  }
}