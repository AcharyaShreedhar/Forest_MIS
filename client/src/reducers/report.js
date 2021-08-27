import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { ReportTypes } from "../actions/report";

const initialState = Immutable({
  status: "",
});

//...................................Nabikaran Bibaran
const fetchnabikaranbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchnabikaranbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    nabikaran_yojana: action.response,
  });
};
const fetchnabikaranbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................Samuha bhitra Banpaidawar bikri
const fetchsamuhabhitrabanpaidawarbikribibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchsamuhabhitrabanpaidawarbikribibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banpaidawar_bikri: action.response,
  });
};
const fetchsamuhabhitrabanpaidawarbikribibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banxetra atikraman niyantran
const fetchbanxetraatikramanniyantranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanxetraatikramanniyantranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banxetra_atikraman: action.response,
  });
};
const fetchbanxetraatikramanniyantranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banyajantu xeti rahat
const fetchbanyajantuxetirahatRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanyajantuxetirahatSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banyajantu_xeti_rahat: action.response,
  });
};
const fetchbanyajantuxetirahatFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banyajantu uddar sambhandhi bibaran
const fetchbanyajantuuddarbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbanyajantuuddarbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banyajantu_uddar: action.response,
  });
};
const fetchbanyajantuuddarbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//...................................banyajantu uddar sambhandhi bibaran
const fetchbandadeloxetibibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchbandadeloxetibibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    bandadelo_xeti: action.response,
  });
};
const fetchbandadeloxetibibaranFailure = (state, action) => {
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
  [ReportTypes.FETCHNABIKARANBIBARAN_REQUEST]: fetchnabikaranbibaranRequest,
  [ReportTypes.FETCHNABIKARANBIBARAN_SUCCESS]: fetchnabikaranbibaranSuccess,
  [ReportTypes.FETCHNABIKARANBIBARAN_FAILURE]: fetchnabikaranbibaranFailure,

  [ReportTypes.FETCHSAMUHABHITRABANPAIDAWARBIKRIBIBARAN_REQUEST]: fetchsamuhabhitrabanpaidawarbikribibaranRequest,
  [ReportTypes.FETCHSAMUHABHITRABANPAIDAWARBIKRIBIBARAN_SUCCESS]: fetchsamuhabhitrabanpaidawarbikribibaranSuccess,
  [ReportTypes.FETCHSAMUHABHITRABANPAIDAWARBIKRIBIBARAN_FAILURE]: fetchsamuhabhitrabanpaidawarbikribibaranFailure,

  [ReportTypes.FETCHBANXETRAATIKRAMANNIYANTRAN_REQUEST]: fetchbanxetraatikramanniyantranRequest,
  [ReportTypes.FETCHBANXETRAATIKRAMANNIYANTRAN_SUCCESS]: fetchbanxetraatikramanniyantranSuccess,
  [ReportTypes.FETCHBANXETRAATIKRAMANNIYANTRAN_FAILURE]: fetchbanxetraatikramanniyantranFailure,

  [ReportTypes.FETCHBANYAJANTUXETIRAHAT_REQUEST]: fetchbanyajantuxetirahatRequest,
  [ReportTypes.FETCHBANYAJANTUXETIRAHAT_SUCCESS]: fetchbanyajantuxetirahatSuccess,
  [ReportTypes.FETCHBANYAJANTUXETIRAHAT_FAILURE]: fetchbanyajantuxetirahatFailure,

  [ReportTypes.FETCHBANYAJANTUUDDARBIBARAN_REQUEST]: fetchbanyajantuuddarbibaranRequest,
  [ReportTypes.FETCHBANYAJANTUUDDARBIBARAN_SUCCESS]: fetchbanyajantuuddarbibaranSuccess,
  [ReportTypes.FETCHBANYAJANTUUDDARBIBARAN_FAILURE]: fetchbanyajantuuddarbibaranFailure,

  [ReportTypes.FETCHBANDADELOXETIBIBARAN_REQUEST]: fetchbandadeloxetibibaranRequest,
  [ReportTypes.FETCHBANDADELOXETIBIBARAN_SUCCESS]: fetchbandadeloxetibibaranSuccess,
  [ReportTypes.FETCHBANDADELOXETIBIBARAN_FAILURE]: fetchbandadeloxetibibaranFailure,

  [ReportTypes.LOCATIONS_REQUEST]: locationsRequest,
  [ReportTypes.CLEAR_REQUEST]: clearRequest,
});
