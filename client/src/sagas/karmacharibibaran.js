import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import KarmacharibibaranActions from "../actions/karmacharibibaran";

export function* fetchallemployeesRequest(api, action) {
  const response = yield api.getEmployeesList();

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchallemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchallemployeesFailure());
  }
}

export function* fetchemployeesRequest(api, action) {
    const  employeesId  = action.payload
  
    const response = yield api.getEmployees(employeesId);
    
    if (response.ok) {
      yield put(
        KarmacharibibaranActions.fetchemployeesSuccess(response.data)
      );
    } else {
      yield put(KarmacharibibaranActions.fetchemployeesFailure());
    }
  }


  
export function* fetchallemployeeshistoryRequest(api, action) {
    const response = yield api.getEmployeeshistoryList();
  
    if (response.ok) {
      yield put(KarmacharibibaranActions.fetchallemployeeshistorySuccess(response.data));
    } else {
      yield put(KarmacharibibaranActions.fetchallemployeeshistoryFailure());
    }
  }
  
  export function* fetchemployeeshistoryRequest(api, action) {
    const  histId  = action.payload
  
    const response = yield api.getEmployeeshistory(histId);
    
    if (response.ok) {
      yield put(
        KarmacharibibaranActions.fetchemployeeshistorySuccess(response.data)
      );
    } else {
      yield put(KarmacharibibaranActions.fetchemployeeshistoryFailure());
    }
  }

   
export function* fetchalllevelRequest(api, action) {
  const response = yield api.getLevelList();

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchalllevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchalllevelFailure());
  }
}
  