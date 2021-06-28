import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import BanpaidawarActions from "../actions/banpaidawar";
import { isNil } from "ramda";

export function* fetchallbanpaidawarRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanpaidawarList(payloaddata);
  if (response.ok) {
    yield put(BanpaidawarActions.fetchallbanpaidawarSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.fetchallbanpaidawarFailure());
  }
}

export function* fetchbanpaidawarRequest(api, action) {
  const banpaidawarId = action.payload;

  const response = yield api.getBanpaidawar(banpaidawarId);
  if (response.ok) {
    yield put(BanpaidawarActions.fetchbanpaidawarSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.fetchbanpaidawarFailure());
  }
}

// Add banpaidawar
export function* addbanpaidawarRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanpaidawarBanpaidawarAddNew(
    payload.banpaidawar.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarRequest(api, {
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banpaidawar/osarpasarlist");
    yield put(BanpaidawarActions.addbanpaidawarSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.addbanpaidawarFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update banpaidawar
export function* updatebanpaidawarRequest(api, action) {
  const { payload, banpaidawarId } = action;

  const response = yield api.postBanpaidawarBanpaidawarUpdate(
    payload.banpaidawar.data,
    banpaidawarId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarRequest(api, {
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banpaidawar/osarpasarlist");
    yield put(BanpaidawarActions.updatebanpaidawarSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.updatebanpaidawarFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banpaidawar
export function* deletebanpaidawarRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanpaidawarBanpaidawarDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarRequest(api, {
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield put(BanpaidawarActions.deletebanpaidawarSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.deletebanpaidawarFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallbanpaidawarlilamRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanpaidawarlilamList(payloaddata);
  if (response.ok) {
    yield put(
      BanpaidawarActions.fetchallbanpaidawarlilamSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.fetchallbanpaidawarlilamFailure());
  }
}

export function* fetchbanpaidawarlilamRequest(api, action) {
  const banpaidawarLilamId = action.payload;

  const response = yield api.getBanpaidawarlilam(banpaidawarLilamId);
  if (response.ok) {
    yield put(BanpaidawarActions.fetchbanpaidawarlilamSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.fetchbanpaidawarlilamFailure());
  }
}

// Add banpaidawarlilam
export function* addbanpaidawarlilamRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanpaidawarBanpaidawarlilamAddNew(
    payload.banpaidawarlilam.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार लिलाम प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarlilamRequest(api, {
      name: "lilam_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banpaidawar/lilamlist");
    yield put(BanpaidawarActions.addbanpaidawarlilamSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.addbanpaidawarlilamFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update banpaidawarlilam
export function* updatebanpaidawarlilamRequest(api, action) {
  const { payload, banpaidawarlilamId } = action;

  const response = yield api.postBanpaidawarBanpaidawarlilamUpdate(
    payload.banpaidawarlilam.data,
    banpaidawarlilamId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार लिलाम पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarlilamRequest(api, {
      name: "lilam_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banpaidawar/lilamlist");
    yield put(BanpaidawarActions.updatebanpaidawarlilamSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.updatebanpaidawarlilamFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banpaidawarlilam
export function* deletebanpaidawarlilamRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanpaidawarBanpaidawarlilamDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार लिलाम हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarlilamRequest(api, {
      name: "lilam_date",
      page: 0,
      perPage: 10,
    });
    yield put(BanpaidawarActions.deletebanpaidawarlilamSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.deletebanpaidawarlilamFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//------------ bandapaidawarbikribitaran
export function* fetchallbanpaidawarbikribitaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanpaidawarbikribitaranList(payloaddata);
  console.log("data saga", response);
  if (response.ok) {
    yield put(
      BanpaidawarActions.fetchallbanpaidawarbikribitaranSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.fetchallbanpaidawarbikribitaranFailure());
  }
}

export function* fetchbanpaidawarbikribitaranRequest(api, action) {
  const banpaidawarBikribitaranId = action.payload;

  const response = yield api.getBanpaidawarbikribitaran(banpaidawarBikribitaranId);
  if (response.ok) {
    yield put(BanpaidawarActions.fetchbanpaidawarbikribitaranSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.fetchbanpaidawarbikribitaranFailure());
  }
}

// add banpaidawarbikribitaran
export function* addbanpaidawarbikribitaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanpaidawarbikribitaranAddNew(
    payload.banpaidawarbikribitaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार बिकृबितरन  प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarbikribitaranRequest(api, {
      name: "banpaidawar_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banpaidawar/banpaidawarbikribitaranlist");
    yield put(BanpaidawarActions.addbanpaidawarbikribitaranSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.addbanpaidawarbikribitaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}