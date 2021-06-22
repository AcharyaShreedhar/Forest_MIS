import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import BankaprakarActions from "../actions/bankaprakar";
import { isNil } from "ramda";

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
      name: "nijiban_name",
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
    toast.success("सफलतापुर्वक निजी वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallnijibanbibaranRequest(api, {
      name: "nijiban_name",
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
      name: "kabuliyatiban_name",
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
    toast.success("सफलतापुर्वक कबुलियाती वन पुनः प्रविष्ट भयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallkabuliyatibanbibaranRequest(api, {
      name: "kabuliyatiban_name",
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
          name: "samydayikban_name",
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
          name: "dharmikban_name",
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
        toast.success("सफलतापुर्वक सामुदायिक वन पुनः प्रविष्ट भयो !!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        yield fetchallsamudayikbanbibaranRequest(api, {
          name: "samydayikban_name",
          page: 0,
          perPage: 10,
        });
        yield call(history.push, "/forests/samudayikbanlist");
        break;
      }
      case "dharmikban": {
        toast.success(
          "सफलतापुर्वक धार्मिक वन पुनः प्रविष्ट भयो !!!!! !!!!! !!!!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
        yield fetchalldharmikbanbibaranRequest(api, {
          name: "dharmikban_name",
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
          name: "samydayikban_name",
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
          name: "dharmikban_name",
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

// Consumer Group Details
export function* fetchallconsumergroupdetailsRequest(api, action) {
  const response = yield api.getConsumergroupDetailsList();
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
