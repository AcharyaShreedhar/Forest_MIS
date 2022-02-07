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

//badhi bibaran
const fetchallbadhibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallbadhibibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbadhibibaranData: action.response,
  });
};
const fetchallbadhibibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbadhibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbadhibibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    badhibibaranData: action.response,
  });
};
const fetchbadhibibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

// add badhibibaran
const addbadhibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbadhibibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbadhibibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update badhibibaran
const updatebadhibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatebadhibibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatebadhibibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete badhibibaran
const deletebadhibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletebadhibibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletebadhibibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//bandadelobibaran
const fetchallbandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbandadelobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbandadelobibaranData: action.response,
  });
};
const fetchallbandadelobibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

const fetchbandadelobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    bandadelobibaranData: action.response,
  });
};
const fetchbandadelobibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add bandadelobibaran
const addbandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbandadelobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbandadelobibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update Bandadelobibaran
const updatebandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatebandadelobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatebandadelobibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete Bandadelobibaran
const deletebandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletebandadelobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletebandadelobibaranFailure = (state, action) =>
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

  [BipatbibaranTypes.FETCHALLBADHIBIBARAN_REQUEST]: fetchallbadhibibaranRequest,
  [BipatbibaranTypes.FETCHALLBADHIBIBARAN_SUCCESS]: fetchallbadhibibaranSuccess,
  [BipatbibaranTypes.FETCHALLBADHIBIBARAN_FAILURE]: fetchallbadhibibaranFailure,

  [BipatbibaranTypes.FETCHBADHIBIBARAN_REQUEST]: fetchbadhibibaranRequest,
  [BipatbibaranTypes.FETCHBADHIBIBARAN_SUCCESS]: fetchbadhibibaranSuccess,
  [BipatbibaranTypes.FETCHBADHIBIBARAN_FAILURE]: fetchbadhibibaranFailure,

  [BipatbibaranTypes.ADDBADHIBIBARAN_REQUEST]: addbadhibibaranRequest,
  [BipatbibaranTypes.ADDBADHIBIBARAN_SUCCESS]: addbadhibibaranSuccess,
  [BipatbibaranTypes.ADDBADHIBIBARAN_FAILURE]: addbadhibibaranFailure,

  [BipatbibaranTypes.UPDATEBADHIBIBARAN_REQUEST]: updatebadhibibaranRequest,
  [BipatbibaranTypes.UPDATEBADHIBIBARAN_SUCCESS]: updatebadhibibaranSuccess,
  [BipatbibaranTypes.UPDATEBADHIBIBARAN_FAILURE]: updatebadhibibaranFailure,

  [BipatbibaranTypes.DELETEBADHIBIBARAN_REQUEST]: deletebadhibibaranRequest,
  [BipatbibaranTypes.DELETEBADHIBIBARAN_SUCCESS]: deletebadhibibaranSuccess,
  [BipatbibaranTypes.DELETEBADHIBIBARAN_FAILURE]: deletebadhibibaranFailure,

  [BipatbibaranTypes.FETCHALLBANDADELOBIBARAN_REQUEST]: fetchallbandadelobibaranRequest,
  [BipatbibaranTypes.FETCHALLBANDADELOBIBARAN_SUCCESS]: fetchallbandadelobibaranSuccess,
  [BipatbibaranTypes.FETCHALLBANDADELOBIBARAN_FAILURE]: fetchallbandadelobibaranFailure,

  [BipatbibaranTypes.FETCHBANDADELOBIBARAN_REQUEST]: fetchbandadelobibaranRequest,
  [BipatbibaranTypes.FETCHBANDADELOBIBARAN_SUCCESS]: fetchbandadelobibaranSuccess,
  [BipatbibaranTypes.FETCHBANDADELOBIBARAN_FAILURE]: fetchbandadelobibaranFailure,

  [BipatbibaranTypes.ADDBANDADELOBIBARAN_REQUEST]: addbandadelobibaranRequest,
  [BipatbibaranTypes.ADDBANDADELOBIBARAN_SUCCESS]: addbandadelobibaranSuccess,
  [BipatbibaranTypes.ADDBANDADELOBIBARAN_FAILURE]: addbandadelobibaranFailure,

  [BipatbibaranTypes.UPDATEBANDADELOBIBARAN_REQUEST]: updatebandadelobibaranRequest,
  [BipatbibaranTypes.UPDATEBANDADELOBIBARAN_SUCCESS]: updatebandadelobibaranSuccess,
  [BipatbibaranTypes.UPDATEBANDADELOBIBARAN_FAILURE]: updatebandadelobibaranFailure,

  [BipatbibaranTypes.DELETEBANDADELOBIBARAN_REQUEST]: deletebandadelobibaranRequest,
  [BipatbibaranTypes.DELETEBANDADELOBIBARAN_SUCCESS]: deletebandadelobibaranSuccess,
  [BipatbibaranTypes.DELETEBANDADELOBIBARAN_FAILURE]: deletebandadelobibaranFailure,

  [BipatbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BipatbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
