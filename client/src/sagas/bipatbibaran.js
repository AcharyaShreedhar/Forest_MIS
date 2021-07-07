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

// Add paherobibaran
export function* addpaherobibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPaherobibaranAddNew(
    payload.paherobibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक पहिरो बिबरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpaherobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "pahiro_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipats/paherobibaranlist");
    yield put(BipatbibaranActions.addpaherobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.addpaherobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
