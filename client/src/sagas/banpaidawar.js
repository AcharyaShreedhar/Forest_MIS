import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanpaidawarActions from "../actions/banpaidawar";

export function* fetchallbanpaidawarRequest(api, action) {
 
  const response = yield api.getBanpaidawarList();
    if (response.ok) {
    yield put(
        BanpaidawarActions.fetchallbanpaidawarSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.fetchallbanpaidawarFailure());
  }
}

export function* fetchbanpaidawarRequest(api, action) {
    const  banpaidawarId  = action.payload
    
    const response = yield api.getBanpaidawar(banpaidawarId);
    if (response.ok) {
      yield put(
        BanpaidawarActions.fetchbanpaidawarSuccess(response.data)
      );
    } else {
      yield put(BanpaidawarActions.fetchbanpaidawarFailure());
    }
  }

  export function* fetchallbanpaidawarlilamRequest(api, action) {
 
    const response = yield api.getBanpaidawarlilamList();
      if (response.ok) {
      yield put(
          BanpaidawarActions.fetchallbanpaidawarlilamSuccess(response.data)
      );
    } else {
      yield put(BanpaidawarActions.fetchallbanpaidawarlilamFailure());
    }
  }

  export function* fetchbanpaidawarlilamRequest(api, action) {
    const  banpaidawarLilamId  = action.payload
    
    const response = yield api.getBanpaidawarlilam(banpaidawarLilamId);
    if (response.ok) {
      yield put(
        BanpaidawarActions.fetchbanpaidawarlilamSuccess(response.data)
      );
    } else {
      yield put(BanpaidawarActions.fetchbanpaidawarlilamFailure());
    }
  }