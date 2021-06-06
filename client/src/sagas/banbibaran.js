import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import BanbibaranActions from "../actions/banbibaran";

export function* fetchallsamudayikbanbibaranRequest(api, action) {
  const response = yield api.getSamudayikbanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallsamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallsamudayikbanbibaranFailure());
  }
}

export function* fetchsamudayikbanbibaranRequest(api, action) {
  const samudayikbanBibaranId = action.payload;

  const response = yield api.getSamudayikbanBibaran(samudayikbanBibaranId);

  if (response.ok) {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchsamudayikbanbibaranFailure());
  }
}

// Add samudayikbanbibaran
export function* addsamudayikbanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranSamudayikbanAddNew(payload.data);

  if (response.ok) {
    yield fetchallsamudayikbanbibaranRequest(api);
    yield put(BanbibaranActions.addsamudayikbanbibaranSucess(response.data));
  } else {
    yield put(BanbibaranActions.addsamudayikbanbibaranFailure());
    toast.error("Oops, Your action cannot be completed!. Please try again", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

// Update samudayikbanbibaran
export function* updatesamudayikbanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranSamudayikbanUpdate(
    payload.data,
    payload.id
  );

  if (response.ok) {
    yield fetchallsamudayikbanbibaranRequest(api);
    yield put(BanbibaranActions.updatesamudayikbanbibaranSucess(response.data));
  } else {
    yield put(BanbibaranActions.updatesamudayikbanbibaranFailure());
    toast.error("Oops, Your action cannot be completed!. Please try again", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* fetchalldharmikbanbibaranRequest(api, action) {
  const response = yield api.getDharmikbanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchalldharmikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchalldharmikbanbibaranFailure());
  }
}

export function* fetchdharmikbanbibaranRequest(api, action) {
  const dharmikbanBibaranId = action.payload;

  const response = yield api.getDharmikbanBibaran(dharmikbanBibaranId);

  if (response.ok) {
    yield put(BanbibaranActions.fetchdharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchdharmikbanbibaranFailure());
  }
}

export function* fetchallnijibanbibaranRequest(api, action) {
  const response = yield api.getNijibanBibaranList();
  if (response.ok) {
    yield put(BanbibaranActions.fetchallnijibanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchallnijibanbibaranFailure());
  }
}

export function* fetchnijibanbibaranRequest(api, action) {
  const nijibanBibaranId = action.payload;

  const response = yield api.getNijibanBibaran(nijibanBibaranId);
  if (response.ok) {
    yield put(BanbibaranActions.fetchnijibanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchnijibanbibaranFailure());
  }
}

export function* fetchallkabuliyatibanbibaranRequest(api, action) {
  const response = yield api.getKabuliyatibanBibaranList();
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallkabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallkabuliyatibanbibaranFailure());
  }
}

export function* fetchkabuliyatibanbibaranRequest(api, action) {
  const kabuliyatibanBibaranId = action.payload;

  const response = yield api.getKabuliyatibanBibaran(kabuliyatibanBibaranId);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchkabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchkabuliyatibanbibaranFailure());
  }
}
