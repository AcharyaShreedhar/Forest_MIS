import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import DwandabebasthapanActions from "../actions/dwandabebasthapan";

export function* fetchallbanyajantuuddarRequest(api, action) {
 
  const response = yield api.getBanyajantuUddarList();
  if (response.ok) {
    yield put(
        DwandabebasthapanActions.fetchallbanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.fetchallbanyajantuuddarFailure());
  }
}


export function* fetchbanyajantuuddarRequest(api, action) {
    const  banyajantuUddarId  = action.payload
 
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

  if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु उद्दार प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuuddarRequest(api);
    yield call(history.push, "/dwandabebasthapan/banyajantuuddarlist");
    yield put(DwandabebasthapanActions.addbanyajantuuddarSuccess(response.data));
  } else {
    yield put(DwandabebasthapanActions.addbanyajantuuddarFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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

  if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु उद्दार पुनः प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuuddarRequest(api);
    yield call(history.push, "/dwandabebasthapan/banyajantuuddarlist");
    yield put(
      DwandabebasthapanActions.updatebanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.updatebanyajantuuddarFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banyajantuuddar
export function* deletebanyajantuuddarRequest(api, action) {
  const { payload } = action;

  const response = yield api.postDwandabebasthapanBanyajantuuddarDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु उद्दार हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuuddarRequest(api);
    yield put(
      DwandabebasthapanActions.deletebanyajantuuddarSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.deletebanyajantuuddarFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}


  export function* fetchallbanyajantuxetiRequest(api, action) {
 
    const response = yield api.getBanyajantuXetiList();
    if (response.ok) {
      yield put(
          DwandabebasthapanActions.fetchallbanyajantuxetiSuccess(response.data)
      );
    } else {
      yield put(DwandabebasthapanActions.fetchallbanyajantuxetiFailure());
    }
  }


  export function* fetchbanyajantuxetiRequest(api, action) {
    const  banyajantuXetiId  = action.payload
 
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

  if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु क्षति प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuxetiRequest(api);
    yield call(history.push, "/forests/banyajantuxetilist");
    yield put(DwandabebasthapanActions.addbanyajantuxetiSuccess(response.data));
  } else {
    yield put(DwandabebasthapanActions.addbanyajantuxetiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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

  if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु क्षति पुनः प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuxetiRequest(api);
    yield call(history.push, "/forests/banyajantuxetilist");
    yield put(
      DwandabebasthapanActions.updatebanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.updatebanyajantuxetiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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

  if (response.ok) {
    toast.success("सफलतापुर्वक वन्यजन्तु क्षति हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanyajantuxetiRequest(api);
    yield put(
      DwandabebasthapanActions.deletebanyajantuxetiSuccess(response.data)
    );
  } else {
    yield put(DwandabebasthapanActions.deletebanyajantuxetiFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}