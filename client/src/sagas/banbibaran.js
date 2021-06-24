import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { isNil } from "ramda";
import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchallbaramaditchijbastuRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBaramaditchijbastuList(payloaddata);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallbaramaditchijbastuSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallbaramaditchijbastuFailure());
  }
}

export function* fetchbaramaditchijbastuRequest(api, action) {
  const baramaditchijbastuId = action.payload;

  const response = yield api.getBaramaditchijbastu(baramaditchijbastuId);
  if (response.ok) {
    yield put(BanbibaranActions.fetchbaramaditchijbastuSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchbaramaditchijbastuFailure());
  }
}

export function* addbaramaditchijbastuRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBaramaditchijbastuAddnew(
    payload.baramaditchijbastu.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बरामदितचिज बस्तु प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbaramaditchijbastuRequest(api, {
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/baramaditChijbastu");
    yield put(BanbibaranActions.addbaramaditchijbastuSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addbaramaditchijbastuFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallbanxetraanyaprayojanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanxetraanyaprayojanList(payloaddata);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallbanxetraanyaprayojanSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallbanxetraanyaprayojanFailure());
  }
}

export function* fetchbanxetraanyaprayojanRequest(api, action) {
  const banxetraanyaprayojanId = action.payload;

  const response = yield api.getBanxetraanyaprayojan(banxetraanyaprayojanId);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchbanxetraanyaprayojanSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchbanxetraanyaprayojanFailure());
  }
}

export function* fetchallplotbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getPlotbibaranList(payloaddata);

  if (response.ok) {
    yield put(BanbibaranActions.fetchallplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchallplotbibaranFailure());
  }
}

export function* fetchplotbibaranRequest(api, action) {
  const plotId = action.payload;

  const response = yield api.getPlotbibaran(plotId);

  if (response.ok) {
    yield put(BanbibaranActions.fetchplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchplotbibaranFailure());
  }
}

// Add plotbibaran
export function* addplotbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPlotbibaranPlotbibaranAddNew(
    payload.plotbibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बगैंचा विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallplotbibaranRequest(api, {
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/seedgardenplotslist");
    yield put(BanbibaranActions.addplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addplotbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update plotbibaran
export function* updateplotbibaranRequest(api, action) {
  const { payload, plotId } = action;

  const response = yield api.postPlotbibaranPlotbibaranUpdate(
    payload.plotbibaran.data,
    plotId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बगैंचा विवरण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallplotbibaranRequest(api, {
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/seedgardenplotslist");
    yield put(BanbibaranActions.updateplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updateplotbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete plotbibaran
export function* deleteplotbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postPlotbibaranPlotbibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक बगैंचा विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallplotbibaranRequest(api, {
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield put(BanbibaranActions.deleteplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deleteplotbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
