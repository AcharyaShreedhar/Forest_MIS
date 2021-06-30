import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import { isNil } from "ramda";
import MiscellaneousActions from "../actions/miscellaneous";

export function* fetchallrojgarsrijanaRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getRojgarSrijanaList(payloaddata);

  if (response.ok) {
    yield put(MiscellaneousActions.fetchallrojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.fetchallrojgarsrijanaFailure());
  }
}


export function* fetchrojgarsrijanaRequest(api, action) {
  const  rojgarsrijanaId  = action.payload

  const response = yield api.getRojgarSrijana(rojgarsrijanaId);
  
  if (response.ok) {
    yield put(
      MiscellaneousActions.fetchrojgarsrijanaSuccess(response.data)
    );
  } else {
    yield put(MiscellaneousActions.fetchrojgarsrijanaFailure());
  }
}
//----------- addrojgarsrijana
export function* addrojgarsrijanaRequest(api, action) {
  const { payload } = action;

  const response = yield api.postRojgarSrijanaAddNew(
    payload.rojgarsrijana.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrojgarsrijanaRequest(api,{
      name: "karyaharu",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/miscellaneous/rojgarsrijanalist");
    yield put(MiscellaneousActions.addrojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.addrojgarsrijanaFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

// Update rojgarsrijana
export function* updaterojgarsrijanaRequest(api, action) {
  const { payload,rojgarsrijanaId } = action;

  const response = yield api.postRojgarSrijanaUpdate(
    payload.rojgarsrijana.data,
    rojgarsrijanaId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrojgarsrijanaRequest(api,{
      name: "karyaharu",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/miscellaneous/rojgarsrijanalist");
    yield put(
      MiscellaneousActions.updaterojgarsrijanaSuccess(response.data)
    );
  } else {
    yield put(MiscellaneousActions.updaterojgarsrijanaFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

// Delete rojgarsrijana
export function* deleterojgarsrijanaRequest(api, action) {
  const { payload } = action;

  const response = yield api.postRojgarSrijanaDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrojgarsrijanaRequest(api,{
      name: "karyaharu",
      page: 0,
      perPage: 10,
    });
    yield put(
      MiscellaneousActions.deleterojgarsrijanaSuccess(response.data)
    );
  } else {
    yield put(MiscellaneousActions.deleterojgarsrijanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}