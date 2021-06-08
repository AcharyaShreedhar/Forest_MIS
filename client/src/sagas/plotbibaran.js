import { call, put } from "redux-saga/effects";

import { history } from "../reducers";
import PlotbibaranActions from "../actions/plotbibaran";

export function* fetchallplotbibaranRequest(api, action) {
  const response = yield api.getPlotbibaranList();

  if (response.ok) {
    yield put(PlotbibaranActions.fetchallplotbibaranSuccess(response.data));
  } else {
    yield put(PlotbibaranActions.fetchallplotbibaranFailure());
  }
}
