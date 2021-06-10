import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import BanpaidawarActions from "../actions/banpaidawar";

export function* fetchallbanpaidawarRequest(api, action) {
 
  const response = yield api.getBanpaidawarList();
    if (response.ok) {
    yield put(
        BanpaidawarActions.fetchallbanpaidawarSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.fetchallbanpaidawarFailure());
  }
}

export function* fetchbanpaidawarRequest(api, action) {
    const  banpaidawarId  = action.payload
    
    const response = yield api.getBanpaidawar(banpaidawarId);
    if (response.ok) {
      yield put(
        BanpaidawarActions.fetchbanpaidawarSuccess(response.data)
      );
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
    yield fetchallbanpaidawarRequest(api);
    yield call(history.push, "/forests/banpaidawarlist");
    yield put(BanpaidawarActions.addbanpaidawarSuccess(response.data));
  } else {
    yield put(BanpaidawarActions.addbanpaidawarFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Update banpaidawar
export function* updatebanpaidawarRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanpaidawarBanpaidawarUpdate(
    payload.banpaidawar.data,
    payload.id
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वन पैदावार पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanpaidawarRequest(api);
    yield call(history.push, "/forests/banpaidawarlist");
    yield put(
      BanpaidawarActions.updatebanpaidawarSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.updatebanpaidawarFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield fetchallbanpaidawarRequest(api);
    yield put(
      BanpaidawarActions.deletebanpaidawarSuccess(response.data)
    );
  } else {
    yield put(BanpaidawarActions.deletebanpaidawarFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


  export function* fetchallbanpaidawarlilamRequest(api, action) {
 
    const response = yield api.getBanpaidawarlilamList();
      if (response.ok) {
      yield put(
          BanpaidawarActions.fetchallbanpaidawarlilamSuccess(response.data)
      );
    } else {
      yield put(BanpaidawarActions.fetchallbanpaidawarlilamFailure());
    }
  }

  export function* fetchbanpaidawarlilamRequest(api, action) {
    const  banpaidawarLilamId  = action.payload
    
    const response = yield api.getBanpaidawarlilam(banpaidawarLilamId);
    if (response.ok) {
      yield put(
        BanpaidawarActions.fetchbanpaidawarlilamSuccess(response.data)
      );
    } else {
      yield put(BanpaidawarActions.fetchbanpaidawarlilamFailure());
    }
  }