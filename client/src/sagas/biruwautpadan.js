import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import BiruwautpadanActions from "../actions/biruwautpadan";

export function* fetchallbiruwautpadanRequest(api, action) {
  const response = yield api.getBiruwautpadanList();
   if (response.ok) {
    yield put(
      BiruwautpadanActions.fetchallbiruwautpadanSuccess(response.data)
    );
  } else {
    yield put(BiruwautpadanActions.fetchallbiruwautpadanFailure());
  }
}

export function* fetchbiruwautpadanRequest(api, action) {
  const  biruwautpadanId  = action.payload

  const response = yield api.getBiruwautpadan(biruwautpadanId);
  
  if (response.ok) {
    yield put(
      BiruwautpadanActions.fetchbiruwautpadanSuccess(response.data)
    );
  } else {
    yield put(BiruwautpadanActions.fetchbiruwautpadanFailure());
  }
}


  // Add biruwautpadan
  export function* addbiruwautpadanRequest(api, action) {
    const { payload } = action;
      
    const response = yield api.postBiruwautpadanBiruwautpadanAddNew(
      payload.biruwautpadan.data
    );
  
    if (response.ok) {      
      toast.success("सफलतापुर्वक विरुवा उत्पादन प्रविष्ट भयो !!!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      yield fetchallbiruwautpadanRequest(api);
      yield call(history.push, "/activities/nurserylist");
      yield put(BiruwautpadanActions.addbiruwautpadanSuccess(response.data));
    } else {
      yield put(BiruwautpadanActions.addbiruwautpadanFailure());
      toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  
  
  // Update biruwautpadan
  export function* updatebiruwautpadanRequest(api, action) {
    const { payload,biruwautpadanId } = action;
    
    const response = yield api.postBiruwautpadanBiruwautpadanUpdate(
      payload.biruwautpadan.data,
      biruwautpadanId
    );
  
    if (response.ok) {
      toast.success("सफलतापुर्वक विरुवा उत्पादन पुनः प्रविष्ट भयो !!!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      yield fetchallbiruwautpadanRequest(api);
      yield call(history.push, "/activities/nurserylist");
      yield put(
        BiruwautpadanActions.updatebiruwautpadanSuccess(response.data)
      );
    } else {
      yield put(BiruwautpadanActions.updatebiruwautpadanFailure());
      toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  
  
  
  // Delete biruwautpadan
  export function* deletebiruwautpadanRequest(api, action) {
    const { payload } = action;
  
    const response = yield api.postBiruwautpadanBiruwautpadanDelete(payload);
  
    if (response.ok) {
      toast.success("सफलतापुर्वक विरुवा उत्पादन हटाईयो !!!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      yield fetchallbiruwautpadanRequest(api);
      yield put(
        BiruwautpadanActions.deletebiruwautpadanSuccess(response.data)
      );
    } else {
      yield put(BiruwautpadanActions.deletebiruwautpadanFailure());
      toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  
  
  export function* fetchallactivitiesinfoRequest(api, action) {
    const response = yield api.getActivitiesinfoList();
    console.log("Response..sagaa", response);
     if (response.ok) {
      yield put(
        BiruwautpadanActions.fetchallactivitiesinfoSuccess(response.data)
      );
    } else {
      yield put(BiruwautpadanActions.fetchallactivitiesinfoFailure());
    }
  }  
  

  export function* fetchactivitiesinfoRequest(api, action) {
    const  activitiesInfoId  = action.payload
  
    const response = yield api.getActivitiesinfo(activitiesInfoId);
    
    if (response.ok) {
      yield put(
        BiruwautpadanActions.fetchactivitiesinfoSuccess(response.data)
      );
    } else {
      yield put(BiruwautpadanActions.fetchactivitiesinfoFailure());
    }
  }


  // Add activitiesinfo
  export function* addactivitiesinfoRequest(api, action) {
    const { payload } = action;
    console.log("Dataaa...sagaa" );
      
    const response = yield api.postBiruwautpadanActivitiesinfoAddNew(
      payload.yearlyactivities.data
    );
    console.log("yeha aayo ki aayena..saga", response);
  
    if (response.ok) {  
          
      toast.success("सफलतापुर्वक कार्यक्रम विवरण प्रविष्ट भयो !!!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      yield fetchallactivitiesinfoRequest(api);
      yield call(history.push, "/activities/yearlyactivitieslist");
      yield put(BiruwautpadanActions.addactivitiesinfoSuccess(response.data));
    } else {
      yield put(BiruwautpadanActions.addactivitiesinfoFailure());
      toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }