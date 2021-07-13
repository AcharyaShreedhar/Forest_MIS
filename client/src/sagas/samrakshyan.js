import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";
import { history } from "../reducers";
import SamrakshyanActions from "../actions/samrakshyan";

export function* fetchallsamrakshyanpokharinirmanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getSamrakshyanPokhariNirmanList(payloaddata);
  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchallsamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchallsamrakshyanpokharinirmanFailure());
  }
}

export function* fetchsamrakshyanpokharinirmanRequest(api, action) {
  const samrakshyanpokhariNirmanId = action.payload;

  const response = yield api.getSamrakshyanPokhariNirman(
    samrakshyanpokhariNirmanId
  );

  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchsamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchsamrakshyanpokharinirmanFailure());
  }
}

// Add samrakshyanpokhari
export function* addsamrakshyanpokharinirmanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSamrakshyanPokhariNirmanAddNew(
    payload.samrakshyanpokharinirman.data
  );

  if (response.ok) {
    toast.success(
      "सफलतापुर्वक संरक्षण पोखरी निंमाण कार्यक्रम प्रविष्ट भयो !!!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    yield fetchallsamrakshyanpokharinirmanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "id",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/pokharisamrakshyanlist");
    yield put(
      SamrakshyanActions.addsamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.addsamrakshyanpokharinirmanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update samrakshyanpokharinirman
export function* updatesamrakshyanpokharinirmanRequest(api, action) {
  const { payload, samrakshyanpokhariNirmanId } = action;

  const response = yield api.postSamrakshyanPokhariNirmanUpdate(
    payload.samrakshyanpokharinirman.data,
    samrakshyanpokhariNirmanId
  );

  if (response.ok) {
    toast.success(
      "सफलतापुर्वक संरक्षण पोखरी निंमाण कार्यक्रम शंसोधन भयो !!!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    yield fetchallsamrakshyanpokharinirmanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "id",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/samrakshyanpokharinirmanlist");
    yield put(
      SamrakshyanActions.updatesamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.updatesamrakshyanpokharinirmanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete samrakshyanpokharinirman
export function* deletesamrakshyanpokharinirmanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postSamrakshyanPokhariNirmanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक संरक्षण पोखरी निंमाण कार्यक्रम हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamrakshyanpokharinirmanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "id",
      page: 0,
      perPage: 10,
    });
    yield put(
      SamrakshyanActions.deletesamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.deletesamrakshyanpokharinirmanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
