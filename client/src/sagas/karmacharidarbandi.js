import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import KarmacharidarbandiActions from "../actions/karmacharidarbandi";

export function* fetchallkarmacharidarbandiRequest(api, action) {
  const response = yield api.getKarmacharidarbandiList();
  if (response.ok) {
    yield put(
      KarmacharidarbandiActions.fetchallkarmacharidarbandiSuccess(response.data)
    );
  } else {
    yield put(KarmacharidarbandiActions.fetchallkarmacharidarbandiFailure());
  }
}

export function* fetchkarmacharidarbandiRequest(api, action) {
  const  karmacharidarbandiId  = action.payload

  const response = yield api.getKarmacharidarbandi(karmacharidarbandiId);
  
  if (response.ok) {
    yield put(
      KarmacharidarbandiActions.fetchkarmacharidarbandiSuccess(response.data)
    );
  } else {
    yield put(KarmacharidarbandiActions.fetchkarmacharidarbandiFailure());
  }
}


