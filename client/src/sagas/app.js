import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import AppActions from "../actions/app";
import { isNil } from "ramda";

export function* loginRequest(api, action) {
  const { payload } = action;

  const response = yield api.loginByUsername(payload);

  if (response.ok) {
    const { user } = response.data;
    const { user_token } = user;
    window.token = user_token;
    yield put(AppActions.loginSuccess({ user_token, user }));
    yield call(history.push, "/home");
  } else {
    yield put(AppActions.loginFailure());
  }
}

// // Municipalities

export function* fetchallmunicipalitiesRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getMunicipalitiesList(payloaddata);
  if (response.ok) {
    yield put(AppActions.fetchallmunicipalitiesSuccess(response.data));
  } else {
    yield put(AppActions.fetchallmunicipalitiesFailure());
  }
}

export function* fetchmunicipalitiesRequest(api, action) {
  const municipalitiesId = action.payload;

  const response = yield api.getMunicipalities(municipalitiesId);

  if (response.ok) {
    yield put(AppActions.fetchmunicipalitiesSuccess(response.data));
  } else {
    yield put(AppActions.fetchmunicipalitiesFailure());
  }
}
// Add municipalities
export function* addmunicipalitiesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postMunicipalitiesAddNew(
    payload.municipalities.data
  );

  if (response.ok) {
    toast.success("सफलतापूर्वक  नगरपालिका विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmunicipalitiesRequest(api, {
      name: "mun_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/municipalitieslist");
    yield put(AppActions.addmunicipalitiesSuccess(response.data));
  } else {
    yield put(AppActions.addmunicipalitiesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update municipalities
export function* updatemunicipalitiesRequest(api, action) {
  const { payload, municipalitiesId } = action;

  const response = yield api.postMunicipalitiesUpdate(
    payload.municipalities.data,
    municipalitiesId
  );

  if (response.ok) {
    toast.success("नगरपालिका विवरण सफलतापूर्वक  पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmunicipalitiesRequest(api, {
      name: "mun_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/municipalitieslist");
    yield put(AppActions.updatemunicipalitiesSuccess(response.data));
  } else {
    yield put(AppActions.updatemunicipalitiesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete municipalities
export function* deletemunicipalitiesRequest(api, action) {
  const { payload } = action;
  const response = yield api.postMunicipalitiesDelete(payload);
  if (response.ok) {
    toast.success("सफलतापूर्वक  नगरपालिका विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmunicipalitiesRequest(api, {
      name: "mun_name_nep",
      page: 0,
      perPage: 10,
    });
    yield put(AppActions.deletemunicipalitiesSuccess(response.data));
  } else {
    yield put(AppActions.deletemunicipalitiesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// // Provinces
export function* fetchallprovincesRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getProvincesList(payloaddata);
  if (response.ok) {
    yield put(AppActions.fetchallprovincesSuccess(response.data));
  } else {
    yield put(AppActions.fetchallprovincesFailure());
  }
}
export function* fetchprovincesRequest(api, action) {
  const provincesId = action.payload;

  const response = yield api.getProvinces(provincesId);

  if (response.ok) {
    yield put(AppActions.fetchprovincesSuccess(response.data));
  } else {
    yield put(AppActions.fetchprovincesFailure());
  }
}
// Add provinces
export function* addprovincesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postProvincesAddNew(payload.provinces.data);

  if (response.ok) {
    toast.success("प्रदेश विवरण सफलतापूर्वक  प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallprovincesRequest(api, {
      name: "prov_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/provinceslist");
    yield put(AppActions.addprovincesSuccess(response.data));
  } else {
    yield put(AppActions.addprovincesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update provinces
export function* updateprovincesRequest(api, action) {
  const { payload, provincesId } = action;

  const response = yield api.postProvincesUpdate(
    payload.provinces.data,
    provincesId
  );

  if (response.ok) {
    toast.success("प्रदेश विवरण सफलतापूर्वक  पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallprovincesRequest(api, {
      name: "prov_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/provinceslist");
    yield put(AppActions.updateprovincesSuccess(response.data));
  } else {
    yield put(AppActions.updateprovincesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete provinces
export function* deleteprovincesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postProvincesDelete(payload);

  if (response.ok) {
    toast.success("प्रदेश सफलतापूर्वक  विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallprovincesRequest(api, {
      name: "prov_name_nep",
      page: 0,
      perPage: 10,
    });
    yield put(AppActions.deleteprovincesSuccess(response.data));
  } else {
    yield put(AppActions.deleteprovincesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// // Districts
export function* fetchalldistrictsRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getDistrictsList(payloaddata);
  if (response.ok) {
    yield put(AppActions.fetchalldistrictsSuccess(response.data));
  } else {
    yield put(AppActions.fetchalldistrictsFailure());
  }
}
export function* fetchdistrictsRequest(api, action) {
  const districtsId = action.payload;

  const response = yield api.getDistricts(districtsId);

  if (response.ok) {
    yield put(AppActions.fetchdistrictsSuccess(response.data));
  } else {
    yield put(AppActions.fetchdistrictsFailure());
  }
}
// Add districts
export function* adddistrictsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDistrictsAddNew(payload.districts.data);

  if (response.ok) {
    toast.success("जिल्ला विवरण सफलतापूर्वक  प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldistrictsRequest(api, {
      name: "dist_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/districtslist");
    yield put(AppActions.adddistrictsSuccess(response.data));
  } else {
    yield put(AppActions.adddistrictsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update districts
export function* updatedistrictsRequest(api, action) {
  const { payload, districtsId } = action;

  const response = yield api.postDistrictsUpdate(
    payload.districts.data,
    districtsId
  );

  if (response.ok) {
    toast.success("जिल्ला विवरण सफलतापूर्वक  पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldistrictsRequest(api, {
      name: "dist_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/districtslist");
    yield put(AppActions.updatedistrictsSuccess(response.data));
  } else {
    yield put(AppActions.updatedistrictsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete districts
export function* deletedistrictsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDistrictsDelete(payload);

  if (response.ok) {
    toast.success("सफलतापूर्वक  जिल्ला विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldistrictsRequest(api, {
      name: "dist_name_nep",
      page: 0,
      perPage: 10,
    });
    yield put(AppActions.deletedistrictsSuccess(response.data));
  } else {
    yield put(AppActions.deletedistrictsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// // Departments
export function* fetchalldepartmentsRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getDepartmentsList(payloaddata);
  if (response.ok) {
    yield put(AppActions.fetchalldepartmentsSuccess(response.data));
  } else {
    yield put(AppActions.fetchalldepartmentsFailure());
  }
}
export function* fetchdepartmentsRequest(api, action) {
  const departmentsId = action.payload;

  const response = yield api.getDepartments(departmentsId);

  if (response.ok) {
    yield put(AppActions.fetchdepartmentsSuccess(response.data));
  } else {
    yield put(AppActions.fetchdepartmentsFailure());
  }
}
// Add departments
export function* adddepartmentsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postdepartmentsAddNew(payload.departments.data);

  if (response.ok) {
    toast.success("बिभाग विवरण सफलतापूर्वक  प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldepartmentsRequest(api, {
      name: "dept_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/departmentslist");
    yield put(AppActions.adddepartmentsSuccess(response.data));
  } else {
    yield put(AppActions.adddepartmentsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update departments
export function* updatedepartmentsRequest(api, action) {
  const { payload, departmentsId } = action;

  const response = yield api.postdepartmentsUpdate(
    payload.departments.data,
    departmentsId
  );

  if (response.ok) {
    toast.success("बिभाग विवरण सफलतापूर्वक  पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldepartmentsRequest(api, {
      name: "dept_name_nep",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/departmentslist");
    yield put(AppActions.updatedepartmentsSuccess(response.data));
  } else {
    yield put(AppActions.updatedepartmentsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete departments
export function* deletedepartmentsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDepartmentsDelete(payload);

  if (response.ok) {
    toast.success("सफलतापूर्वक  बिभाग विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldepartmentsRequest(api, {
      name: "dept_name_nep",
      page: 0,
      perPage: 10,
    });
    yield put(AppActions.deletedepartmentsSuccess(response.data));
  } else {
    yield put(AppActions.deletedepartmentsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// // Users
export function* fetchallusersRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getUsersList(payloaddata);
  if (response.ok) {
    yield put(AppActions.fetchallusersSuccess(response.data));
  } else {
    yield put(AppActions.fetchallusersFailure());
  }
}

export function* fetchusersRequest(api, action) {
  const usersId = action.payload;

  const response = yield api.getUsers(usersId);

  if (response.ok) {
    yield put(AppActions.fetchusersSuccess(response.data));
  } else {
    yield put(AppActions.fetchusersFailure());
  }
}

// Add users
export function* addusersRequest(api, action) {
  const { payload } = action;

  const response = yield api.postusersAddNew(payload.users.data);

  if (response.ok) {
    toast.success("युजर विवरण सफलतापूर्वक  प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallusersRequest(api, {
      name: "user_name",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/departmentslist");
    yield put(AppActions.addusersSuccess(response.data));
  } else {
    yield put(AppActions.adddusersFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update users
export function* updateusersRequest(api, action) {
  const { payload, usersId } = action;

  const response = yield api.postusersUpdate(payload.departments.data, usersId);

  if (response.ok) {
    toast.success("युजर विवरण सफलतापूर्वक  पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallusersRequest(api, {
      name: "user_name",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/app/departmentslist");
    yield put(AppActions.updateusersSuccess(response.data));
  } else {
    yield put(AppActions.usersFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete users---------------//
export function* deleteusersRequest(api, action) {
  const { payload } = action;

  const response = yield api.postUsersDelete(payload);

  if (response.ok) {
    toast.success("युजर विवरण सफलतापूर्वक  हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallusersRequest(api, {
      name: "user_name",
      page: 0,
      perPage: 10,
    });
    yield put(AppActions.deleteusersSuccess(response.data));
  } else {
    yield put(AppActions.deleteusersFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* logoutRequest(api, action) {
  yield put(AppActions.clearRequest());
  yield put(AppActions.logoutSuccess());
  yield call(history.push, "/login");
}
