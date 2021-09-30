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

//------------ Uddham Sambhandhi Bibaran
const fetchalluddhamRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchalluddhamSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alluddhamData: action.response,
  });
};
const fetchalluddhamFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchuddhamRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchuddhamSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    uddhamData: action.response,
  });
};
const fetchuddhamFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add uddham
const adduddhamRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const adduddhamSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const adduddhamFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update uddham
const updateuddhamRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updateuddhamSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updateuddhamFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete uddham
const deleteuddhamRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deleteuddhamSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deleteuddhamFailure = (state, action) =>
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
  // ---------------------------------------rojgar_srijana
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

  // ----------------------------------------------------------------uddham bibaran
  [MiscellaneousTypes.FETCHALLUDDHAM_REQUEST]: fetchalluddhamRequest,
  [MiscellaneousTypes.FETCHALLUDDHAM_SUCCESS]: fetchalluddhamSuccess,
  [MiscellaneousTypes.FETCHALLUDDHAM_FAILURE]: fetchalluddhamFailure,

  [MiscellaneousTypes.FETCHUDDHAM_REQUEST]: fetchuddhamRequest,
  [MiscellaneousTypes.FETCHUDDHAM_SUCCESS]: fetchuddhamSuccess,
  [MiscellaneousTypes.FETCHUDDHAM_FAILURE]: fetchuddhamFailure,

  [MiscellaneousTypes.ADDUDDHAM_REQUEST]: adduddhamRequest,
  [MiscellaneousTypes.ADDUDDHAM_SUCCESS]: adduddhamSuccess,
  [MiscellaneousTypes.ADDUDDHAM_FAILURE]: adduddhamFailure,

  [MiscellaneousTypes.UPDATEUDDHAM_REQUEST]: updateuddhamRequest,
  [MiscellaneousTypes.UPDATEUDDHAM_SUCCESS]: updateuddhamSuccess,
  [MiscellaneousTypes.UPDATEUDDHAM_FAILURE]: updateuddhamFailure,

  [MiscellaneousTypes.DELETEUDDHAM_REQUEST]: deleteuddhamRequest,
  [MiscellaneousTypes.DELETEUDDHAM_SUCCESS]: deleteuddhamSuccess,
  [MiscellaneousTypes.DELETEUDDHAM_FAILURE]: deleteuddhamFailure,

  [MiscellaneousTypes.LOCATIONS_REQUEST]: locationsRequest,
  [MiscellaneousTypes.CLEAR_REQUEST]: clearRequest,
});
