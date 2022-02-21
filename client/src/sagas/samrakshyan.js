import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";
import { history } from "../reducers";
import SamrakshyanActions from "../actions/samrakshyan";

//------samrakshyanpokhari
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

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
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
      officeId: "%",
      name: "karyakram_miti",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
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
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/pokharisamrakshyanlist");
    yield put(
      SamrakshyanActions.updatesamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.updatesamrakshyanpokharinirmanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक संरक्षण पोखरी निंमाण कार्यक्रम हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamrakshyanpokharinirmanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      SamrakshyanActions.deletesamrakshyanpokharinirmanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.deletesamrakshyanpokharinirmanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//-------------- jaladhar samrakshyan
export function* fetchalljaladharsamrakshyanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getJaladharSamrakshyanList(payloaddata);
  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchalljaladharsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchalljaladharsamrakshyanFailure());
  }
}

export function* fetchjaladharsamrakshyanRequest(api, action) {
  const jaladharSamrakshyanId = action.payload;

  const response = yield api.getJaladharSamrakshyan(jaladharSamrakshyanId);

  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchjaladharsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchjaladharsamrakshyanFailure());
  }
}

// Add jaladhar samrakshyan
export function* addjaladharsamrakshyanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postJaldharSamrakshyanAddNew(
    payload.jaladharsamrakshyan.data
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक जलाधर संरक्षण कार्यक्रम प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalljaladharsamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/jaladharsamrakshyanlist");
    yield put(SamrakshyanActions.addjaladharsamrakshyanSuccess(response.data));
  } else {
    yield put(SamrakshyanActions.addjaladharsamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update jaladhar samrakshyan
export function* updatejaladharsamrakshyanRequest(api, action) {
  const { payload, jaladharsamrakshyanId } = action;

  const response = yield api.postJaladharSamrakshyanUpdate(
    payload.jaladharsamrakshyan.data,
    jaladharsamrakshyanId
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक जलाधर संरक्षण कार्यक्रम शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalljaladharsamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/jaladharsamrakshyanlist");
    yield put(
      SamrakshyanActions.updatejaladharsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.updatejaladharsamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete jaladharsamrakshyan
export function* deletejaladharsamrakshyanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postJaladharSamrakshyanDelete(payload);

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक जलाधर संरक्षण कार्यक्रम हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalljaladharsamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      SamrakshyanActions.deletejaladharsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.deletejaladharsamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//-------------- nadikiran samrakshyan
export function* fetchallnadikinarsamrakshyanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getNadikinarSamrakshyanList(payloaddata);
  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchallnadikinarsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchallnadikinarsamrakshyanFailure());
  }
}

export function* fetchnadikinarsamrakshyanRequest(api, action) {
  const nadikinarSamrakshyanId = action.payload;

  const response = yield api.getNadikinarSamrakshyan(nadikinarSamrakshyanId);

  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchnadikinarsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchnadikinarsamrakshyanFailure());
  }
}

// Add nadikinar samrakshyan
export function* addnadikinarsamrakshyanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postNadikinarSamrakshyanAddNew(
    payload.nadikinarsamrakshyan.data
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success(
      "सफलतापुर्वक नदि किनार संरक्षण कार्यक्रम प्रविष्ट भयो !!!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    yield fetchallnadikinarsamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/nadikinarsamrakshyanlist");
    yield put(SamrakshyanActions.addnadikinarsamrakshyanSuccess(response.data));
  } else {
    yield put(SamrakshyanActions.addnadikinarsamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update nadikinarsamrakshyan
export function* updatenadikinarsamrakshyanRequest(api, action) {
  const { payload, nadikinarSamrakshyanId } = action;

  const response = yield api.postNadikinarSamrakshyanUpdate(
    payload.nadikinarsamrakshyan.data,
    nadikinarSamrakshyanId
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक नदि किनार संरक्षण कार्यक्रम शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnadikinarsamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/nadikinarsamrakshyanlist");
    yield put(
      SamrakshyanActions.updatenadikinarsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.updatenadikinarsamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete nadikinarsamrakshyan
export function* deletenadikinarsamrakshyanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postNadikinarSamrakshyanDelete(payload);

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक नदि किनार संरक्षण कार्यक्रम हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnadikinarsamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      SamrakshyanActions.deletenadikinarsamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.deletenadikinarsamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//-------panimuhansamrakshyan
export function* fetchallpanimuhansamrakshyanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getPanimuhanSamrakshyanList(payloaddata);
  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchallpanimuhansamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchallpanimuhansamrakshyanFailure());
  }
}

export function* fetchpanimuhansamrakshyanRequest(api, action) {
  const panimuhanSamrakshyanId = action.payload;

  const response = yield api.getPanimuhanSamrakshyan(panimuhanSamrakshyanId);

  if (response.ok) {
    yield put(
      SamrakshyanActions.fetchpanimuhansamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.fetchpanimuhansamrakshyanFailure());
  }
}

// Add panimuhan samrakshyan
export function* addpanimuhansamrakshyanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPanimuhanSamrakshyanAddNew(
    payload.panimuhansamrakshyan.data
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success(
      "सफलतापुर्वक पानीमुहान संरक्षण कार्यक्रम प्रविष्ट भयो !!!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    yield fetchallpanimuhansamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/panimuhansamrakshyanlist");
    yield put(SamrakshyanActions.addpanimuhansamrakshyanSuccess(response.data));
  } else {
    yield put(SamrakshyanActions.panimuhansamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update panimuhansamrakshyan
export function* updatepanimuhansamrakshyanRequest(api, action) {
  const { payload, panimuhanSamrakshyanId } = action;

  const response = yield api.postPanimuhanSamrakshyanUpdate(
    payload.panimuhansamrakshyan.data,
    panimuhanSamrakshyanId
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक पानीमुहान संरक्षण कार्यक्रम शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpanimuhansamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/samrakshyan/panimuhansamrakshyanlist");
    yield put(
      SamrakshyanActions.updatepanimuhansamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.updatepanimuhansamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete panimuhansamrakshyan
export function* deletepanimuhansamrakshyanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPanimuhanSamrakshyanDelete(payload);

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक पानीमुहान संरक्षण कार्यक्रम हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpanimuhansamrakshyanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "karyakram_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      SamrakshyanActions.deletepanimuhansamrakshyanSuccess(response.data)
    );
  } else {
    yield put(SamrakshyanActions.deletepanimuhansamrakshyanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
