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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    toast.success("सफलतापुर्वक बरामदितचिज बस्तु शंसोधन भयो !!!!!", {
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      officeId: "%",
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/banxetraanyaprayojanlist");
    yield put(BanbibaranActions.addbanxetraanyaprayojanSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addbanxetraanyaprayojanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    toast.success("सफलतापुर्वक बनक्षेत्र अन्यप्रयोजन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraanyaprayojanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      officeId: "%",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      officeId: "%",
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/seedgardenplotslist");
    yield put(BanbibaranActions.addplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addplotbibaranFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    toast.success("सफलतापुर्वक बगैंचा विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallplotbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/seedgardenplotslist");
    yield put(BanbibaranActions.updateplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updateplotbibaranFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      officeId: "%",
      name: "established_date",
      page: 0,
      perPage: 10,
    });
    yield put(BanbibaranActions.deleteplotbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deleteplotbibaranFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    toast.success("सफलतापुर्वक उद्धयम विवरण शंसोधन भयो !!!!!", {
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    toast.success("सफलतापुर्वक वचत तथा ऋण विवरण विवरण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//banxetra atikraman
export function* fetchallbanxetraatikramanRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBanxetraatikramanList(payloaddata);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallbanxetraatikramanSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallbanxetraatikramanFailure());
  }
}

export function* fetchbanxetraatikramanRequest(api, action) {
  const banxetraAtikramanId = action.payload;

  const response = yield api.getBanxetraatikraman(banxetraAtikramanId);
  if (response.ok) {
    yield put(BanbibaranActions.fetchbanxetraatikramanSuccess(response.data));
  } else {
    yield put(BanbibaranActions.fetchbanxetraatikramanFailure());
  }
}

// Add banxetraatikraman
export function* addbanxetraatikramanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanxetraatikramanBanxetraatikramanAddNew(
    payload.banxetraatikraman.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनक्षेत्र अतिक्रमण प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraatikramanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "atikraman_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/banxetraatikramanlist");
    yield put(BanbibaranActions.addbanxetraatikramanSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addbanxetraatikramanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update banxetraatikraman
export function* updatebanxetraatikramanRequest(api, action) {
  const { payload, banxetraatikramanId } = action;

  const response = yield api.postBanxetraatikramanBanxetraatikramanUpdate(
    payload.banxetraatikraman.data,
    banxetraatikramanId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनक्षेत्र अतिक्रमण शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraatikramanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "atikraman_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/banxetraatikramanlist");
    yield put(BanbibaranActions.updatebanxetraatikramanSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updatebanxetraatikramanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete banxetraatikraman
export function* deletebanxetraatikramanRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanxetraatikramanBanxetraatikramanDelete(
    payload
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक वनक्षेत्र अतिक्रमण हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallbanxetraatikramanRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "atikraman_miti",
      page: 0,
      perPage: 10,
    });
    yield put(BanbibaranActions.deletebanxetraatikramanSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deletebanxetraatikramanFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//muddaanusandhan dayari

export function* fetchallmuddaanusandhandayariRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getMuddaanusandhandayariList(payloaddata);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallmuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallmuddaanusandhandayariFailure());
  }
}

export function* fetchmuddaanusandhandayariRequest(api, action) {
  const muddaAnusandhanDayariId = action.payload;

  const response = yield api.getMuddaanusandhandayari(muddaAnusandhanDayariId);

  if (response.ok) {
    yield put(
      BanbibaranActions.fetchmuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchmuddaanusandhandayariFailure());
  }
}

// Add muddaanusandhandayari
export function* addmuddaanusandhandayariRequest(api, action) {
  const { payload } = action;

  const response =
    yield api.postMuddaanusandhandayariMuddaanusandhandayariAddNew(
      payload.muddaanusandhandayari.data
    );

  if (response.ok) {
    toast.success("सफलतापुर्वक मुद्दा अनुसन्धान दायरी प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmuddaanusandhandayariRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "jaheri_partibedan_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/muddaanusandhandayarilist");
    yield put(BanbibaranActions.addmuddaanusandhandayariSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addmuddaanusandhandayariFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update muddaanusandhandayari
export function* updatemuddaanusandhandayariRequest(api, action) {
  const { payload, muddaanusandhandayariId } = action;

  const response =
    yield api.postMuddaanusandhandayariMuddaanusandhandayariUpdate(
      payload.muddaanusandhandayari.data,
      muddaanusandhandayariId
    );

  if (response.ok) {
    toast.success("सफलतापुर्वक मुद्दा अनुसन्धान दायरी शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmuddaanusandhandayariRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "jaheri_partibedan_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/banbibaran/muddaanusandhandayarilist");
    yield put(
      BanbibaranActions.updatemuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.updatemuddaanusandhandayariFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete muddaanusandhandayari
export function* deletemuddaanusandhandayariRequest(api, action) {
  const { payload } = action;

  const response =
    yield api.postMuddaanusandhandayariMuddaanusandhandayariDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक मुद्दा अनुसन्धान दायरी हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallmuddaanusandhandayariRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      name: "jaheri_partibedan_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      BanbibaranActions.deletemuddaanusandhandayariSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.deletemuddaanusandhandayariFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
