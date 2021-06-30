import { call,put } from "redux-saga/effects";
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
  console.log("...sagadaata", response);
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
    yield addsamajikkaryabibaranRequest(api,{
      name: "ban_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karyabibaran/samajikkaryabibaranlist");
    yield put(KaryabibaranActions.addsamajikkaryabibaranSuccess(response.data));
  } else {
    yield put(KaryabibaranActions.addsamajikkaryabibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    toast.success("सफलतापुर्वक सामाजिक कार्य विवरण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamajikkaryabibaranRequest(api,{
      name: "ban_type",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/karyabibaran/samajikkaryabibaranlist");
    yield put(
      KaryabibaranActions.updatesamajikkaryabibaranSuccess(response.data)
    );
  } else {
    yield put(KaryabibaranActions.updatesamajikkaryabibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield fetchallsamajikkaryabibaranRequest(api,{
      name: "ban_type",
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
