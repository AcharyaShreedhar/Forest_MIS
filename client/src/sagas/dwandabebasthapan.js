import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import DwandabebasthapanActions from "../actions/dwandabebasthapan";

export function* fetchallbanyajantuuddarRequest(api, action) {
 
  const response = yield api.getBanyajantuUddarList();
  if (response.ok) {
    yield put(
        DwandabebasthapanActions.fetchallbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchallbanyajantuuddarFailure());
  }
}


export function* fetchbanyajantuuddarRequest(api, action) {
    const  banyajantuUddarId  = action.payload
 
    const response = yield api.getBanyajantuUddar(banyajantuUddarId);
    console.log("response....sagaa....", response);
    if (response.ok) {
      yield put(
        DwandabebasthapanActions.fetchbanyajantuuddarSuccess(response.data)
      );
    } else {
      yield put(DwandabebasthapanActions.fetchbanyajantuuddarFailure());
    }
  }


  export function* fetchallbanyajantuxetiRequest(api, action) {
 
    const response = yield api.getBanyajantuXetiList();
    if (response.ok) {
      yield put(
          DwandabebasthapanActions.fetchallbanyajantuxetiSuccess(response.data)
      );
    } else {
      yield put(DwandabebasthapanActions.fetchallbanyajantuxetiFailure());
    }
  }


  export function* fetchbanyajantuxetiRequest(api, action) {
    const  banyajantuXetiId  = action.payload
 
    const response = yield api.getBanyajantuXeti(banyajantuXetiId);
    if (response.ok) {
      yield put(
        DwandabebasthapanActions.fetchbanyajantuxetiSuccess(response.data)
      );
    } else {
      yield put(DwandabebasthapanActions.fetchbanyajantuxetiFailure());
    }
  }