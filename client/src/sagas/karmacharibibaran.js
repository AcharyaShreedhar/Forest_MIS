import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";


import { history } from "../reducers";
import KarmacharibibaranActions from "../actions/karmacharibibaran";

export function* fetchallemployeesRequest(api, action) {
  const response = yield api.getEmployeesList();

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchallemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchallemployeesFailure());
  }
}

export function* fetchemployeesRequest(api, action) {
    const  employeesId  = action.payload
  
    const response = yield api.getEmployees(employeesId);
    
    if (response.ok) {
      yield put(
        KarmacharibibaranActions.fetchemployeesSuccess(response.data)
      );
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
    toast.success("सफलतापुर्वक कर्मचारी विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield addemployeesRequest(api);
    yield call(history.push, "/forests/employeeslist");
    yield put(KarmacharibibaranActions.addemployeesSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.addemployeesFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    toast.success("सफलतापुर्वक कर्मचारी विवरण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeesRequest(api);
    yield call(history.push, "/forests/employeeslist");
    yield put(
      KarmacharibibaranActions.updateemployeesSuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.updateemployeesFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Delete employees
export function* deleteemployeesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranEmployeesDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी विवरण  वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallemployeesRequest(api);
    yield put(
      KarmacharibibaranActions.deleteemployeesSuccess(response.data)
    );
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
    const response = yield api.getEmployeeshistoryList();
  
    if (response.ok) {
      yield put(KarmacharibibaranActions.fetchallemployeeshistorySuccess(response.data));
    } else {
      yield put(KarmacharibibaranActions.fetchallemployeeshistoryFailure());
    }
  }
  
  export function* fetchemployeeshistoryRequest(api, action) {
    const  histId  = action.payload
  
    const response = yield api.getEmployeeshistory(histId);
    
    if (response.ok) {
      yield put(
        KarmacharibibaranActions.fetchemployeeshistorySuccess(response.data)
      );
    } else {
      yield put(KarmacharibibaranActions.fetchemployeeshistoryFailure());
    }
  }

    
// Add Employees
export function* addemployeeshistoryRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKarmacharibibaranEmployeeshistoryAddNew(
    payload.employeeshistory.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कर्मचारी विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield addemployeeshistoryRequest(api);
    yield call(history.push, "/forests/employeeslist");
    yield put(KarmacharibibaranActions.addemployeeshistorySuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.addemployeeshistoryFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
   
export function* fetchalllevelRequest(api, action) {
  const response = yield api.getLevelList();

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchalllevelSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchalllevelFailure());
  }
}


export function* fetchlevelRequest(api, action) {
  const  levelId  = action.payload

  const response = yield api.getLevel(levelId);
  
  if (response.ok) {
    yield put(
      KarmacharibibaranActions.fetchlevelSuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.fetchlevelFailure());
  }
}
  

   
export function* fetchallpostRequest(api, action) {
  const response = yield api.getPostList();

  if (response.ok) {
    yield put(KarmacharibibaranActions.fetchallpostSuccess(response.data));
  } else {
    yield put(KarmacharibibaranActions.fetchallpostFailure());
  }
}


export function* fetchpostRequest(api, action) {
  const  postId  = action.payload

  const response = yield api.getPost(postId);
  
  if (response.ok) {
    yield put(
      KarmacharibibaranActions.fetchpostSuccess(response.data)
    );
  } else {
    yield put(KarmacharibibaranActions.fetchpostFailure());
  }
}


