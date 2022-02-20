import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import { isNil } from "ramda";
import InventoriesActions from "../actions/inventories";

export function* fetchallinventoriesRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getInventoriesList(payloaddata);

  if (response.ok) {
    yield put(InventoriesActions.fetchallinventoriesSuccess(response.data));
  } else {
    yield put(InventoriesActions.fetchallinventoriesFailure());
  }
}


export function* fetchinventoriesRequest(api, action) {
  const  inventId  = action.payload

  const response = yield api.getInventories(inventId);
  
  if (response.ok) {
    yield put(
      InventoriesActions.fetchinventoriesSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.fetchinventoriesFailure());
  }
}

// Add inventories
export function* addinventoriesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postInventoriesInventoriesAddNew(payload.inventories.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक  सुचीमा थप गरियो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallinventoriesRequest(api,{
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/inventorieslist");
    yield put(InventoriesActions.addinventoriesSuccess(response.data));
  } else {
    yield put(InventoriesActions.addinventoriesFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update inventories
export function* updateinventoriesRequest(api, action) {
  const { payload, inventoryId } = action;

  const response = yield api.postInventoriesInventoriesUpdate(
    payload.inventories.data,
    inventoryId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक सुचीमा  शंसोधन गरियो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallinventoriesRequest(api,{
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/inventorieslist");
    yield put(
      InventoriesActions.updateinventoriesSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.updateinventoriesFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//Delete inventories
export function* deleteinventoriesRequest(api, action) {
  const { payload } = action;

  const response = yield api.postInventoriesInventoriesDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक सुची हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallinventoriesRequest(api,{
      name: "arthik_barsa",
      page: 0,
      perPage: 10,
    });
    yield put(
      InventoriesActions.deleteinventoriesSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.deleteinventoriesFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}


export function* fetchallentryRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getEntryList(payloaddata);

  if (response.ok) {
    yield put(InventoriesActions.fetchallentrySuccess(response.data));
  } else {
    yield put(InventoriesActions.fetchallentryFailure());
  }
}

export function* fetchentryRequest(api, action) {
  const  entryId  = action.payload

  const response = yield api.getEntry(entryId);
  
  if (response.ok) {
    yield put(
      InventoriesActions.fetchentrySuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.fetchentryFailure());
  }
}

// Add entry
export function* addentryRequest(api, action) {
  const { payload } = action;

  const response = yield api.postInventoriesEntryAddNew(payload.entry.data);

  if (response.ok) {
    toast.success("सफलतापुर्वक प्रवेश  गरियो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallentryRequest(api,{
      name: "entry_amt",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/entrylist");
    yield put(InventoriesActions.addentrySuccess(response.data));
  } else {
    yield put(InventoriesActions.addentryFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update entry
export function* updateentryRequest(api, action) {
  const { payload, entryId } = action;

  const response = yield api.postInventoriesEntryUpdate(
    payload.entry.data,
    entryId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक प्रवेश शंसोधन गरियो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallentryRequest(api,{
      name: "entry_amt",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/entrylist");
    yield put(
      InventoriesActions.updateentrySuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.updateentryFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//Delete entry
export function* deleteentryRequest(api, action) {
  const { payload } = action;

  const response = yield api.postInventoriesEntryDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक प्रवेश  हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallentryRequest(api,{
      name: "entry_amt",
      page: 0,
      perPage: 10,
    });
    yield put(
      InventoriesActions.deleteentrySuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.deleteentryFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}


export function* fetchallexitRequest(api, action) {
  const { payload } = action;
  const payloaddata = isNil(payload) ? action : payload;
  const response = yield api.getExitList(payloaddata);

  if (response.ok) {
    yield put(InventoriesActions.fetchallexitSuccess(response.data));
  } else {
    yield put(InventoriesActions.fetchallexitFailure());
  }
}


export function* fetchexitRequest(api, action) {
  const  exitId  = action.payload

  const response = yield api.getExit(exitId);
  
  if (response.ok) {
    yield put(
      InventoriesActions.fetchexitSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.fetchexitFailure());
  }
}

// Add exit
export function* addexitRequest(api, action) {
  const { payload } = action;

  const response = yield api.postInventoriesExitAddNew(
    payload.exit.data
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक  बहिर्गमन भयो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallexitRequest(api,{
      name: "exit_rate",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/exitlist");
    yield put(InventoriesActions.addexitSuccess(response.data));
  } else {
    yield put(InventoriesActions.addexitFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

// Update exit
export function* updateexitRequest(api, action) {
  const { payload, exitId } = action;

  const response = yield api.postInventoriesExitUpdate(
    payload.exit.data,
    exitId
  );

  if (response.ok) {
    toast.success("सफलतापुर्वक बहिर्गमन शंसोधन भयो  !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallexitRequest(api,{
      name: "exit_rate",
      page: 0,
      perPage: 10,
    });
    yield call(history.push, "/forests/exitlist");
    yield put(
      InventoriesActions.updatexitSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.updateexitFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

//Delete exit
export function* deleteexitRequest(api, action) {
  const { payload } = action;

  const response = yield api.postInventoriesExitDelete(payload);

  if (response.ok) {
    toast.success("सफलतापुर्वक बहिर्गमन हटाईयो !!!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallexitRequest(api,{
      name: "exit_rate",
      page: 0,
      perPage: 10,
    });
    yield put(
      InventoriesActions.deleteexitSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.deleteexitFailure());
    toast.error(
      "तपाईँको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}
