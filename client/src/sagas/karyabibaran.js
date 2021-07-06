import { call, put } from "redux-saga/effects";
import { isNil } from "ramda";
import KaryabibaranActions from "../actions/karyabibaran";
import { toast } from "react-toastify";
import { history } from "../reducers";

export function* fetchallsamajikkaryabibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getSamajikkaryabibaranList(payloaddata);
  if (response.ok) {
    yield put(
      KaryabibaranActions.fetchallsamajikkaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.fetchallsamajikkaryabibaranFailure());
  }
}

export function* fetchsamajikkaryabibaranRequest(api, action) {
  const samajikkaryabibaranId = action.payload;

  const response = yield api.getSamajikkaryabibaran(samajikkaryabibaranId);
  if (response.ok) {
    yield put(
      KaryabibaranActions.fetchkarmacharidarbandiSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.fetchsamajikkaryabibaranFailure());
  }
}

// Add samajikkaryabibaran
export function* addsamajikkaryabibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKaryabibaranSamajikkaryabibaranAddNew(
    payload.samajikkaryabibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सामाजिक कार्य विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamajikkaryabibaranRequest(api, {
      distId: "%",
      name: "samajik_karyabibaran ",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karyabibaran/samajikkaryabibaranlist");
    yield put(KaryabibaranActions.addsamajikkaryabibaranSuccess(response.data));
  } else {
    yield put(KaryabibaranActions.addsamajikkaryabibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update samajikkaryabibaran
export function* updatesamajikkaryabibaranRequest(api, action) {
  const { payload, samajikkaryabibaranId } = action;

  const response = yield api.postKaryabibaranSamajikkaryabibaranUpdate(
    payload.samajikkaryabibaran.data,
    samajikkaryabibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सामाजिक कार्य विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamajikkaryabibaranRequest(api, {
      distId: "%",
      name: "samajik_karyabibaran ",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karyabibaran/samajikkaryabibaranlist");
    yield put(
      KaryabibaranActions.updatesamajikkaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.updatesamajikkaryabibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete samajikkaryabibaran
export function* deletesamajikkaryabibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postKaryabibaranSamajikkaryabibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक सामाजिक कार्य विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamajikkaryabibaranRequest(api, {
      distId: "%",
      name: "samajik_karyabibaran ",
      page: 0,
      perPage: 10,
    });
    yield put(
      KaryabibaranActions.deletesamajikkaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.deletesamajikkaryabibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//-------- banbikas karyabibaran
export function* fetchallbanbikaskaryabibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanbikasKaryaBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      KaryabibaranActions.fetchallbanbikaskaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.fetchallbanbikaskaryabibaranFailure());
  }
}

export function* fetchbanbikaskaryabibaranRequest(api, action) {
  const banbikasKaryabibaranId = action.payload;

  const response = yield api.getBanbikasKaryabibaran(banbikasKaryabibaranId);
  if (response.ok) {
    yield put(
      KaryabibaranActions.fetchbanbikaskaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.fetchbanbikaskaryabibaranFailure());
  }
}

//------------ add banbikaskaryabibarans
export function* addbanbikaskaryabibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postbanbikaskaryabibaranAddNew(
    payload.banbikaskaryabibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बनबिकास कार्य विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanbikaskaryabibaranRequest(api, {
      distId: "%",
      name: "banbikas_karyabibaran",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karyabibaran/banbikaskaryabibaranlist");
    yield put(
      KaryabibaranActions.addBanbikasKaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.addbanbikaskaryabibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update banbikaskaryabibaran
export function* updatebanbikaskaryabibaranRequest(api, action) {
  const { payload, banbikasKaryabibaranId } = action;

  const response = yield api.postBanbikasKaryabibaranUpdate(
    payload.banbikaskaryabibaran.data,
    banbikasKaryabibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बनबिकास कार्य विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanbikaskaryabibaranRequest(api, {
      distId: "%",
      name: "banbikas_karyabibaran",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karyabibaran/banbikaskaryabibaranlist");
    yield put(
      KaryabibaranActions.updatebanbikaskaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.updatebanbikaskaryabibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banbikaskaryabibaran
export function* deletebanbikaskaryabibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbikasKaryabibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक बनबिकास कार्य विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanbikaskaryabibaranRequest(api, {
      distId: "%",
      name: "banbikas_karyabibaran ",
      page: 0,
      perPage: 10,
    });
    yield put(
      KaryabibaranActions.deletebanbikaskaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.deletebanbikaskaryabibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
