import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import BankaprakarActions from "../actions/bankaprakar";

export function* fetchallsamudayikbanbibaranRequest(api, action) {
  const response = yield api.getSamudayikbanBibaranList();
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
    yield put(BankaprakarActions.fetchsamudayikbanbibaranSuccess(response.data));
  } else {
    yield put(BankaprakarActions.fetchsamudayikbanbibaranFailure());
  }
}

// Add samudayikbanbibaran
export function* addsamudayikbanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranSamudayikbanAddNew(
    payload.samudayikban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सामुदायिक वन प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamudayikbanbibaranRequest(api);
    yield call(history.push, "/forests/samudayikbanlist");
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

  const response = yield api.postBanbibaranSamudayikbanUpdate(
    payload.samudayikban.data,
    samudayikbanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सामुदायिक वन पुनः प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamudayikbanbibaranRequest(api);
    yield call(history.push, "/forests/samudayikbanlist");
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

  const response = yield api.postBanbibaranSamudayikbanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक सामुदायिक वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamudayikbanbibaranRequest(api);
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
  const response = yield api.getDharmikbanBibaranList();
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

  const response = yield api.postBanbibaranDharmikbanAddNew(
    payload.dharmikban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक धार्मिक वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldharmikbanbibaranRequest(api);
    yield call(history.push, "/forests/dharmikbanlist");
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

  const response = yield api.postBanbibaranDharmikbanUpdate(
    payload.dharmikban.data,
    dharmikbanbibaranId
  );
  if (response.ok) {
    toast.success("सफलतापुर्वक धार्मिक वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldharmikbanbibaranRequest(api);
    yield call(history.push, "/forests/dharmikbanlist");
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

  const response = yield api.postBanbibaranDharmikbanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक धार्मिक वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldharmikbanbibaranRequest(api);
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
  const response = yield api.getNijibanBibaranList();
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

  const response = yield api.postBanbibaranNijibanAddNew(payload.nijiban.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api);
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

  const response = yield api.postBanbibaranNijibanUpdate(
    payload.nijiban.data,
    nijibanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api);
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

  const response = yield api.postBanbibaranNijibanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api);
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
  const response = yield api.getKabuliyatibanBibaranList();
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

  const response = yield api.postBanbibaranKabuliyatibanAddNew(
    payload.kabuliyatiban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियती वन प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api);
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

  const response = yield api.postBanbibaranKabuliyatibanUpdate(
    payload.kabuliyatiban.data,
    kabuliyatibanbibaranId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियाती वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api);
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

  const response = yield api.postBanbibaranKabuliyatibanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियती वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api);
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

  const response = yield api.postBanbibaranNabikarankaryayojanaAddNew(
    payload.nabikarankaryayojana.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक नविकरण कार्ययोजना प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnabikarankaryayojanaRequest(api);
    yield call(history.push, "/forests/nabikarankaryayojanalist");
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

  const response = yield api.postBanbibaranNabikarankaryayojanaUpdate(
    payload.nabikarankaryayojana.data,
    payload.id
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक नविकरण कार्ययोजना पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnabikarankaryayojanaRequest(api);
    yield call(history.push, "/forests/nabikarankaryayojanalist");
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

  const response = yield api.postBanbibaranNabikarankaryayojanaDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक नविकरण कार्ययोजना हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnabikarankaryayojanaRequest(api);
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
