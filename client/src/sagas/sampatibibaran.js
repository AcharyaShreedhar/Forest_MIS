import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import SampatibibaranActions from "../actions/sampatibibaran";

export function* fetchallassetsRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getAssetsList(payloaddata);
  if (response.ok) {
    yield put(SampatibibaranActions.fetchallassetsSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.fetchallassetsFailure());
  }
}

export function* fetchassetsRequest(api, action) {
  const assetId = action.payload;

  const response = yield api.getAssets(assetId);

  if (response.ok) {
    yield put(SampatibibaranActions.fetchassetsSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.fetchassetsFailure());
  }
}

// Add assets
export function* addassetsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSampatibibaranAssetsAddNew(
    payload.assets.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सम्पत्ति प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallassetsRequest(api, {
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/sampatibibaran/gharjaggalist");
    yield put(SampatibibaranActions.addassetsSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.addassetsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update assets
export function* updateassetsRequest(api, action) {
  const { payload, assetId } = action;

  const response = yield api.postSampatibibaranAssetsUpdate(
    payload.assets.data,
    assetId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सम्पत्ति शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallassetsRequest(api, {
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/sampatibibaran/gharjaggalist");
    yield put(SampatibibaranActions.updateassetsSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.updateassetsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete assets
export function* deleteassetsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSampatibibaranAssetsDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक सम्पत्ति हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallassetsRequest(api, {
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield put(SampatibibaranActions.deleteassetsSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.deleteassetsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallvehiclesRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getVehiclesList(payloaddata);

  if (response.ok) {
    yield put(SampatibibaranActions.fetchallvehiclesSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.fetchallvehiclesFailure());
  }
}

export function* fetchvehiclesRequest(api, action) {
  const vehicleId = action.payload;

  const response = yield api.getVehicles(vehicleId);

  if (response.ok) {
    yield put(SampatibibaranActions.fetchvehiclesSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.fetchvehiclesFailure());
  }
}

// Add vehicles
export function* addvehiclesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSampatibibaranVehiclesAddNew(
    payload.vehicles.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक गाडी विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallvehiclesRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/sampatibibaran/sawarisadhanlist");
    yield put(SampatibibaranActions.addvehiclesSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.addvehiclesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update vehicles
export function* updatevehiclesRequest(api, action) {
  const { payload, vehicleId } = action;

  const response = yield api.postSampatibibaranVehiclesUpdate(
    payload.vehicles.data,
    vehicleId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक गाडी विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallvehiclesRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/sampatibibaran/sawarisadhanlist");
    yield put(SampatibibaranActions.updatevehiclesSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.updatevehiclesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete vehicles
export function* deletevehiclesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSampatibibaranVehiclesDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक गाडी विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallvehiclesRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield put(SampatibibaranActions.deletevehiclesSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.deletevehiclesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//anyasampati
export function* fetchallanyasampatiRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getAnyaSampatiList(payloaddata);

  if (response.ok) {
    yield put(SampatibibaranActions.fetchallanyasampatiSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.fetchallanyasampatiFailure());
  }
}

export function* fetchanyasampatiRequest(api, action) {
  const sampatiId = action.payload;

  const response = yield api.getAnyaSampati(sampatiId);

  if (response.ok) {
    yield put(SampatibibaranActions.fetchanyasampatiSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.fetchanyasampatiFailure());
  }
}

// Add anyasampati
export function* addanyasampatiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSampatibibaranAnyaSampatiAddNew(
    payload.anyasampati.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सम्पती विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallanyasampatiRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/sampatibibaran/anyasampatilist");
    yield put(SampatibibaranActions.addanyasampatiSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.addanyasampatiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update anyasampati
export function* updateanyasampatiRequest(api, action) {
  const { payload, sampatiId } = action;

  const response = yield api.postSampatibibaranAnyaSampatiUpdate(
    payload.anyasampati.data,
    sampatiId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सम्पती विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallanyasampatiRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/sampatibibaran/anyasampatilist");
    yield put(SampatibibaranActions.updateanyasampatiSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.updateanyasampatiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete anyasampati
export function* deleteanyasampatiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSampatibibaranAnyaSampatiDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक सम्पती विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallanyasampatiRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      officeId: "%",
      name: "asset_type",
      page: 0,
      perPage: 10,
    });
    yield put(SampatibibaranActions.deleteanyasampatisSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.deleteanyasampatiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
