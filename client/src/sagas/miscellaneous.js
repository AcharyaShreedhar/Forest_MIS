import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import { isNil } from "ramda";
import MiscellaneousActions from "../actions/miscellaneous";

export function* fetchallrojgarsrijanaRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getRojgarSrijanaList(payloaddata);

  if (response.ok) {
    yield put(MiscellaneousActions.fetchallrojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.fetchallrojgarsrijanaFailure());
  }
}

export function* fetchrojgarsrijanaRequest(api, action) {
  const rojgarsrijanaId = action.payload;

  const response = yield api.getRojgarSrijana(rojgarsrijanaId);

  if (response.ok) {
    yield put(MiscellaneousActions.fetchrojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.fetchrojgarsrijanaFailure());
  }
}
//----------- addrojgarsrijana
export function* addrojgarsrijanaRequest(api, action) {
  const { payload } = action;

  const response = yield api.postRojgarSrijanaAddNew(
    payload.rojgarsrijana.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrojgarsrijanaRequest(api, {
      distId: "%",
      officeId: "%",
      name: "banka_prakar",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/miscellaneous/rojgarsrijanalist");
    yield put(MiscellaneousActions.addrojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.addrojgarsrijanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update rojgarsrijana
export function* updaterojgarsrijanaRequest(api, action) {
  const { payload, rojgarsrijanaId } = action;

  const response = yield api.postRojgarSrijanaUpdate(
    payload.rojgarsrijana.data,
    rojgarsrijanaId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrojgarsrijanaRequest(api, {
      distId: "%",
      officeId: "%",
      name: "banka_prakar",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/miscellaneous/rojgarsrijanalist");
    yield put(MiscellaneousActions.updaterojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.updaterojgarsrijanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete rojgarsrijana
export function* deleterojgarsrijanaRequest(api, action) {
  const { payload } = action;

  const response = yield api.postRojgarSrijanaDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrojgarsrijanaRequest(api, {
      distId: "%",
      officeId: "%",
      name: "banka_prakar",
      page: 0,
      perPage: 10,
    });
    yield put(MiscellaneousActions.deleterojgarsrijanaSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.deleterojgarsrijanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchalluddhamRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getUddhamList(payloaddata);

  if (response.ok) {
    yield put(MiscellaneousActions.fetchalluddhamSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.fetchalluddhamFailure());
  }
}

export function* fetchuddhamRequest(api, action) {
  const uddhamId = action.payload;

  const response = yield api.getUddham(uddhamId);

  if (response.ok) {
    yield put(MiscellaneousActions.fetchuddhamSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.fetchuddhamFailure());
  }
}
//----------- adduddham
export function* adduddhamRequest(api, action) {
  const { payload } = action;

  const response = yield api.postUddhamAddNew(payload.uddham.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक रोजगार सृजना प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalluddhamRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/miscellaneous/uddhamlist");
    yield put(MiscellaneousActions.adduddhamSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.adduddhamFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update uddham
export function* updateuddhamRequest(api, action) {
  const { payload, uddhamId } = action;

  const response = yield api.postUddhamUpdate(payload.uddham.data, uddhamId);

  if (response.ok) {
    toast.success("सफलतापुर्वक उद्धम विवरण  शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalluddhamRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/miscellaneous/uddhamlist");
    yield put(MiscellaneousActions.updateuddhamSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.updateuddhamFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete uddham
export function* deleteuddhamRequest(api, action) {
  const { payload } = action;

  const response = yield api.postUddhamDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक उद्धम विवरण  हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalluddhamRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield put(MiscellaneousActions.deleteuddhamSuccess(response.data));
  } else {
    yield put(MiscellaneousActions.deleteuddhamFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
