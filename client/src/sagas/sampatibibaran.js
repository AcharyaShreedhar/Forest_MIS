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
    yield put(
        SampatibibaranActions.fetchallassetsSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.fetchallassetsFailure());
  }
}

export function* fetchassetsRequest(api, action) {
    const  assetId  = action.payload
 
    const response = yield api.getAssets(assetId);
    
    if (response.ok) {
      yield put(
        SampatibibaranActions.fetchassetsSuccess(response.data)
      );
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
    yield fetchallassetsRequest(api,{
      name: "kitta_no",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/assetslist");
    yield put(SampatibibaranActions.addassetsSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.addassetsFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    toast.success("सफलतापुर्वक सम्पत्ति पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallassetsRequest(api);
    yield call(history.push, "/forests/assetslist");
    yield put(
      SampatibibaranActions.updateassetsSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.updateassetsFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield fetchallassetsRequest(api);
    yield put(
      SampatibibaranActions.deleteassetsSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.deleteassetsFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}



  export function* fetchallvehiclesRequest(api, action) {
    const { payload } = action;
    const payloaddata = isNil(payload) ? action : payload;
    const response = yield api.getVehiclesList(payloaddata);
    
        if (response.ok) {
      yield put(
          SampatibibaranActions.fetchallvehiclesSuccess(response.data)
      );
    } else {
      yield put(SampatibibaranActions.fetchallvehiclesFailure());
    }
  }


  export function* fetchvehiclesRequest(api, action) {
    const  vehicleId  = action.payload
 
    const response = yield api.getVehicles(vehicleId);
    
    if (response.ok) {
      yield put(
        SampatibibaranActions.fetchvehiclesSuccess(response.data)
      );
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
    yield fetchallvehiclesRequest(api,{
      name: "vehicle_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/vehicleslist");
    yield put(SampatibibaranActions.addvehiclesSuccess(response.data));
  } else {
    yield put(SampatibibaranActions.addvehiclesFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Update vehicles
export function* updatevehiclesRequest(api, action) {
  const { payload, vehicleId } = action;

  const response = yield api.postSampatibibaranVehiclesUpdate(
    payload.assets.data,
    vehicleId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक गाडी विवरण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallvehiclesRequest(api);
    yield call(history.push, "/forests/vehicleslist");
    yield put(
      SampatibibaranActions.updatevehiclesSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.updatevehiclesFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield fetchallvehiclesRequest(api);
    yield put(
      SampatibibaranActions.deletevehiclesSuccess(response.data)
    );
  } else {
    yield put(SampatibibaranActions.deletevehiclesFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}