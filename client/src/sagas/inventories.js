import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { history } from "../reducers";
import InventoriesActions from "../actions/inventories";

export function* fetchallinventoriesRequest(api, action) {
  const response = yield api.getInventoriesList();

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
    yield fetchallinventoriesRequest(api);
    yield call(history.push, "/forests/inventorieslist");
    yield put(InventoriesActions.addinventoriesSuccess(response.data));
  } else {
    yield put(InventoriesActions.addinventoriesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    toast.success("सफलतापुर्वक सुचीमा  पुनः थप गरियो !!!!", {
      position: toast.POSITION.TOP_CENTER,
    });
    yield fetchallinventoriesRequest(api);
    yield call(history.push, "/forests/inventorieslist");
    yield put(
      InventoriesActions.updateinventoriesSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.updateinventoriesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
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
    yield fetchallinventoriesRequest(api);
    yield put(
      InventoriesActions.deleteinventoriesSuccess(response.data)
    );
  } else {
    yield put(InventoriesActions.deleteinventoriesFailure());
    toast.error(
      "तपाईको कार्य सफल हुन सकेन.. कृपया पुनः प्रयास गर्नुहोला !!!!",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}


export function* fetchallentryRequest(api, action) {
  const response = yield api.getEntryList();

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

export function* fetchallexitRequest(api, action) {
  const response = yield api.getExitList();

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