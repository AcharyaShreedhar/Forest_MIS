import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";
import { history } from "../reducers";
import SamrakshyanActions from "../actions/samrakshyan";

export function* fetchallsamrakshyanpokharinirmanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getSamrakshyanpokhariNirmanList(payloaddata);
  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchallsamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchallsamrakshyanpokharinirmanFailure());
  }
}

export function* fetchsamrakshyanpokharinirmanRequest(api, action) {
  const samrakshyanpokhariNirmanId = action.payload;

  const response = yield api.getSamrakshyanpokhariNirman(
    samrakshyanpokhariNirmanId
  );

  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchsamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchsamrakshyanpokharinirmanFailure());
  }
}

// Add samrakshyanpokhari
export function* addsamrakshyanpokharinirmanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSamrakshyanpokhariNirmanAddNew(
    payload.samrakshyanpokhari.data
  );

  if (response.ok) {
    yield addsamrakshyanpokharinirmanRequest(api, [
      payload,
      "samrakshyanPokhariNirman",
    ]);
    yield put(SamrakshyanActions.addsamrakshyanpokhariSuccess(response.data));
  } else {
    yield put(SamrakshyanActions.addsamrakshyanpokhariFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
