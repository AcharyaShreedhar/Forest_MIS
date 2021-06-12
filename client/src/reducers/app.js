import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { AppTypes } from "../actions/app";

const initialState = Immutable({
  status: "",
  user: {},
  token: "",
});

const loginRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const loginSuccess = (state, action) => {
  const { user_token, user } = action.response;

  return state.merge({
    ...state,
    status: "done",
    token: user_token,
    user,
  });
};
const loginFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const logoutRequest = (state, action) =>
  state.merge({ ...state, status: "done" });
const logoutSuccess = (state, action) =>
  state.merge({ ...state, status: "done" });
const logoutFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

// Municipalities
const fetchallmunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallmunicipalitiesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allmunicipalitiesData: action.response,
  });
};
const fetchallmunicipalitiesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchmunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

const fetchmunicipalitiesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    municipalitiesData: action.response,
  });
};
const fetchmunicipalitiesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

// Provinces

const fetchallprovincesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallprovincesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allprovincesData: action.response,
  });
};
const fetchallprovincesFailure = (state, action) => {
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
  [AppTypes.LOGIN_REQUEST]: loginRequest,
  [AppTypes.LOGIN_SUCCESS]: loginSuccess,
  [AppTypes.LOGIN_FAILURE]: loginFailure,

  [AppTypes.LOGOUT_REQUEST]: logoutRequest,
  [AppTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AppTypes.LOGOUT_FAILURE]: logoutFailure,

  //Municipalities

  [AppTypes.FETCHALLMUNICIPALITIES_REQUEST]: fetchallmunicipalitiesRequest,
  [AppTypes.FETCHALLMUNICIPALITIES_SUCCESS]: fetchallmunicipalitiesSuccess,
  [AppTypes.FETCHALLMUNICIPALITIES_FAILURE]: fetchallmunicipalitiesFailure,

  [AppTypes.FETCHMUNICIPALITIES_REQUEST]: fetchmunicipalitiesRequest,
  [AppTypes.FETCHMUNICIPALITIES_SUCCESS]: fetchmunicipalitiesSuccess,
  [AppTypes.FETCHMUNICIPALITIES_FAILURE]: fetchmunicipalitiesFailure,

  // Provinces

  [AppTypes.FETCHALLPROVINCES_REQUEST]: fetchallprovincesRequest,
  [AppTypes.FETCHALLPROVINCES_SUCCESS]: fetchallprovincesSuccess,
  [AppTypes.FETCHALLPROVINCES_FAILURE]: fetchallprovincesFailure,

  [AppTypes.LOCATIONS_REQUEST]: locationsRequest,
  [AppTypes.CLEAR_REQUEST]: clearRequest,
});
