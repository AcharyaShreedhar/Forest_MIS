import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import BanxetraatikramanActions from "../actions/banxetraatikraman";

export function* fetchallbanxetraatikramanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanxetraatikramanList(payloaddata);
    if (response.ok) {
    yield put(
        BanxetraatikramanActions.fetchallbanxetraatikramanSuccess(response.data)
    );
  } else {
    yield put(BanxetraatikramanActions.fetchallbanxetraatikramanFailure());
  }
}

export function* fetchbanxetraatikramanRequest(api, action) {
    const  banxetraAtikramanId  = action.payload
    
    const response = yield api.getBanxetraatikraman(banxetraAtikramanId);
    if (response.ok) {
      yield put(
        BanxetraatikramanActions.fetchbanxetraatikramanSuccess(response.data)
      );
    } else {
      yield put(BanxetraatikramanActions.fetchbanxetraatikramanFailure());
    }
  }
  

  // Add banxetraatikraman
export function* addbanxetraatikramanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanxetraatikramanBanxetraatikramanAddNew(
    payload.banxetraatikraman.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनक्षेत्र अतिक्रमण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraatikramanRequest(api,{
      name: "atikraman_kisim",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/banxetraatikramanlist");
    yield put(BanxetraatikramanActions.addbanxetraatikramanSuccess(response.data));
  } else {
    yield put(BanxetraatikramanActions.addbanxetraatikramanFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Update banxetraatikraman
export function* updatebanxetraatikramanRequest(api, action) {
  const { payload,banxetraatikramanId } = action;

  const response = yield api.postBanxetraatikramanBanxetraatikramanUpdate(
    payload.banxetraatikraman.data,
    banxetraatikramanId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनक्षेत्र अतिक्रमण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraatikramanRequest(api);
    yield call(history.push, "/forests/banxetraatikramanlist");
    yield put(
      BanxetraatikramanActions.updatebanxetraatikramanSuccess(response.data)
    );
  } else {
    yield put(BanxetraatikramanActions.updatebanxetraatikramanFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}



// Delete banxetraatikraman
export function* deletebanxetraatikramanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanxetraatikramanBanxetraatikramanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वनक्षेत्र अतिक्रमण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraatikramanRequest(api);
    yield put(
      BanxetraatikramanActions.deletebanxetraatikramanSuccess(response.data)
    );
  } else {
    yield put(BanxetraatikramanActions.deletebanxetraatikramanFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}