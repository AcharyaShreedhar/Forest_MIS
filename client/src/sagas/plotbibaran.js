import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { history } from "../reducers";
import { isNil } from "ramda";
import PlotbibaranActions from "../actions/plotbibaran";

export function* fetchallplotbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getPlotbibaranList(payloaddata);

  if (response.ok) {
    yield put(PlotbibaranActions.fetchallplotbibaranSuccess(response.data));
  } else {
    yield put(PlotbibaranActions.fetchallplotbibaranFailure());
  }
}


export function* fetchplotbibaranRequest(api, action) {
  const  plotId  = action.payload

  const response = yield api.getPlotbibaran(plotId);
  
  if (response.ok) {
    yield put(
      PlotbibaranActions.fetchplotbibaranSuccess(response.data)
    );
  } else {
    yield put(PlotbibaranActions.fetchplotbibaranFailure());
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
    yield fetchallplotbibaranRequest(api,{
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/plotbibaranlist");
    yield put(PlotbibaranActions.addplotbibaranSuccess(response.data));
  } else {
    yield put(PlotbibaranActions.addplotbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield fetchallplotbibaranRequest(api);
    yield call(history.push, "/forests/plotbibaranlist");
    yield put(
      PlotbibaranActions.updateplotbibaranSuccess(response.data)
    );
  } else {
    yield put(PlotbibaranActions.updateplotbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield fetchallplotbibaranRequest(api);
    yield put(
      PlotbibaranActions.deleteplotbibaranSuccess(response.data)
    );
  } else {
    yield put(PlotbibaranActions.deleteplotbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}



