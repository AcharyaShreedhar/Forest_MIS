import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";

import { history } from "../reducers";
import KarmacharidarbandiActions from "../actions/karmacharidarbandi";

export function* fetchallkarmacharidarbandiRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getKarmacharidarbandiList(payloaddata);
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
    yield fetchallkarmacharidarbandiRequest(api,{
      name: "post",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karmachari/karmacharidarbandilist");
    yield put(KarmacharidarbandiActions.addkarmacharidarbandiSuccess(response.data));
  } else {
    yield put(KarmacharidarbandiActions.addkarmacharidarbandiFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

// Update karmacharidarbandi
export function* updatekarmacharidarbandiRequest(api, action) {
  const { payload, karmacharidarbandiId } = action;

  const response = yield api.postKarmacharidarbandiUpdate(
    payload.karmacharidarbandi.data,
    karmacharidarbandiId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी दरबन्दी पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkarmacharidarbandiRequest(api,{
      name: "post",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karmachari/karmacharidarbandilist");
    yield put(
      KarmacharidarbandiActions.updatekarmacharidarbandiSuccess(response.data)
    );
  } else {
    yield put(KarmacharidarbandiActions.updatekarmacharidarbandiFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Delete karmacharidarbandi
export function* deletekarmacharidarbandiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharidarbandiDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी दरबन्दी हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkarmacharidarbandiRequest(api,{
      name: "post",
      page: 0,
      perPage: 10,
    });
    yield put(
      KarmacharidarbandiActions.deletekarmacharidarbandiSuccess(response.data)
    );
  } else {
    yield put(KarmacharidarbandiActions.deletekarmacharidarbandiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}