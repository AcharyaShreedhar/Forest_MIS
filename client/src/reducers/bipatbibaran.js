import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BipatbibaranTypes } from "../actions/bipatbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

//----------- pahirobibaran
const fetchallpahirobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallpahirobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allpahirobibaranData: action.response,
  });
};
const fetchallpahirobibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchpahirobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchpahirobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    pahirobibaranData: action.response,
  });
};
const fetchpahirobibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

// add pahirobibaran
const addpahirobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addpahirobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addpahirobibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update pahirobibaran
const updatepahirobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatepahirobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatepahirobibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete pahirobibaran
const deletepahirobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletepahirobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletepahirobibaranFailure = (state, action) =>
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
  [BipatbibaranTypes.FETCHALLPAHIROBIBARAN_REQUEST]: fetchallpahirobibaranRequest,
  [BipatbibaranTypes.FETCHALLPAHIROBIBARAN_SUCCESS]: fetchallpahirobibaranSuccess,
  [BipatbibaranTypes.FETCHALLPAHIROBIBARAN_FAILURE]: fetchallpahirobibaranFailure,

  [BipatbibaranTypes.FETCHPAHIROBIBARAN_REQUEST]: fetchpahirobibaranRequest,
  [BipatbibaranTypes.FETCHPAHIROBIBARAN_SUCCESS]: fetchpahirobibaranSuccess,
  [BipatbibaranTypes.FETCHPAHIROBIBARAN_FAILURE]: fetchpahirobibaranFailure,

  [BipatbibaranTypes.ADDPAHIROBIBARAN_REQUEST]: addpahirobibaranRequest,
  [BipatbibaranTypes.ADDPAHIROBIBARAN_SUCCESS]: addpahirobibaranSuccess,
  [BipatbibaranTypes.ADDPAHIROBIBARAN_FAILURE]: addpahirobibaranFailure,

  [BipatbibaranTypes.UPDATEPAHIROBIBARAN_REQUEST]: updatepahirobibaranRequest,
  [BipatbibaranTypes.UPDATEPAHIROBIBARAN_SUCCESS]: updatepahirobibaranSuccess,
  [BipatbibaranTypes.UPDATEPAHIROBIBARAN_FAILURE]: updatepahirobibaranFailure,

  [BipatbibaranTypes.DELETEPAHIROBIBARAN_REQUEST]: deletepahirobibaranRequest,
  [BipatbibaranTypes.DELETEPAHIROBIBARAN_SUCCESS]: deletepahirobibaranSuccess,
  [BipatbibaranTypes.DELETEPAHIROBIBARAN_FAILURE]: deletepahirobibaranFailure,

  [BipatbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BipatbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
