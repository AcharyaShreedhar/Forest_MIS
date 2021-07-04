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

//----------------add baramaditchijbastu
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

//------------update baramaditchijbastu
export function* updatebaramaditchijbastuRequest(api, action) {
  const { payload, baramaditchijbastuId } = action;

  const response = yield api.postbaramaditchijbastuUpdate(
    payload.baramaditchijbastu.data,
    baramaditchijbastuId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बरामदितचिज बस्तु पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbaramaditchijbastuRequest(api, {
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/baramaditchijbastulist");
    yield put(BanbibaranActions.updatebaramaditchijbastuSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updatebaramaditchijbastuFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//--------------------delete baramaditchijbastu
export function* deletebaramaditchijbastuRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBaramaditChijBastuDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक बरामदितचिज बस्तु हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbaramaditchijbastuRequest(api, {
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield put(BanbibaranActions.deletebaramaditchijbastuSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deletebaramaditchijbastuFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//-----------banxetraanyaprayojan
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

//--Add banxetraanyaprayojan
export function* addbanxetraanyaprayojanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranBanxetraanyaprayojanAddNew(
    payload.banxetraanyaprayojan.data
  );

  if (response.ok) {
    toast.success(
      "सफलतापुर्वक वनक्षेत्र अन्य प्रयोजन विवरण प्रविष्ट भयो !!!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    yield fetchallbanxetraanyaprayojanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/banxetraanyaprayojanlist");
    yield put(BanbibaranActions.addbanxetraanyaprayojanSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addbanxetraanyaprayojanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//----------------- update banxetraanyaprayojan
export function* updatebanxetraanyaprayojanRequest(api, action) {
  const { payload, banxetraanyaprayojanId } = action;

  const response = yield api.postBanbibaranBanxetraanyaprayojanUpdate(
    payload.banxetraanyaprayojan.data,
    banxetraanyaprayojanId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बनक्षेत्र अन्यप्रयोजन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraanyaprayojanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/banxetraanyaprayojanlist");
    yield put(
      BanbibaranActions.updatebanxetraanyaprayojanSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.updatebanxetraanyaprayojanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//-----------------delete banxetraanyaprayojan
export function* deletebanxetraanyaprayojanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranBanxetraanyaprayojanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक बनक्षेत्र अन्यप्रयोजन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraanyaprayojanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield put(
      BanbibaranActions.deletebanxetraanyaprayojanSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.deletebanxetraanyaprayojanFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
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
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
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
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
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
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
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

//uddhyam bibaran

export function* fetchalluddhyambibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getUddhyambibaranList(payloaddata);

  if (response.ok) {
    yield put(BanbibaranActions.fetchalluddhyambibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchalluddhyambibaranFailure());
  }
}

export function* fetchuddhyambibaranRequest(api, action) {
  const uddhyamId = action.payload;

  const response = yield api.getUddhyambibaran(uddhyamId);
  if (response.ok) {
    yield put(BanbibaranActions.fetchuddhyambibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchuddhyambibaranFailure());
  }
}

// Add uddhyambibaran
export function* adduddhyambibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranUddhyambibaranAddNew(
    payload.uddhyambibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक उद्धयम विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalluddhyambibaranRequest(api, {
      name: "niji_uddhyam_sankhya",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/uddhyambibaranlist");
    yield put(BanbibaranActions.adduddhyambibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.adduddhyambibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update uddhyambibaran
export function* updateuddhyambibaranRequest(api, action) {
  const { payload, uddhyamId } = action;

  const response = yield api.postBanbibaranUddhyambibaranUpdate(
    payload.uddhyambibaran.data,
    uddhyamId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक उद्धयम विवरण पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalluddhyambibaranRequest(api, {
      name: "niji_uddhyam_sankhya",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/uddhyambibaranlist");
    yield put(BanbibaranActions.updateuddhyambibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updateuddhyambibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete uddhyambibaran
export function* deleteuddhyambibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranUddhyambibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक उद्धयम विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalluddhyambibaranRequest(api, {
      name: "niji_uddhyam_sankhya",
      page: 0,
      perPage: 10,
    });
    yield put(BanbibaranActions.deleteuddhyambibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deleteuddhyambibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//bachat bibaran
export function* fetchallbachatbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBachatbibaranList(payloaddata);

  if (response.ok) {
    yield put(BanbibaranActions.fetchallbachatbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchallbachatbibaranFailure());
  }
}

export function* fetchbachatbibaranRequest(api, action) {
  const bachatId = action.payload;

  const response = yield api.getBachatbibaran(bachatId);

  if (response.ok) {
    yield put(BanbibaranActions.fetchbachatbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchbachatbibaranFailure());
  }
}

export function* addbachatbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranBachatbibaranAddNew(
    payload.bachatbibaran.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वचत तथा ऋण विवरण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbachatbibaranRequest(api, {
      name: "samuhako_naam",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/bachatbibaranlist");
    yield put(BanbibaranActions.addbachatbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addbachatbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update bachatbibaran
export function* updatebachatbibaranRequest(api, action) {
  const { payload, bachatId } = action;

  const response = yield api.postBanbibaranBachatbibaranUpdate(
    payload.bachatbibaran.data,
    bachatId
  );

  if (response.ok) {
    toast.success(
      "सफलतापुर्वक वचत तथा ऋण विवरण विवरण पुनः प्रविष्ट भयो !!!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    yield fetchallbachatbibaranRequest(api, {
      name: "samuhako_naam",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/bachatbibaranlist");
    yield put(BanbibaranActions.updatebachatbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updatebachatbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* deletebachatbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranBachatbibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक वचत तथा ऋण विवरण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbachatbibaranRequest(api, {
      name: "samuhako_naam",
      page: 0,
      perPage: 10,
    });
    yield put(BanbibaranActions.deletebachatbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deletebachatbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
