import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import BankaprakarActions from "../actions/bankaprakar";
import { isNil } from "ramda";

export function* fetchallbantypesRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getBantypesList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallbantypesSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallbantypesFailure());
  }
}

export function* fetchallsamudayikbanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getSamudayikbanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallsamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallsamudayikbanbibaranFailure());
  }
}

export function* fetchsamudayikbanbibaranRequest(api, action) {
  const samudayikbanBibaranId = action.payload;

  const response = yield api.getSamudayikbanBibaran(samudayikbanBibaranId);

  if (response.ok) {
    yield put(
      BankaprakarActions.fetchsamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchsamudayikbanbibaranFailure());
  }
}

// Add samudayikbanbibaran
export function* addsamudayikbanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarSamudayikbanAddNew(
    payload.samudayikban.data
  );

  if (response.ok) {
    yield addnabikarankaryayojanaRequest(api, [payload, "samudayikban"]);
    yield put(BankaprakarActions.addsamudayikbanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addsamudayikbanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update samudayikbanbibaran
export function* updatesamudayikbanbibaranRequest(api, action) {
  const { payload, samudayikbanbibaranId } = action;

  const response = yield api.postBankaprakarSamudayikbanUpdate(
    payload.samudayikban.data,
    samudayikbanbibaranId
  );

  if (response.ok) {
    yield updatenabikarankaryayojanaRequest(api, [payload, "samudayikban"]);
    yield put(
      BankaprakarActions.updatesamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.updatesamudayikbanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete samudayikbanbibaran
export function* deletesamudayikbanbibaranRequest(api, action) {
  const { payload } = action;
  const response = yield api.postBankaprakarSamudayikbanDelete(payload);

  if (response.ok) {
    yield deletenabikarankaryayojanaRequest(api, [payload, "samudayikban"]);
    yield put(
      BankaprakarActions.deletesamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.deletesamudayikbanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchalldharmikbanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getDharmikbanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchalldharmikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchalldharmikbanbibaranFailure());
  }
}

export function* fetchdharmikbanbibaranRequest(api, action) {
  const dharmikbanBibaranId = action.payload;

  const response = yield api.getDharmikbanBibaran(dharmikbanBibaranId);

  if (response.ok) {
    yield put(BankaprakarActions.fetchdharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.fetchdharmikbanbibaranFailure());
  }
}

// Add dharmikbanbibaran
export function* adddharmikbanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarDharmikbanAddNew(
    payload.dharmikban.data
  );

  if (response.ok) {
    yield addnabikarankaryayojanaRequest(api, [payload, "dharmikban"]);
    yield put(BankaprakarActions.adddharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.adddharmikbanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Dharmikbanbibaran
export function* updatedharmikbanbibaranRequest(api, action) {
  const { payload, dharmikbanbibaranId } = action;

  const response = yield api.postBankaprakarDharmikbanUpdate(
    payload.dharmikban.data,
    dharmikbanbibaranId
  );
  if (response.ok) {
    yield updatenabikarankaryayojanaRequest(api, [payload, "dharmikban"]);
    yield put(BankaprakarActions.updatedharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.updatedharmikbanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete dharmikbanbibaran
export function* deletedharmikbanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarDharmikbanDelete(payload);

  if (response.ok) {
    yield deletenabikarankaryayojanaRequest(api, [payload, "dharmikban"]);
    yield put(BankaprakarActions.deletedharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.deletedharmikbanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallnijibanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getNijibanBibaranList(payloaddata);
  if (response.ok) {
    yield put(BankaprakarActions.fetchallnijibanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.fetchallnijibanbibaranFailure());
  }
}

export function* fetchnijibanbibaranRequest(api, action) {
  const nijibanBibaranId = action.payload;

  const response = yield api.getNijibanBibaran(nijibanBibaranId);
  if (response.ok) {
    yield put(BankaprakarActions.fetchnijibanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.fetchnijibanbibaranFailure());
  }
}

// Add nijibanbibaran
export function* addnijibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarNijibanAddNew(payload.nijiban.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "swikrit_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/nijibanlist");
    yield put(BankaprakarActions.addnijibanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addnijibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Nijibanbibaran
export function* updatenijibanbibaranRequest(api, action) {
  const { payload, nijibanbibaranId } = action;

  const response = yield api.postBankaprakarNijibanUpdate(
    payload.nijiban.data,
    nijibanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "swikrit_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/nijibanlist");
    yield put(BankaprakarActions.updatenijibanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.updatenijibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete Nijibanbibaran
export function* deletenijibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarNijibanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "swikrit_miti",
      page: 0,
      perPage: 10,
    });
    yield put(BankaprakarActions.deletenijibanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.deletenijibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallkabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getKabuliyatibanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallkabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallkabuliyatibanbibaranFailure());
  }
}

export function* fetchkabuliyatibanbibaranRequest(api, action) {
  const kabuliyatibanBibaranId = action.payload;

  const response = yield api.getKabuliyatibanBibaran(kabuliyatibanBibaranId);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchkabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchkabuliyatibanbibaranFailure());
  }
}

// Add Kabuliyatibanbibaran
export function* addkabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarKabuliyatibanAddNew(
    payload.kabuliyatiban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियती वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "entry_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/kabuliyatibanlist");
    yield put(BankaprakarActions.addkabuliyatibanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addkabuliyatibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update Kabuliyatibanbibaran
export function* updatekabuliyatibanbibaranRequest(api, action) {
  const { payload, kabuliyatibanbibaranId } = action;

  const response = yield api.postBankaprakarKabuliyatibanUpdate(
    payload.kabuliyatiban.data,
    kabuliyatibanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियाती वन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "entry_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/kabuliyatibanlist");
    yield put(
      BankaprakarActions.updatekabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.updatekabuliyatibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete Kabuliyatibanbibaran
export function* deletekabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarKabuliyatibanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियती वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "entry_date",
      page: 0,
      perPage: 10,
    });
    yield put(
      BankaprakarActions.deletekabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.deletekabuliyatibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* fetchallnabikarankaryayojanaRequest(api, action) {
  const response = yield api.getNabikaranKaryayojanaList();

  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallnabikarankaryayojanaSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallnabikarankaryayojanaFailure());
  }
}

export function* fetchnabikarankaryayojanaRequest(api, action) {
  const nabikaranKaryayojanaId = action.payload;

  const response = yield api.getNabikaranKaryayojana(nabikaranKaryayojanaId);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchnabikarankaryayojanaSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchnabikarankaryayojanaFailure());
  }
}

// Add Nabikarankaryayojana
export function* addnabikarankaryayojanaRequest(api, action) {
  const { payload } = action;
  const payloaddata = !isNil(payload) ? payload : action[0];
  const type = action[1];
  const response = yield api.postBankaprakarNabikarankaryayojanaAddNew(
    payloaddata.nabikarankaryayojana.data
  );
  if (response.ok) {
    switch (type) {
      case "samudayikban": {
        toast.success("सफलतापुर्वक सामुदायिक वन प्रविष्ट भयो !!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        yield fetchallsamudayikbanbibaranRequest(api, {
          fromDate: "2075-01-01",
          toDate: "2090-12-30",
          distId: "%",
          name: "handover_date",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/samudayikbanlist");
        break;
      }
      case "dharmikban": {
        toast.success("सफलतापुर्वक धार्मिक वन प्रविष्ट भयो !!!!! !!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        yield fetchalldharmikbanbibaranRequest(api, {
          fromDate: "2075-01-01",
          toDate: "2090-12-30",
          distId: "%",
          name: "handover_date",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/dharmikbanlist");
        break;
      }
      default:
        break;
    }

    yield put(BankaprakarActions.addnabikarankaryayojanaSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addnabikarankaryayojanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update nabikarankaryayojana
export function* updatenabikarankaryayojanaRequest(api, action) {
  const { payload } = action;
  const payloaddata = !isNil(payload) ? payload : action[0];
  const type = action[1];
  const response = yield api.postBankaprakarNabikarankaryayojanaUpdate(
    payloaddata.nabikarankaryayojana.data,
    payloaddata.nabikarankaryayojana.data.darta_id
  );

  if (response.ok) {
    switch (type) {
      case "samudayikban": {
        toast.success("सफलतापुर्वक सामुदायिक वन शंसोधन भयो !!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        yield fetchallsamudayikbanbibaranRequest(api, {
          fromDate: "2075-01-01",
          toDate: "2090-12-30",
          distId: "%",
          name: "handover_date",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/samudayikbanlist");
        break;
      }
      case "dharmikban": {
        toast.success(
          "सफलतापुर्वक धार्मिक वन सम्बन्धी विवरण शंसोधन भयो !!!!! !!!!! !!!!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        yield fetchalldharmikbanbibaranRequest(api, {
          fromDate: "2075-01-01",
          toDate: "2090-12-30",
          distId: "%",
          name: "handover_date",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/dharmikbanlist");
        break;
      }
      default:
        break;
    }
    yield put(
      BankaprakarActions.updatenabikarankaryayojanaSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.updatenabikarankaryayojanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete nabikarankaryayojana
export function* deletenabikarankaryayojanaRequest(api, action) {
  const { payload } = action;
  const payloaddata = !isNil(payload) ? payload : action[0];
  const type = action[1];
  const response = yield api.postBankaprakarNabikarankaryayojanaDelete(
    payloaddata
  );

  if (response.ok) {
    switch (type) {
      case "samudayikban": {
        toast.success("सफलतापुर्वक सामुदायिक वन हटाईयो !!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        yield fetchallsamudayikbanbibaranRequest(api, {
          fromDate: "2075-01-01",
          toDate: "2090-12-30",
          distId: "%",
          name: "handover_date",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/samudayikbanlist");
        break;
      }
      case "dharmikban": {
        toast.success("सफलतापुर्वक धार्मिक वन हटाईयो !!!!! !!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        yield fetchalldharmikbanbibaranRequest(api, {
          fromDate: "2075-01-01",
          toDate: "2090-12-30",
          distId: "%",
          name: "handover_date",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/dharmikbanlist");
        break;
      }
      default:
        break;
    }
    yield put(
      BankaprakarActions.deletenabikarankaryayojanaSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.deletenabikarankaryayojanaFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//chaklabanbibaran
export function* fetchallchaklabanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getChaklabanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallchaklabanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallchaklabanbibaranFailure());
  }
}

export function* fetchchaklabanbibaranRequest(api, action) {
  const chaklabanBibaranId = action.payload;

  const response = yield api.getChaklabanBibaran(chaklabanBibaranId);
  if (response.ok) {
    yield put(BankaprakarActions.fetchchaklabanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.fetchchaklabanbibaranFailure());
  }
}

// Add chaklabanbibaran
export function* addchaklabanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarChaklabanAddNew(
    payload.chaklaban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक चक्ला वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallchaklabanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/chaklabanlist");
    yield put(BankaprakarActions.addchaklabanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addchaklabanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update chaklabanbibaran
export function* updatechaklabanbibaranRequest(api, action) {
  const { payload, chaklabanbibaranId } = action;

  const response = yield api.postBankaprakarChaklabanUpdate(
    payload.chaklaban.data,
    chaklabanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक चक्ला वन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallchaklabanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/chaklabanlist");
    yield put(BankaprakarActions.updatechaklabanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.updatechaklabanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Delete chaklabanbibaran
export function* deletechaklabanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarChaklabanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक चक्ला वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallchaklabanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield put(BankaprakarActions.deletechaklabanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.deletechaklabanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Consumer Group Details
export function* fetchallconsumergroupdetailsRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getConsumergroupDetailsList(payloaddata);

  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallconsumergroupdetailsSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallconsumergroupdetailsFailure());
  }
}

export function* fetchconsumergroupdetailsRequest(api, action) {
  const consumergroupDetailsId = action.payload;

  const response = yield api.getConsumergroupDetails(consumergroupDetailsId);

  if (response.ok) {
    yield put(
      BankaprakarActions.fetchconsumergroupdetailsSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchconsumergroupdetailsFailure());
  }
}

// Add consumer group details
export function* addconsumergroupdetailsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postConsumergroupDetailsAddNew(
    payload.consumergroupdetails.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक उपभोक्ता समुह प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallconsumergroupdetailsRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "registration_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/upabhoktasamuhalist");
    yield put(BankaprakarActions.addconsumergroupdetailsSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addconsumergroupdetailsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update consumergroupdetails
export function* updateconsumergroupdetailsRequest(api, action) {
  const { payload, consumergroupdetailsId } = action;

  const response = yield api.postConsumergroupDetailsUpdate(
    payload.consumergroupdetails.data,
    consumergroupdetailsId
  );
  console.log("data..", response);
  if (response.ok) {
    toast.success("सफलतापुर्वक उपभोक्ता समुह शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallconsumergroupdetailsRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "registration_date",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/upabhoktasamuhalist");
    yield put(
      BankaprakarActions.updateconsumergroupdetailsSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.updateconsumergroupdetailsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// delete consumergroupdetails
export function* deleteconsumergroupdetailsRequest(api, action) {
  const { payload } = action;

  const response = yield api.postConsumergroupDetailsDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक उपभोक्ता समुह हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallconsumergroupdetailsRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      BankaprakarActions.deleteconsumergroupdetailsSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.deleteconsumergroupdetailsFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//rastriyabanbibaran
export function* fetchallrastriyabanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getRastriyabanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallrastriyabanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallrastriyabanbibaranFailure());
  }
}

export function* fetchrastriyabanbibaranRequest(api, action) {
  const rastriyabanBibaranId = action.payload;

  const response = yield api.getRastriyabanBibaran(rastriyabanBibaranId);

  if (response.ok) {
    yield put(BankaprakarActions.fetchrastriyabanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.fetchrastriyabanbibaranFailure());
  }
}

// Add rastriyabanbibaran
export function* addrastriyabanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postRastriyabanBibaranAddNew(
    payload.rastriyaban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक राष्ट्रिय वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrastriyabanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/rastriyabanlist");
    yield put(BankaprakarActions.addrastriyabanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addrastriyabanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update rastriyabanbibaran
export function* updaterastriyabanbibaranRequest(api, action) {
  const { payload, rastriyabanbibaranId } = action;

  const response = yield api.postRastriyabanBibaranUpdate(
    payload.rastriyaban.data,
    rastriyabanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक राष्ट्रिय वन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrastriyabanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/rastriyabanlist");
    yield put(
      BankaprakarActions.updaterastriyabanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.updaterastriyabanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* deleterastriyabanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postRastriyabanBibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक राष्ट्रिय वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallrastriyabanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      BankaprakarActions.deleterastriyabanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.deleterastriyabanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//commercialkabuliyati
export function* fetchallcommercialkabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getCommercialkabuliyatibanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallcommercialkabuliyatibanbibaranSuccess(
        response.data
      )
    );
  } else {
    yield put(
      BankaprakarActions.fetchallcommercialkabuliyatibanbibaranFailure()
    );
  }
}

export function* fetchcommercialkabuliyatibanbibaranRequest(api, action) {
  const rastriyabanBibaranId = action.payload;

  const response = yield api.getCommercialkabuliyatibanBibaran(
    rastriyabanBibaranId
  );

  if (response.ok) {
    yield put(
      BankaprakarActions.fetchcommercialkabuliyatibanbibaranSuccess(
        response.data
      )
    );
  } else {
    yield put(BankaprakarActions.fetchcommercialkabuliyatibanbibaranFailure());
  }
}

export function* addcommercialkabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarCommercialkabuliyatibanAddNew(
    payload.commercialban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक व्यवसायिक कबुलियती वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallcommercialkabuliyatibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/commercialbanlist");
    yield put(
      BankaprakarActions.addcommercialkabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.addcommercialkabuliyatibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* updatecommercialkabuliyatibanbibaranRequest(api, action) {
  const { payload, commercialkabuliyatibanbibaranId } = action;

  const response = yield api.postBankaprakarCommercialkabuliyatibanUpdate(
    payload.commercialban.data,
    commercialkabuliyatibanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक व्यवसायिक कबुलियाती वन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallcommercialkabuliyatibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/commercialbanlist");
    yield put(
      BankaprakarActions.updatecommercialkabuliyatibanbibaranSuccess(
        response.data
      )
    );
  } else {
    yield put(BankaprakarActions.updatecommercialkabuliyatibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* deletecommercialkabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarCommercialkabuliyatibanDelete(
    payload
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक व्यवसायिक कबुलियती वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallcommercialkabuliyatibanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      BankaprakarActions.deletecommercialkabuliyatibanbibaranSuccess(
        response.data
      )
    );
  } else {
    yield put(BankaprakarActions.deletecommercialkabuliyatibanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//Sajhedaribanbibaran
export function* fetchallsajhedaribanbibaranRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getSajhedaribanBibaranList(payloaddata);
  if (response.ok) {
    yield put(
      BankaprakarActions.fetchallsajhedaribanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchallsajhedaribanbibaranFailure());
  }
}

export function* fetchsajhedaribanbibaranRequest(api, action) {
  const sajhedaribanBibaranId = action.payload;

  const response = yield api.getSajhedaribanBibaran(sajhedaribanBibaranId);

  if (response.ok) {
    yield put(
      BankaprakarActions.fetchsajhedaribanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.fetchsajhedaribanbibaranFailure());
  }
}

export function* addsajhedaribanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarSajhedaribanbibaranAddNew(
    payload.sajhedariban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक साझेदारी वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsajhedaribanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/sajhedaribanlist");
    yield put(BankaprakarActions.addsajhedaribanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.addsajhedaribanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* updatesajhedaribanbibaranRequest(api, action) {
  const { payload, sajhedaribanbibaranId } = action;

  const response = yield api.postBankaprakarSajhedaribanbibaranUpdate(
    payload.sajhedariban.data,
    sajhedaribanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक साझेदारी वन शंसोधन भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsajhedaribanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/sajhedaribanlist");
    yield put(
      BankaprakarActions.updatesajhedaribanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.updatesajhedaribanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export function* deletesajhedaribanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBankaprakarSajhedaribanbibaranDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक साझेदारी वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsajhedaribanbibaranRequest(api, {
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      name: "darta_miti",
      page: 0,
      perPage: 10,
    });
    yield put(
      BankaprakarActions.deletesajhedaribanbibaranSuccess(response.data)
    );
  } else {
    yield put(BankaprakarActions.deletesajhedaribanbibaranFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
