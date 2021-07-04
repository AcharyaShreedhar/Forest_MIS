import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";

import { history } from "../reducers";
import KarmacharibibaranActions from "../actions/karmacharibibaran";

export function* fetchallemployeesRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getEmployeesList(payloaddata);

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchallemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchallemployeesFailure());
  }
}

export function* fetchemployeesRequest(api, action) {
  const employeesId = action.payload;

  const response = yield api.getEmployees(employeesId);

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchemployeesFailure());
  }
}

// Add Employees
export function* addemployeesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranEmployeesAddNew(
    payload.employees.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeesRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "emp_appoint_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karmachari/karmacharibibaranlist");
    yield put(KarmacharibibaranActions.addemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.addemployeesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Employees
export function* updateemployeesRequest(api, action) {
  const { payload, employeeId } = action;

  const response = yield api.postKarmacharibibaranEmployeesUpdate(
    payload.employees.data,
    employeeId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी  पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeesRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "emp_appoint_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karmachari/karmacharibibaranlist");
    yield put(KarmacharibibaranActions.updateemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.updateemployeesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete employees
export function* deleteemployeesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranEmployeesDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी  हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeesRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "emp_appoint_date",
      page: 0,
      perPage: 10,
    });
    yield put(KarmacharibibaranActions.deleteemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.deleteemployeesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallemployeeshistoryRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getEmployeeshistoryList(payloaddata);

  if (response.ok) {
    yield put(
      KarmacharibibaranActions.fetchallemployeeshistorySuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.fetchallemployeeshistoryFailure());
  }
}

export function* fetchemployeeshistoryRequest(api, action) {
  const histId = action.payload;

  const response = yield api.getEmployeeshistory(histId);

  if (response.ok) {
    yield put(
      KarmacharibibaranActions.fetchemployeeshistorySuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.fetchemployeeshistoryFailure());
  }
}

// Add Employeeshistory
export function* addemployeeshistoryRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranEmployeeshistoryAddNew(
    payload.employeeshistory.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield addemployeeshistoryRequest(api, {
      name: "emp_rank_id",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/employeeshistorylist");
    yield put(
      KarmacharibibaranActions.addemployeeshistorySuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.addemployeeshistoryFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Employeeshistory
export function* updateemployeeshistoryRequest(api, action) {
  const { payload, employeehistoryId } = action;

  const response = yield api.postKarmacharibibaranEmployeeshistoryUpdate(
    payload.employees.data,
    employeehistoryId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी विवरण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeeshistoryRequest(api, {
      name: "emp_rank_id",
      page: 0,
      perPage: 10,
    });

    yield call(history.push, "/forests/employeeshistorylist");
    yield put(
      KarmacharibibaranActions.updateemployeeshistoryhistorySuccess(
        response.data
      )
    );
  } else {
    yield put(KarmacharibibaranActions.updateemployeeshistoryFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete employeeshistory
export function* deleteemployeeshistoryRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranEmployeeshistoryDelete(
    payload
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी विवरण  वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeeshistoryRequest(api, {
      name: "emp_rank_id",
      page: 0,
      perPage: 10,
    });

    yield put(
      KarmacharibibaranActions.deleteemployeeshistorySuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.deleteemployeeshistoryFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchalllevelRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getLevelList(payloaddata);

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchalllevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchalllevelFailure());
  }
}

export function* fetchlevelRequest(api, action) {
  const levelId = action.payload;

  const response = yield api.getLevel(levelId);

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchlevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchlevelFailure());
  }
}

// Add Level
export function* addlevelRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranLevelAddNew(
    payload.level.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक तह प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield addlevelRequest(api, {
      name: "level_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/levellist");
    yield put(KarmacharibibaranActions.addlevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.addlevelFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Level
export function* updatelevelRequest(api, action) {
  const { payload, levelId } = action;

  const response = yield api.postKarmacharibibaranLevelUpdate(
    payload.employees.data,
    levelId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक तह पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalllevelRequest(api, {
      name: "level_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/levellist");
    yield put(KarmacharibibaranActions.updatelevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.updatelevelFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete level
export function* deletelevelRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranLevelDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक तह  वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalllevelRequest(api, {
      name: "level_name_nep",
      page: 0,
      perPage: 10,
    });
    yield put(KarmacharibibaranActions.deletelevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.deletelevelFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallpostRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getPostList(payloaddata);

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchallpostSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchallpostFailure());
  }
}

export function* fetchpostRequest(api, action) {
  const postId = action.payload;

  const response = yield api.getPost(postId);

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchpostSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchpostFailure());
  }
}

// Add Post
export function* addpostRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranPostAddNew(payload.post.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक पद प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield addpostRequest(api, {
      name: "post_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/postlist");
    yield put(KarmacharibibaranActions.addpostSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.addpostFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Post
export function* updatepostRequest(api, action) {
  const { payload, postId } = action;

  const response = yield api.postKarmacharibibaranPostUpdate(
    payload.post.data,
    postId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक  पद पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpostRequest(api, {
      name: "post_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/postlist");
    yield put(KarmacharibibaranActions.updatepostSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.updatepostFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete Post
export function* deletepostRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranPostDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक पद वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallpostRequest(api, {
      name: "post_name_nep",
      page: 0,
      perPage: 10,
    });
    yield put(KarmacharibibaranActions.deletepostSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.deletepostFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
