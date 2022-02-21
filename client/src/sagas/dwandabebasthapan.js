import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import DwandabebasthapanActions from "../actions/dwandabebasthapan";

export function* fetchtotalbanyajantuuddarRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getTotalBanyajantuUddarList(payloaddata);
  if (response.ok) {
    yield put(
      DwandabebasthapanActions.fetchtotalbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchtotalbanyajantuuddarFailure());
  }
}

export function* fetchallbanyajantuuddarRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanyajantuUddarList(payloaddata);
  if (response.ok) {
    yield put(
      DwandabebasthapanActions.fetchallbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchallbanyajantuuddarFailure());
  }
}

export function* fetchbanyajantuuddarRequest(api, action) {
  const banyajantuUddarId = action.payload;

  const response = yield api.getBanyajantuUddar(banyajantuUddarId);
  if (response.ok) {
    yield put(
      DwandabebasthapanActions.fetchbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchbanyajantuuddarFailure());
  }
}

// Add banyajantuuddar
export function* addbanyajantuuddarRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDwandabebasthapanBanyajantuuddarAddNew(
    payload.banyajantuuddar.data
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु उद्दार प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuuddarRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/dwandabebasthapan/banyajantuuddarlist");
    yield put(
      DwandabebasthapanActions.addbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.addbanyajantuuddarFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update banyajantuuddar
export function* updatebanyajantuuddarRequest(api, action) {
  const { payload, banyajantuuddarId } = action;

  const response = yield api.postDwandabebasthapanBanyajantuuddarUpdate(
    payload.banyajantuuddar.data,
    banyajantuuddarId
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु उद्दार शंसोधन भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuuddarRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/dwandabebasthapan/banyajantuuddarlist");
    yield put(
      DwandabebasthapanActions.updatebanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.updatebanyajantuuddarFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banyajantuuddar
export function* deletebanyajantuuddarRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDwandabebasthapanBanyajantuuddarDelete(
    payload
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु उद्दार हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuuddarRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      DwandabebasthapanActions.deletebanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.deletebanyajantuuddarFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchtotalbanyajantuxetiRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getTotalBanyajantuXetiList(payloaddata);

  if (response.ok) {
    yield put(
      DwandabebasthapanActions.fetchtotalbanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchtotalbanyajantuxetiFailure());
  }
}

export function* fetchallbanyajantuxetiRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanyajantuXetiList(payloaddata);
  if (response.ok) {
    yield put(
      DwandabebasthapanActions.fetchallbanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchallbanyajantuxetiFailure());
  }
}

export function* fetchbanyajantuxetiRequest(api, action) {
  const banyajantuXetiId = action.payload;

  const response = yield api.getBanyajantuXeti(banyajantuXetiId);
  if (response.ok) {
    yield put(
      DwandabebasthapanActions.fetchbanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchbanyajantuxetiFailure());
  }
}

// Add banyajantuxeti
export function* addbanyajantuxetiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDwandabebasthapanBanyajantuxetiAddNew(
    payload.banyajantuxeti.data
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु क्षति प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuxetiRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "xeti_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/dwandabebasthapan/banyajantuxetirahatlist");
    yield put(DwandabebasthapanActions.addbanyajantuxetiSuccess(response.data));
  } else {
    yield put(DwandabebasthapanActions.addbanyajantuxetiFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update banyajantuxeti
export function* updatebanyajantuxetiRequest(api, action) {
  const { payload, banyajantuxetiId } = action;

  const response = yield api.postDwandabebasthapanBanyajantuxetiUpdate(
    payload.banyajantuxeti.data,
    banyajantuxetiId
  );

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु क्षति शंसोधन भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuxetiRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "xeti_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/dwandabebasthapan/banyajantuxetirahatlist");

    yield put(
      DwandabebasthapanActions.updatebanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.updatebanyajantuxetiFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banyajantuxeti
export function* deletebanyajantuxetiRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDwandabebasthapanBanyajantuxetiDelete(payload);

  if (response.data.error != null) {
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु क्षति हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuxetiRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "xeti_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      DwandabebasthapanActions.deletebanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.deletebanyajantuxetiFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
