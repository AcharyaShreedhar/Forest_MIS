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


  [InventoriesTypes.LOCATIONS_REQUEST]: locationsRequest,
  [InventoriesTypes.CLEAR_REQUEST]: clearRequest,
});
