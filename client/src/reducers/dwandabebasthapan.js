import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { DwandabebasthapanTypes } from "../actions/dwandabebasthapan";


const initialState = Immutable({
  status: "",
  token: "",
});


const fetchtotalbanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchtotalbanyajantuuddarSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    totalbanyajantuuddarData: action.response,
  });
};
const fetchtotalbanyajantuuddarFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

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


//Add banyajantuuddar
const addbanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbanyajantuuddarSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbanyajantuuddarFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update banyajantuuddar
const updatebanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatebanyajantuuddarSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatebanyajantuuddarFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete banyajantuuddar
const deletebanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletebanyajantuuddarSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletebanyajantuuddarFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


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

//Add banyajantuxeti
const addbanyajantuxetiRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbanyajantuxetiSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbanyajantuxetiFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update banyajantuxeti
const updatebanyajantuxetiRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatebanyajantuxetiSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatebanyajantuxetiFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete banyajantuxeti
const deletebanyajantuxetiRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletebanyajantuxetiSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletebanyajantuxetiFailure = (state, action) =>
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

  [DwandabebasthapanTypes.FETCHTOTALBANYAJANTUUDDAR_REQUEST]: fetchtotalbanyajantuuddarRequest,
  [DwandabebasthapanTypes.FETCHTOTALBANYAJANTUUDDAR_SUCCESS]: fetchtotalbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.FETCHTOTALBANYAJANTUUDDAR_FAILURE]: fetchtotalbanyajantuuddarFailure,

  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_REQUEST]: fetchallbanyajantuuddarRequest,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_SUCCESS]: fetchallbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_FAILURE]: fetchallbanyajantuuddarFailure,

  [DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_REQUEST]: fetchbanyajantuuddarRequest,
  [DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_SUCCESS]: fetchbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.FETCHBANYAJANTUUDDAR_FAILURE]: fetchbanyajantuuddarFailure,

  [DwandabebasthapanTypes.ADDBANYAJANTUUDDAR_REQUEST]: addbanyajantuuddarRequest,
  [DwandabebasthapanTypes.ADDBANYAJANTUUDDAR_SUCCESS]: addbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.ADDBANYAJANTUUDDAR_FAILURE]: addbanyajantuuddarFailure,

  [DwandabebasthapanTypes.UPDATEBANYAJANTUUDDAR_REQUEST]: updatebanyajantuuddarRequest,
  [DwandabebasthapanTypes.UPDATEBANYAJANTUUDDAR_SUCCESS]: updatebanyajantuuddarSuccess,
  [DwandabebasthapanTypes.UPDATEBANYAJANTUUDDAR_FAILURE]: updatebanyajantuuddarFailure,

  [DwandabebasthapanTypes.DELETEBANYAJANTUUDDAR_REQUEST]: deletebanyajantuuddarRequest,
  [DwandabebasthapanTypes.DELETEBANYAJANTUUDDAR_SUCCESS]: deletebanyajantuuddarSuccess,
  [DwandabebasthapanTypes.DELETEBANYAJANTUUDDAR_FAILURE]: deletebanyajantuuddarFailure,

  [DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_REQUEST]: fetchallbanyajantuxetiRequest,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_SUCCESS]: fetchallbanyajantuxetiSuccess,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUXETI_FAILURE]: fetchallbanyajantuxetiFailure,

  [DwandabebasthapanTypes.FETCHBANYAJANTUXETI_REQUEST]: fetchbanyajantuxetiRequest,
  [DwandabebasthapanTypes.FETCHBANYAJANTUXETI_SUCCESS]: fetchbanyajantuxetiSuccess,
  [DwandabebasthapanTypes.FETCHBANYAJANTUXETI_FAILURE]: fetchbanyajantuxetiFailure,

  [DwandabebasthapanTypes.ADDBANYAJANTUXETI_REQUEST]: addbanyajantuxetiRequest,
  [DwandabebasthapanTypes.ADDBANYAJANTUXETI_SUCCESS]: addbanyajantuxetiSuccess,
  [DwandabebasthapanTypes.ADDBANYAJANTUXETI_FAILURE]: addbanyajantuxetiFailure,

  [DwandabebasthapanTypes.UPDATEBANYAJANTUXETI_REQUEST]: updatebanyajantuxetiRequest,
  [DwandabebasthapanTypes.UPDATEBANYAJANTUXETI_SUCCESS]: updatebanyajantuxetiSuccess,
  [DwandabebasthapanTypes.UPDATEBANYAJANTUXETI_FAILURE]: updatebanyajantuxetiFailure,

  [DwandabebasthapanTypes.DELETEBANYAJANTUXETI_REQUEST]: deletebanyajantuxetiRequest,
  [DwandabebasthapanTypes.DELETEBANYAJANTUXETI_SUCCESS]: deletebanyajantuxetiSuccess,
  [DwandabebasthapanTypes.DELETEBANYAJANTUXETI_FAILURE]: deletebanyajantuxetiFailure,
  
  [DwandabebasthapanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [DwandabebasthapanTypes.CLEAR_REQUEST]: clearRequest,
});
