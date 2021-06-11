import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import AppActions from "../actions/app";

export function* loginRequest(api, action) {
  const { payload } = action;
  const response = yield api.loginByUsername(payload);
  if (response.ok) {
    const { msg, token, user } = response.data.data;
    window.token = token;
    yield put(AppActions.loginSuccess({ token, user }));
  } else {
    yield put(AppActions.loginFailure());
  }
}

// Municipalities

export function* fetchallmunicipalitiesRequest(api, action) {
  const response = yield api.getMunicipalitiesList();
  if (response.ok) {
    yield put(
      AppActions.fetchallmunicipalitiesSuccess(response.data)
    );
  } else {
    yield put(AppActions.fetchallmunicipalitiesFailure());
  }
}

export function* fetchmunicipalitiesRequest(api, action) {
  const municipalitiesId = action.payload;

  const response = yield api.getMunicipalities(municipalitiesId);

  if (response.ok) {
    yield put(AppActions.fetchmunicipalitiesSuccess(response.data));
  } else {
    yield put(AppActions.fetchmunicipalitiesFailure());
  }
}

// Provinces
export function* fetchallprovincesRequest(api, action) {
  const response = yield api.getProvincesList();
  if (response.ok) {
    yield put(
      AppActions.fetchallprovincesSuccess(response.data)
    );
  } else {
    yield put(AppActions.fetchallprovincesFailure());
  }
}


export function* logoutRequest(api, action) {
  yield put(AppActions.clearRequest());
  yield put(AppActions.logoutSuccess());
  yield call(history.push, "/home");
}
