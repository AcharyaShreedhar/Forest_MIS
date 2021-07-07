import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import BipatbibaranActions from "../actions/bipatbibaran";

export function* fetchallpaherobibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getPaherobibaranList(payloaddata);
  if (response.ok) {
    yield put(BipatbibaranActions.fetchallpaherobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchallpaherobibaranFailure());
  }
}
