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
      officeId: "%",
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

// Update pahiro bibaran
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
      officeId: "%",
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
      officeId: "%",
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

//-------------- badhi bibaran
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

export function* fetchbadhibibaranRequest(api, action) {
  const badhibibaranId = action.payload;

  const response = yield api.getBadhibibaran(badhibibaranId);

  if (response.ok) {
    yield put(BipatbibaranActions.fetchbadhibibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchbadhibibaranFailure());
  }
}

// Add badhibibaran
export function* addbadhibibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBadhibibaranAddNew(payload.badhibibaran.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक बाढी बिबरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbadhibibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "badhi_aayeko_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipatbebasthapan/badibebasthapanlist");
    yield put(BipatbibaranActions.addbadhibibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.addbadhibibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update badhibibaran
export function* updatebadhibibaranRequest(api, action) {
  const { payload, badhibibaranId } = action;

  const response = yield api.postBadhibibaranUpdate(
    payload.badhibibaran.data,
    badhibibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बाढी बिबरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbadhibibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "badhi_aayeko_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipatbebasthapan/badibebasthapanlist");
    yield put(BipatbibaranActions.updatebadhibibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.updatebadhibibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete badhibibaran
export function* deletebadhibibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBadhibibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक बाढी बिबरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbadhibibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "badhi_aayeko_miti",
      page: 0,
      perPage: 10,
    });
    yield put(BipatbibaranActions.deletebadhibibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.deletebadhibibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//bandadelobibaran
export function* fetchallbandadelobibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBandadelobibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BipatbibaranActions.fetchallbandadelobibaranSuccess(response.data)
    );
  } else {
    yield put(BipatbibaranActions.fetchallbandadelobibaranFailure());
  }
}

export function* fetchbandadelobibaranRequest(api, action) {
  const bandadeloBibaranId = action.payload;

  const response = yield api.getBandadelobibaran(bandadeloBibaranId);
  if (response.ok) {
    yield put(BipatbibaranActions.fetchbandadelobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.fetchbandadelobibaranFailure());
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
      officeId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipatbebasthapan/bandadelolist");
    yield put(BipatbibaranActions.addbandadelobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.addbandadelobibaranFailure());
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
      officeId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/bipatbebasthapan/bandadelolist");
    yield put(BipatbibaranActions.updatebandadelobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.updatebandadelobibaranFailure());
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
      officeId: "%",
      name: "bandadelo_miti",
      page: 0,
      perPage: 10,
    });
    yield put(BipatbibaranActions.deletebandadelobibaranSuccess(response.data));
  } else {
    yield put(BipatbibaranActions.deletebandadelobibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
