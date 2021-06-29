import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { MiscellaneousTypes } from "../actions/miscellaneous";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallrojgarsrijanaRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
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

  
  [MiscellaneousTypes.LOCATIONS_REQUEST]: locationsRequest,
  [MiscellaneousTypes.CLEAR_REQUEST]: clearRequest,
});
