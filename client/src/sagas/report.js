import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import { isNil } from "ramda";
import ReportActions from "../actions/report";

export function* fetchnabikaranbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.postNabikaranBibaran(payloaddata);

  if (response.ok) {
    yield put(ReportActions.fetchnabikaranbibaranSuccess(response.data));
  } else {
    yield put(ReportActions.fetchnabikaranbibaranFailure());
  }
}

export function* fetchsamuhabhitrabanpaidawarbikribibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.postBanpaidawarBikriSamuhaBhitra(payloaddata);

  if (response.ok) {
    yield put(ReportActions.fetchsamuhabhitrabanpaidawarbikribibaranSuccess(response.data));
  } else {
    yield put(ReportActions.fetchsamuhabhitrabanpaidawarbikribibaranFailure());
  }
}


