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
      name: "post",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/samajikkaryabibaranlist");
    yield put(KaryabibaranActions.addsamajikkaryabibaranSuccess(response.data));
  } else {
    yield put(KaryabibaranActions.addsamajikkaryabibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
