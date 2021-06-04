import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { DwandabebasthapanTypes } from "../actions/dwandabebasthapan";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanyajantuuddarSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanyajantuuddarData: action.response,
  });
};
const fetchallbanyajantuuddarFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchbanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchbanyajantuuddarSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    banyajantuuddarData: action.response,
  });
};
const fetchbanyajantuuddarFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchallbanyajantuxetiRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanyajantuxetiSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanyajantuxetiData: action.response,
  });
};
const fetchallbanyajantuxetiFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchbanyajantuxetiRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchbanyajantuxetiSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    banyajantuxetiData: action.response,
  });
};
const fetchbanyajantuxetiFailure = (state, action) => {
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

  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_REQUEST]: fetchallbanyajantuuddarRequest,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_SUCCESS]: fetchallbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_FAILURE]: fetchallbanyajantuuddarFailure,

  [DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_REQUEST]: fetchbanyajantuuddarRequest,
  [DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_SUCCESS]: fetchbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_FAILURE]: fetchbanyajantuuddarFailure,

  [DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_REQUEST]: fetchallbanyajantuxetiRequest,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_SUCCESS]: fetchallbanyajantuxetiSuccess,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_FAILURE]: fetchallbanyajantuxetiFailure,

  [DwandabebasthapanTypes.FETCHBANYAJANTUXETI_REQUEST]: fetchbanyajantuxetiRequest,
  [DwandabebasthapanTypes.FETCHBANYAJANTUXETI_SUCCESS]: fetchbanyajantuxetiSuccess,
  [DwandabebasthapanTypes.FETCHBANYAJANTUXETI_FAILURE]: fetchbanyajantuxetiFailure,
  
  [DwandabebasthapanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [DwandabebasthapanTypes.CLEAR_REQUEST]: clearRequest,
});
