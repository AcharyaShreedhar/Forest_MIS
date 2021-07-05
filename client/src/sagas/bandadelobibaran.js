import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";
import { history } from "../reducers";
import BandadelobibaranActions from "../actions/bandadelobibaran";

export function* fetchallbandadelobibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBandadelobibaranList(payloaddata);

  if (response.ok) {
    yield put(
      BandadelobibaranActions.fetchallbandadelobibaranSuccess(response.data)
    );
  } else {
    yield put(BandadelobibaranActions.fetchallbandadelobibaranFailure());
  }
}

export function* fetchbandadelobibaranRequest(api, action) {
  const bandadeloBibaranId = action.payload;

  const response = yield api.getBandadelobibaran(bandadeloBibaranId);
  if (response.ok) {
    yield put(
      BandadelobibaranActions.fetchbandadelobibaranSuccess(response.data)
    );
  } else {
    yield put(BandadelobibaranActions.fetchbandadelobibaranFailure());
  }
}

// Add Bandadelobibaran
export function* addbandadelobibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranBandadelobibaranAddNew(
    payload.bandadelo.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनडडेलो विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbandadelobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/bandadelolist");
    yield put(
      BandadelobibaranActions.addbandadelobibaranSuccess(response.data)
    );
  } else {
    yield put(BandadelobibaranActions.addbandadelobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Bandadelobibaran
export function* updatebandadelobibaranRequest(api, action) {
  const { payload, bandadelobibaranId } = action;

  const response = yield api.postBanbibaranBandadelobibaranUpdate(
    payload.bandadelo.data,
    bandadelobibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनडडेलो विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbandadelobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/bandadelolist");
    yield put(
      BandadelobibaranActions.updatebandadelobibaranSuccess(response.data)
    );
  } else {
    yield put(BandadelobibaranActions.updatebandadelobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete Bandadelobibaran
export function* deletebandadelobibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranBandadelobibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वनडडेलो विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbandadelobibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      BandadelobibaranActions.deletebandadelobibaranSuccess(response.data)
    );
  } else {
    yield put(BandadelobibaranActions.deletebandadelobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
