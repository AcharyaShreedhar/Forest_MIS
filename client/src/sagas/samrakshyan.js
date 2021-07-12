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
