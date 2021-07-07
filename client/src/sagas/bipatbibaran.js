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

export function* fetchpaherobibaranRequest(api, action) {
  const paherobibaranId = action.payload;

  const response = yield api.getPaherobibaran(paherobibaranId);

  if (response.ok) {
    yield put(BipatbibaranActions.fetchpaherobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchpaherobibaranFailure());
  }
}
