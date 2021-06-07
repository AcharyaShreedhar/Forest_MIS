import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BanpaidawarTypes } from "../actions/banpaidawar";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbanpaidawarRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanpaidawarSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanpaidawarData: action.response,
  });
};
const fetchallbanpaidawarFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbanpaidawarRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchbanpaidawarSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    banpaidawarData: action.response,
  });
};
const fetchbanpaidawarFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchallbanpaidawarlilamRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanpaidawarlilamSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanpaidawarlilamData: action.response,
  });
};
const fetchallbanpaidawarlilamFailure = (state, action) => {
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

  [BanpaidawarTypes.FETCHALLBANPAIDAWAR_REQUEST]: fetchallbanpaidawarRequest,
  [BanpaidawarTypes.FETCHALLBANPAIDAWAR_SUCCESS]: fetchallbanpaidawarSuccess,
  [BanpaidawarTypes.FETCHALLBANPAIDAWAR_FAILURE]: fetchallbanpaidawarFailure,

  [BanpaidawarTypes.FETCHBANPAIDAWAR_REQUEST]: fetchbanpaidawarRequest,
  [BanpaidawarTypes.FETCHBANPAIDAWAR_SUCCESS]: fetchbanpaidawarSuccess,
  [BanpaidawarTypes.FETCHBANPAIDAWAR_FAILURE]: fetchbanpaidawarFailure,

  [BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_REQUEST]: fetchallbanpaidawarlilamRequest,
  [BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_SUCCESS]: fetchallbanpaidawarlilamSuccess,
  [BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_FAILURE]: fetchallbanpaidawarlilamFailure,

 
  [BanpaidawarTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanpaidawarTypes.CLEAR_REQUEST]: clearRequest,
});