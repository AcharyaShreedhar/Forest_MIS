import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { SamrakshyanTypes } from "../actions/samrakshyan";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallsamrakshyanpokharinirmanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallsamrakshyanpokharinirmanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allsamrakshyanpokharinirmanData: action.response,
  });
};
const fetchallsamrakshyanpokharinirmanFailure = (state, action) => {
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
  [SamrakshyanTypes.FETCHALLSAMRAKSHYANPOKHARINIRMAN_REQUEST]: fetchallsamrakshyanpokharinirmanRequest,
  [SamrakshyanTypes.FETCHALLSAMRAKSHYANPOKHARINIRMAN_SUCCESS]: fetchallsamrakshyanpokharinirmanSuccess,
  [SamrakshyanTypes.FETCHALLSAMRAKSHYANPOKHARINIRMAN_FAILURE]: fetchallsamrakshyanpokharinirmanFailure,

  [SamrakshyanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [SamrakshyanTypes.CLEAR_REQUEST]: clearRequest,
});
