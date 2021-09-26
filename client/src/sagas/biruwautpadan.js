import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import BiruwautpadanActions from "../actions/biruwautpadan";

export function* fetchallbiruwautpadanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBiruwautpadanList(payloaddata);
  if (response.ok) {
    yield put(BiruwautpadanActions.fetchallbiruwautpadanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.fetchallbiruwautpadanFailure());
  }
}

export function* fetchbiruwautpadanRequest(api, action) {
  const biruwautpadanId = action.payload;

  const response = yield api.getBiruwautpadan(biruwautpadanId);

  if (response.ok) {
    yield put(BiruwautpadanActions.fetchbiruwautpadanSuccess(response.data));
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
    yield fetchallbiruwautpadanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/nurserylist");
    yield put(BiruwautpadanActions.addbiruwautpadanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.addbiruwautpadanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update biruwautpadan
export function* updatebiruwautpadanRequest(api, action) {
  const { payload, biruwautpadanId } = action;

  const response = yield api.postBiruwautpadanBiruwautpadanUpdate(
    payload.biruwautpadan.data,
    biruwautpadanId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक विरुवा उत्पादन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbiruwautpadanRequest(api);
    yield call(history.push, "/activities/nurserylist");
    yield put(BiruwautpadanActions.updatebiruwautpadanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.updatebiruwautpadanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
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
    yield put(BiruwautpadanActions.deletebiruwautpadanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.deletebiruwautpadanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallactivitiesinfoRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getActivitiesinfoList(payloaddata);
  if (response.ok) {
    yield put(
      BiruwautpadanActions.fetchallactivitiesinfoSuccess(response.data)
    );
  } else {
    yield put(BiruwautpadanActions.fetchallactivitiesinfoFailure());
  }
}

export function* fetchactivitiesinfoRequest(api, action) {
  const activitiesInfoId = action.payload;

  const response = yield api.getActivitiesinfo(activitiesInfoId);

  if (response.ok) {
    yield put(BiruwautpadanActions.fetchactivitiesinfoSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.fetchactivitiesinfoFailure());
  }
}

// Add activitiesinfo
export function* addactivitiesinfoRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBiruwautpadanActivitiesinfoAddNew(
    payload.yearlyactivities.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कार्यक्रम विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallactivitiesinfoRequest(api, {
      name: "fiscal_year",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/yearlyactivitieslist");
    yield put(BiruwautpadanActions.addactivitiesinfoSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.addactivitiesinfoFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update activitiesinfo
export function* updateactivitiesinfoRequest(api, action) {
  const { payload, activitiesinfoId } = action;

  const response = yield api.postBiruwautpadanActivitiesinfoUpdate(
    payload.yearlyactivities.data,
    activitiesinfoId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कार्यक्रम विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallactivitiesinfoRequest(api, {
      name: "fiscal_year",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/yearlyactivitieslist");
    yield put(BiruwautpadanActions.updateactivitiesinfoSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.updateactivitiesinfoFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete activitiesinfo
export function* deleteactivitiesinfoRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBiruwautpadanActivitiesinfoDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कार्यक्रम विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallactivitiesinfoRequest(api, {
      name: "fiscal_year",
      page: 0,
      perPage: 10,
    });
    yield put(BiruwautpadanActions.deleteactivitiesinfoSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.deleteactivitiesinfoFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//brixyaropan
export function* fetchallbrixyaropanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBrixyaropanList(payloaddata);
  if (response.ok) {
    yield put(BiruwautpadanActions.fetchallbrixyaropanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.fetchallbrixyaropanFailure());
  }
}

export function* fetchbrixyaropanRequest(api, action) {
  const brixyaropanId = action.payload;

  const response = yield api.getBrixyaropan(brixyaropanId);

  if (response.ok) {
    yield put(BiruwautpadanActions.fetchbrixyaropanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.fetchbrixyaropanFailure());
  }
}

export function* addbrixyaropanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBiruwautpadanBrixyaropanAddNew(
    payload.brixyaropan.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वृक्षरोपण विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbrixyaropanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "brixyaropan_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/plantationlist");
    yield put(BiruwautpadanActions.addbrixyaropanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.addbrixyaropanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* updatebrixyaropanRequest(api, action) {
  const { payload, brixyaropanId } = action;

  const response = yield api.postBiruwautpadanBrixyaropanUpdate(
    payload.brixyaropan.data,
    brixyaropanId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वृक्षरोपण विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbrixyaropanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "brixyaropan_thegana",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/plantationlist");
    yield put(BiruwautpadanActions.updatebrixyaropanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.updatebrixyaropanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* deletebrixyaropanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBiruwautpadanBrixyaropanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वृक्षरोपण विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbrixyaropanRequest(api, {
      name: "brixyaropan_thegana",
      page: 0,
      perPage: 10,
    });
    yield put(BiruwautpadanActions.deletebrixyaropanSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.deletebrixyaropanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//jadibuti
export function* fetchalljadibutiRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getJadibutiList(payloaddata);
  if (response.ok) {
    yield put(BiruwautpadanActions.fetchalljadibutiSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.fetchalljadibutiFailure());
  }
}

export function* fetchjadibutiRequest(api, action) {
  const jadibutiId = action.payload;

  const response = yield api.getJadibuti(jadibutiId);

  if (response.ok) {
    yield put(BiruwautpadanActions.fetchjadibutiSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.fetchjadibutiFailure());
  }
}

export function* addjadibutiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBiruwautpadanJadibutiAddNew(
    payload.jadibuti.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक जडिबुटी उत्पादन विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalljadibutiRequest(api, {
      distId: "%",
      name: "jadibuti_thegana",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/jadibutilist");
    yield put(BiruwautpadanActions.addjadibutiSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.addjadibutiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* updatejadibutiRequest(api, action) {
  const { payload, jadibutiId } = action;

  const response = yield api.postBiruwautpadanJadibutiUpdate(
    payload.jadibuti.data,
    jadibutiId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक जडिबुटी उत्पादन विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalljadibutiRequest(api, {
      distId: "%",
      name: "jadibuti_thegana",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/activities/jadibutilist");
    yield put(BiruwautpadanActions.updatejadibutiSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.updatejadibutiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* deletejadibutiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBiruwautpadanJadibutiDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक जडिबुटी उत्पादन विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalljadibutiRequest(api, {
      distId: "%",
      name: "jadibuti_thegana",
      page: 0,
      perPage: 10,
    });
    yield put(BiruwautpadanActions.deletejadibutiSuccess(response.data));
  } else {
    yield put(BiruwautpadanActions.deletejadibutiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
