import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { InventoriesTypes } from "../actions/inventories";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallinventoriesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallinventoriesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allinventoriesData: action.response,
  });
};
const fetchallinventoriesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchinventoriesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchinventoriesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    inventoriesData: action.response,
  });
};
const fetchinventoriesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add inventories
const addinventoriesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addinventoriesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addinventoriesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

  //Update inventories
const updateinventoriesRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updateinventoriesSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updateinventoriesFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//Delete inventories
const deleteinventoriesRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deleteinventoriesSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deleteinventoriesFailure = (state, action) =>
state.merge({ ...state, status: "error" });



const fetchallentryRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallentrySuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allentryData: action.response,
  });
};
const fetchallentryFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchentryRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchentrySuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    entryData: action.response,
  });
};
const fetchentryFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add entry
const addentryRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addentrySuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addentryFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update entry
const updateentryRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updateentrySuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updateentryFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//Delete entry
const deleteentryRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deleteentrySuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deleteentryFailure = (state, action) =>
state.merge({ ...state, status: "error" });


const fetchallexitRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallexitSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allexitData: action.response,
  });
};
const fetchallexitFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchexitRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchexitSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    exitData: action.response,
  });
};
const fetchexitFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add exit
const addexitRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addexitSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addexitFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

  //Update exit
const updateexitRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updateexitSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updateexitFailure = (state, action) =>
state.merge({ ...state, status: "error" });


const locationsRequest = (state, action) => {
  let locations = state.locations;

  locations = prepend(action.payload.route, locations);
  locations = dropLast(1, locations);
  return state.merge({ ...state, locations });
};

const clearRequest = (state, action) =>
  state.merge({ ...state, ...initialState });

export const reducer = createReducer(initialState, {
  [InventoriesTypes.FETCHALLINVENTORIES_REQUEST]: fetchallinventoriesRequest,
  [InventoriesTypes.FETCHALLINVENTORIES_SUCCESS]: fetchallinventoriesSuccess,
  [InventoriesTypes.FETCHALLINVENTORIES_FAILURE]: fetchallinventoriesFailure,

  [InventoriesTypes.FETCHINVENTORIES_REQUEST]: fetchinventoriesRequest,
  [InventoriesTypes.FETCHINVENTORIES_SUCCESS]: fetchinventoriesSuccess,
  [InventoriesTypes.FETCHINVENTORIES_FAILURE]: fetchinventoriesFailure,

  [InventoriesTypes.ADDINVENTORIES_REQUEST]: addinventoriesRequest,
  [InventoriesTypes.ADDINVENTORIES_SUCCESS]: addinventoriesSuccess,
  [InventoriesTypes.ADDINVENTORIES_FAILURE]: addinventoriesFailure,

  [InventoriesTypes.UPDATEINVENTORIES_REQUEST]: updateinventoriesRequest,
  [InventoriesTypes.UPDATEINVENTORIES_SUCCESS]: updateinventoriesSuccess,
  [InventoriesTypes.UPDATEINVENTORIES_FAILURE]: updateinventoriesFailure,

  [InventoriesTypes.DELETEINVENTORIES_REQUEST]: deleteinventoriesRequest,
  [InventoriesTypes.DELETEINVENTORIES_SUCCESS]: deleteinventoriesSuccess,
  [InventoriesTypes.DELETEINVENTORIES_FAILURE]: deleteinventoriesFailure,

  [InventoriesTypes.FETCHALLENTRY_REQUEST]: fetchallentryRequest,
  [InventoriesTypes.FETCHALLENTRY_SUCCESS]: fetchallentrySuccess,
  [InventoriesTypes.FETCHALLENTRY_FAILURE]: fetchallentryFailure,

  [InventoriesTypes.FETCHENTRY_REQUEST]: fetchentryRequest,
  [InventoriesTypes.FETCHENTRY_SUCCESS]: fetchentrySuccess,
  [InventoriesTypes.FETCHENTRY_FAILURE]: fetchentryFailure,

  [InventoriesTypes.ADDENTRY_REQUEST]: addentryRequest,
  [InventoriesTypes.ADDENTRY_SUCCESS]: addentrySuccess,
  [InventoriesTypes.ADDENTRY_FAILURE]: addentryFailure,

  [InventoriesTypes.UPDATEENTRY_REQUEST]: updateentryRequest,
  [InventoriesTypes.UPDATEENTRY_SUCCESS]: updateentrySuccess,
  [InventoriesTypes.UPDATEENTRY_FAILURE]: updateentryFailure,

  [InventoriesTypes.DELETEENTRY_REQUEST]: deleteentryRequest,
  [InventoriesTypes.DELETEENTRY_SUCCESS]: deleteentrySuccess,
  [InventoriesTypes.DELETEENTRY_FAILURE]: deleteentryFailure,

  [InventoriesTypes.FETCHALLEXIT_REQUEST]: fetchallexitRequest,
  [InventoriesTypes.FETCHALLEXIT_SUCCESS]: fetchallexitSuccess,
  [InventoriesTypes.FETCHALLEXIT_FAILURE]: fetchallexitFailure,
 
  [InventoriesTypes.FETCHEXIT_REQUEST]: fetchexitRequest,
  [InventoriesTypes.FETCHEXIT_SUCCESS]: fetchexitSuccess,
  [InventoriesTypes.FETCHEXIT_FAILURE]: fetchexitFailure,

  [InventoriesTypes.ADDEXIT_REQUEST]: addexitRequest,
  [InventoriesTypes.ADDEXIT_SUCCESS]: addexitSuccess,
  [InventoriesTypes.ADDEXIT_FAILURE]: addexitFailure,

  [InventoriesTypes.UPDATEEXIT_REQUEST]: updateexitRequest,
  [InventoriesTypes.UPDATEEXIT_SUCCESS]: updateexitSuccess,
  [InventoriesTypes.UPDATEEXIT_FAILURE]: updateexitFailure,

  [InventoriesTypes.LOCATIONS_REQUEST]: locationsRequest,
  [InventoriesTypes.CLEAR_REQUEST]: clearRequest,
});
