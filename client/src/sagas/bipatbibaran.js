import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import BipatbibaranActions from "../actions/bipatbibaran";

export function* fetchallpahirobibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getPahirobibaranList(payloaddata);
  if (response.ok) {
    yield put(BipatbibaranActions.fetchallpahirobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchallpahirobibaranFailure());
  }
}

export function* fetchpahirobibaranRequest(api, action) {
  const pahirobibaranId = action.payload;

  const response = yield api.getPahirobibaran(pahirobibaranId);

  if (response.ok) {
    yield put(BipatbibaranActions.fetchpahirobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchpahirobibaranFailure());
  }
}

// Add pahirobibaran
export function* addpahirobibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPahirobibaranAddNew(
    payload.pahirobibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक पहिरो बिबरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpahirobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "pahiro_gayeko_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipatbebasthapan/pahirobebasthapanlist");
    yield put(BipatbibaranActions.addpahirobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.addpahirobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Nijibanbibaran
export function* updatepahirobibaranRequest(api, action) {
  const { payload, pahirobibaranId } = action;

  const response = yield api.postPahirobibaranUpdate(
    payload.pahiro.data,
    pahirobibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक पहिरो बिबरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpahirobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "pahiro_gayeko_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipatbebasthapan/pahirobebasthapanlist");
    yield put(BipatbibaranActions.updatepahirobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.updatepahirobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete pahirobibaran
export function* deletepahirobibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPahirobibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक पहिरो बिबरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpahirobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "pahiro_gayeko_miti",
      page: 0,
      perPage: 10,
    });
    yield put(BipatbibaranActions.deletepahirobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.deletepahirobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallbadhibibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBadhibibaranList(payloaddata);
  if (response.ok) {
    yield put(BipatbibaranActions.fetchallbadhibibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchallbadhibibaranFailure());
  }
}
