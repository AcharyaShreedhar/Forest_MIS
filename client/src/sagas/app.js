import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import AppActions from "../actions/app";

export function* loginRequest(api, action) {
  const { payload } = action;

  const response = yield api.loginByUsername(payload);

  if (response.ok) {
    const { user } = response.data;
    const { user_token } = user;
    window.token = user_token;
    yield put(AppActions.loginSuccess({ user_token, user }));
    yield call(history.push, "/home");
  } else {
    yield put(AppActions.loginFailure());
  }
}

// Municipalities

export function* fetchallmunicipalitiesRequest(api, action) {
  const response = yield api.getMunicipalitiesList();
  if (response.ok) {
    yield put(AppActions.fetchallmunicipalitiesSuccess(response.data));
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
    yield put(AppActions.fetchallprovincesSuccess(response.data));
  } else {
    yield put(AppActions.fetchallprovincesFailure());
  }
}
export function* fetchprovincesRequest(api, action) {
  const provincesId = action.payload;

  const response = yield api.getProvinces(provincesId);

  if (response.ok) {
    yield put(AppActions.fetchprovincesSuccess(response.data));
  } else {
    yield put(AppActions.fetchprovincesFailure());
  }
}

// Districts
export function* fetchalldistrictsRequest(api, action) {
  const response = yield api.getDistrictsList();
  if (response.ok) {
    yield put(AppActions.fetchalldistrictsSuccess(response.data));
  } else {
    yield put(AppActions.fetchalldistrictsFailure());
  }
}
export function* fetchdistrictsRequest(api, action) {
  const districtsId = action.payload;

  const response = yield api.getDistricts(districtsId);

  if (response.ok) {
    yield put(AppActions.fetchdistrictsSuccess(response.data));
  } else {
    yield put(AppActions.fetchdistrictsFailure());
  }
}

// Users
export function* fetchallusersRequest(api, action) {
  const response = yield api.getUsersList();
  if (response.ok) {
    yield put(AppActions.fetchallusersSuccess(response.data));
  } else {
    yield put(AppActions.fetchallusersFailure());
  }
}


export function* logoutRequest(api, action) {
  yield put(AppActions.clearRequest());
  yield put(AppActions.logoutSuccess());
  yield call(history.push, "/login");
}
