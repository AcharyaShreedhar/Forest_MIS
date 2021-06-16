import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

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


// Add karmacharidarbandi
export function* addkarmacharidarbandiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharidarbandiAddNew(
    payload.karmacharidarbandi.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी दरबन्दी प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield addkarmacharidarbandiRequest(api);
    yield call(history.push, "/forests/karmacharidarbandilist");
    yield put(KarmacharidarbandiActions.addkarmacharidarbandiSuccess(response.data));
  } else {
    yield put(KarmacharidarbandiActions.addkarmacharidarbandiFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
