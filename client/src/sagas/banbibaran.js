import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

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

  const response = yield api.postBanbibaranSamudayikbanAddNew(
    payload.samudayikban.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सामुदायिक वन प्रविष्ट भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallsamudayikbanbibaranRequest(api);
    yield call(history.push, "/forests/samudayikbanlist");
    yield put(BanbibaranActions.addsamudayikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addsamudayikbanbibaranFailure());
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
      BanbibaranActions.updatesamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.updatesamudayikbanbibaranFailure());
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
      BanbibaranActions.deletesamudayikbanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.deletesamudayikbanbibaranFailure());
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
    yield put(BanbibaranActions.adddharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.adddharmikbanbibaranFailure());
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
  const { payload } = action;

  const response = yield api.postBanbibaranDharmikbanUpdate(
    payload.dharmikban.data,
    payload.id
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक धार्मिक वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchalldharmikbanbibaranRequest(api);
    yield call(history.push, "/forests/dharmikbanlist");
    yield put(BanbibaranActions.updatedharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updatedharmikbanbibaranFailure());
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
    yield put(BanbibaranActions.deletedharmikbanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.deletedharmikbanbibaranFailure());
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
    yield put(BanbibaranActions.addnijibanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addnijibanbibaranFailure());
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
  const { payload } = action;

  const response = yield api.postBanbibaranNijibanUpdate(
    payload.nijiban.data,
    payload.id
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक निजी वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api);
    yield call(history.push, "/forests/nijibanlist");
    yield put(BanbibaranActions.updatenijibanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.updatenijibanbibaranFailure());
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
    yield put(
      BanbibaranActions.deletenijibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.deletenijibanbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
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
    yield put(BanbibaranActions.addkabuliyatibanbibaranSuccess(response.data));
  } else {
    yield put(BanbibaranActions.addkabuliyatibanbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}


// Update Kabuliyatibanbibaran
export function* updatekabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranKbauliyatibanUpdate(
    payload.kabuliyatiban.data,
    payload.id
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियाती वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api);
    yield call(history.push, "/forests/kabuliyatibanlist");
    yield put(
      BanbibaranActions.updatekabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.updatekabuliyatibanbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}



// Delete Kabuliyatibanbibaran
export function* deletekabuliyatibanbibaranRequest(api, action) {
  const { payload } = action;

  const response = yield api.postBanbibaranKapuliyatibanDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक कबुलियती वन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api);
    yield put(
      BanbibaranActions.deletekabuliyatibanbibaranSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.deletekabuliyatibanbibaranFailure());
    toast.error("तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}



export function* fetchallnabikarankaryayojanaRequest(api, action) {
  const response = yield api.getNabikaranKaryayojanaList();
  
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchallnabikarankaryayojanaSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchallnabikarankaryayojanaFailure());
  }
}


export function* fetchnabikarankaryayojanaRequest(api, action) {
  const nabikaranKaryayojanaId = action.payload;

  const response = yield api.getNabikaranKaryayojana(nabikaranKaryayojanaId);
  console.log("response..saga", response);
  if (response.ok) {
    yield put(
      BanbibaranActions.fetchnabikarankaryayojanaSuccess(response.data)
    );
  } else {
    yield put(BanbibaranActions.fetchnabikarankaryayojanaFailure());
  }
}