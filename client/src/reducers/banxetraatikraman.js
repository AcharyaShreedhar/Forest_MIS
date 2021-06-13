import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BanxetraatikramanTypes } from "../actions/banxetraatikraman";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbanxetraatikramanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanxetraatikramanSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanxetraatikramanData: action.response,
  });
};
const fetchallbanxetraatikramanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchbanxetraatikramanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchbanxetraatikramanSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    banxetraatikramanData: action.response,
  });
};
const fetchbanxetraatikramanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


//Add banxetraatikraman
const addbanxetraatikramanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbanxetraatikramanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbanxetraatikramanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update banxetraatikraman
const updatebanxetraatikramanRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatebanxetraatikramanSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatebanxetraatikramanFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete banxetraatikraman
const deletebanxetraatikramanRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletebanxetraatikramanSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletebanxetraatikramanFailure = (state, action) =>
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

  [BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_REQUEST]: fetchallbanxetraatikramanRequest,
  [BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_SUCCESS]: fetchallbanxetraatikramanSuccess,
  [BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_FAILURE]: fetchallbanxetraatikramanFailure,

  [BanxetraatikramanTypes.FETCHBANXETRAATIKRAMAN_REQUEST]: fetchbanxetraatikramanRequest,
  [BanxetraatikramanTypes.FETCHBANXETRAATIKRAMAN_SUCCESS]: fetchbanxetraatikramanSuccess,
  [BanxetraatikramanTypes.FETCHBANXETRAATIKRAMAN_FAILURE]: fetchbanxetraatikramanFailure,

  [BanxetraatikramanTypes.ADDBANXETRAATIKRAMAN_REQUEST]: addbanxetraatikramanRequest,
  [BanxetraatikramanTypes.ADDBANXETRAATIKRAMAN_SUCCESS]: addbanxetraatikramanSuccess,
  [BanxetraatikramanTypes.ADDBANXETRAATIKRAMAN_FAILURE]: addbanxetraatikramanFailure,

  [BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_REQUEST]: updatebanxetraatikramanRequest,
  [BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_SUCCESS]: updatebanxetraatikramanSuccess,
  [BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_FAILURE]: updatebanxetraatikramanFailure,

  [BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_REQUEST]: deletebanxetraatikramanRequest,
  [BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_SUCCESS]: deletebanxetraatikramanSuccess,
  [BanxetraatikramanTypes.UPDATEBANXETRAATIKRAMAN_FAILURE]: deletebanxetraatikramanFailure,

   
 
  [BanxetraatikramanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanxetraatikramanTypes.CLEAR_REQUEST]: clearRequest,
});