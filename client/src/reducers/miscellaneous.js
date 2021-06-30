import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { MiscellaneousTypes } from "../actions/miscellaneous";


const initialState = Immutable({
  status: "",
  token: "",
});

//------------ rojgar srijana
const fetchallrojgarsrijanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallrojgarsrijanaSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allrojgarsrijanaData: action.response,
  });
};
const fetchallrojgarsrijanaFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchrojgarsrijanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchrojgarsrijanaSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    rojgarsrijanaData: action.response,
  });
};
const fetchrojgarsrijanaFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add rojgarsrijana
const addrojgarsrijanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addrojgarsrijanaSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addrojgarsrijanaFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

  //Update rojgarsrijana
const updaterojgarsrijanaRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updaterojgarsrijanaSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updaterojgarsrijanaFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//Delete rojgarsrijana
const deleterojgarsrijanaRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deleterojgarsrijanaSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deleterojgarsrijanaFailure = (state, action) =>
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

  [MiscellaneousTypes.FETCHALLROJGARSRIJANA_REQUEST]: fetchallrojgarsrijanaRequest,
  [MiscellaneousTypes.FETCHALLROJGARSRIJANA_SUCCESS]: fetchallrojgarsrijanaSuccess,
  [MiscellaneousTypes.FETCHALLROJGARSRIJANA_FAILURE]: fetchallrojgarsrijanaFailure,

  [MiscellaneousTypes.FETCHROJGARSRIJANA_REQUEST]: fetchrojgarsrijanaRequest,
  [MiscellaneousTypes.FETCHROJGARSRIJANA_SUCCESS]: fetchrojgarsrijanaSuccess,
  [MiscellaneousTypes.FETCHROJGARSRIJANA_FAILURE]: fetchrojgarsrijanaFailure,

  [MiscellaneousTypes.ADDROJGARSRIJANA_REQUEST]: addrojgarsrijanaRequest,
  [MiscellaneousTypes.ADDROJGARSRIJANA_SUCCESS]: addrojgarsrijanaSuccess,
  [MiscellaneousTypes.ADDROJGARSRIJANA_FAILURE]: addrojgarsrijanaFailure,

  [MiscellaneousTypes.UPDATEROJGARSRIJANA_REQUEST]: updaterojgarsrijanaRequest,
  [MiscellaneousTypes.UPDATEROJGARSRIJANA_SUCCESS]: updaterojgarsrijanaSuccess,
  [MiscellaneousTypes.UPDATEROJGARSRIJANA_FAILURE]: updaterojgarsrijanaFailure,

  [MiscellaneousTypes.DELETEROJGARSRIJANA_REQUEST]: deleterojgarsrijanaRequest,
  [MiscellaneousTypes.DELETEROJGARSRIJANA_SUCCESS]: deleterojgarsrijanaSuccess,
  [MiscellaneousTypes.DELETEROJGARSRIJANA_FAILURE]: deleterojgarsrijanaFailure,
  
  [MiscellaneousTypes.LOCATIONS_REQUEST]: locationsRequest,
  [MiscellaneousTypes.CLEAR_REQUEST]: clearRequest,
});
