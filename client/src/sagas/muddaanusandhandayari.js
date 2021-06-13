import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import MuddaanusandhandayariActions from "../actions/muddaanusandhandayari";

export function* fetchallmuddaanusandhandayariRequest(api, action) {
 
  const response = yield api.getMuddaanusandhandayariList();
    if (response.ok) {
    yield put(
        MuddaanusandhandayariActions.fetchallmuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(MuddaanusandhandayariActions.fetchallmuddaanusandhandayariFailure());
  }
}

export function* fetchmuddaanusandhandayariRequest(api, action) {
    const  muddaAnusandhanDayariId  = action.payload
 
    const response = yield api.getMuddaanusandhandayari(muddaAnusandhanDayariId);
    
    if (response.ok) {
      yield put(
        MuddaanusandhandayariActions.fetchmuddaanusandhandayariSuccess(response.data)
      );
    } else {
      yield put(MuddaanusandhandayariActions.fetchmuddaanusandhandayariFailure());
    }
  }


  
  // Add muddaanusandhandayari
export function* addmuddaanusandhandayariRequest(api, action) {
  const { payload } = action;

  const response = yield api.postMuddaanusandhandayariMuddaanusandhandayariAddNew(
    payload.muddaanusandhandayari.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक मुद्दा अनुसन्धान दायरी प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmuddaanusandhandayariRequest(api);
    yield call(history.push, "/forests/muddaanusandhandayarilist");
    yield put(MuddaanusandhandayariActions.addmuddaanusandhandayariSuccess(response.data));
  } else {
    yield put(MuddaanusandhandayariActions.addmuddaanusandhandayariFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Update muddaanusandhandayari
export function* updatemuddaanusandhandayariRequest(api, action) {
  const { payload } = action;

  const response = yield api.postMuddaanusandhandayariMuddaanusandhandayariUpdate(
    payload.muddaanusandhandayari.data,
    payload.id
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक मुद्दा अनुसन्धान दायरी पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmuddaanusandhandayariRequest(api);
    yield call(history.push, "/forests/muddaanusandhandayarilist");
    yield put(
      MuddaanusandhandayariActions.updatemuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(MuddaanusandhandayariActions.updatemuddaanusandhandayariFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}



// Delete muddaanusandhandayari
export function* deletemuddaanusandhandayariRequest(api, action) {
  const { payload } = action;

  const response = yield api.postMuddaanusandhandayariMuddaanusandhandayariDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक मुद्दा अनुसन्धान दायरी हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmuddaanusandhandayariRequest(api);
    yield put(
      MuddaanusandhandayariActions.deletemuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(MuddaanusandhandayariActions.deletemuddaanusandhandayariFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}