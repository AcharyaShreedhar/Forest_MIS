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

const fetchsamrakshyanpokharinirmanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchsamrakshyanpokharinirmanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    samrakshyanpokharinirmanData: action.response,
  });
};
const fetchsamrakshyanpokharinirmanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add samrakshyanpokharinirman
const addsamrakshyanpokharinirmanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addsamrakshyanpokharinirmanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addsamrakshyanpokharinirmanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update samrakshyanpokharinirman
const updatesamrakshyanpokharinirmanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatesamrakshyanpokharinirmanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatesamrakshyanpokharinirmanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete samrakshyanpokhari
const deletesamrakshyanpokharinirmanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletesamrakshyanpokharinirmanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletesamrakshyanpokharinirmanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//----------------- jaladhar samrakshyan
const fetchalljaladharsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchalljaladharsamrakshyanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alljaladharsamrakshyanData: action.response,
  });
};
const fetchalljaladharsamrakshyanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchjaladharsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchjaladharsamrakshyanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    jaladharsamrakshyanData: action.response,
  });
};
const fetchjaladharsamrakshyanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add  jaladhar samrakshyan
const addjaladharsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addjaladharsamrakshyanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addjaladharsamrakshyanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update jaladharsamrakshyan
const updatejaladharsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatejaladharsamrakshyanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatejaladharsamrakshyanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete jaladhar samrakshyan
const deletejaladharsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletejaladharsamrakshyanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletejaladharsamrakshyanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//----------------- nadikinar samrakshyan
const fetchallnadikinarsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallnadikinarsamrakshyanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allnadikinarsamrakshyanData: action.response,
  });
};
const fetchallnadikinarsamrakshyanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchnadikinarsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchnadikinarsamrakshyanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    nadikinarsamrakshyanData: action.response,
  });
};
const fetchnadikinarsamrakshyanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add  nadikinar samrakshyan
const addnadikinarsamrakshyanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addnadikinarsamrakshyanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addnadikinarsamrakshyanFailure = (state, action) =>
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
  [SamrakshyanTypes.FETCHALLSAMRAKSHYANPOKHARINIRMAN_REQUEST]: fetchallsamrakshyanpokharinirmanRequest,
  [SamrakshyanTypes.FETCHALLSAMRAKSHYANPOKHARINIRMAN_SUCCESS]: fetchallsamrakshyanpokharinirmanSuccess,
  [SamrakshyanTypes.FETCHALLSAMRAKSHYANPOKHARINIRMAN_FAILURE]: fetchallsamrakshyanpokharinirmanFailure,

  [SamrakshyanTypes.FETCHSAMRAKSHYANPOKHARINIRMAN_REQUEST]: fetchsamrakshyanpokharinirmanRequest,
  [SamrakshyanTypes.FETCHSAMRAKSHYANPOKHARINIRMAN_SUCCESS]: fetchsamrakshyanpokharinirmanSuccess,
  [SamrakshyanTypes.FETCHSAMRAKSHYANPOKHARINIRMAN_FAILURE]: fetchsamrakshyanpokharinirmanFailure,

  [SamrakshyanTypes.ADDSAMRAKSHYANPOKHARINIRMAN_REQUEST]: addsamrakshyanpokharinirmanRequest,
  [SamrakshyanTypes.ADDSAMRAKSHYANPOKHARINIRMAN_SUCCESS]: addsamrakshyanpokharinirmanSuccess,
  [SamrakshyanTypes.ADDSAMRAKSHYANPOKHARINIRMAN_FAILURE]: addsamrakshyanpokharinirmanFailure,

  [SamrakshyanTypes.UPDATESAMRAKSHYANPOKHARINIRMAN_REQUEST]: updatesamrakshyanpokharinirmanRequest,
  [SamrakshyanTypes.UPDATESAMRAKSHYANPOKHARINIRMAN_SUCCESS]: updatesamrakshyanpokharinirmanSuccess,
  [SamrakshyanTypes.UPDATESAMRAKSHYANPOKHARINIRMAN_FAILURE]: updatesamrakshyanpokharinirmanFailure,

  [SamrakshyanTypes.DELETESAMRAKSHYANPOKHARINIRMAN_REQUEST]: deletesamrakshyanpokharinirmanRequest,
  [SamrakshyanTypes.DELETESAMRAKSHYANPOKHARINIRMAN_SUCCESS]: deletesamrakshyanpokharinirmanSuccess,
  [SamrakshyanTypes.DELETESAMRAKSHYANPOKHARINIRMAN_FAILURE]: deletesamrakshyanpokharinirmanFailure,

  [SamrakshyanTypes.FETCHALLJALADHARSAMRAKSHYAN_REQUEST]: fetchalljaladharsamrakshyanRequest,
  [SamrakshyanTypes.FETCHALLJALADHARSAMRAKSHYAN_SUCCESS]: fetchalljaladharsamrakshyanSuccess,
  [SamrakshyanTypes.FETCHALLJALADHARSAMRAKSHYAN_FAILURE]: fetchalljaladharsamrakshyanFailure,

  [SamrakshyanTypes.FETCHJALADHARSAMRAKSHYAN_REQUEST]: fetchjaladharsamrakshyanRequest,
  [SamrakshyanTypes.FETCHJALADHARSAMRAKSHYAN_SUCCESS]: fetchjaladharsamrakshyanSuccess,
  [SamrakshyanTypes.FETCHJALADHARSAMRAKSHYAN_FAILURE]: fetchjaladharsamrakshyanFailure,

  [SamrakshyanTypes.ADDJALADHARSAMRAKSHYAN_REQUEST]: addjaladharsamrakshyanRequest,
  [SamrakshyanTypes.ADDJALADHARSAMRAKSHYAN_SUCCESS]: addjaladharsamrakshyanSuccess,
  [SamrakshyanTypes.ADDJALADHARSAMRAKSHYAN_FAILURE]: addjaladharsamrakshyanFailure,

  [SamrakshyanTypes.UPDATEJALADHARSAMRAKSHYAN_REQUEST]: updatejaladharsamrakshyanRequest,
  [SamrakshyanTypes.UPDATEJALADHARSAMRAKSHYAN_SUCCESS]: updatejaladharsamrakshyanSuccess,
  [SamrakshyanTypes.UPDATEJALADHARSAMRAKSHYAN_FAILURE]: updatejaladharsamrakshyanFailure,

  [SamrakshyanTypes.DELETEJALADHARSAMRAKSHYAN_REQUEST]: deletejaladharsamrakshyanRequest,
  [SamrakshyanTypes.DELETEJALADHARSAMRAKSHYAN_SUCCESS]: deletejaladharsamrakshyanSuccess,
  [SamrakshyanTypes.DELETEJALADHARSAMRAKSHYAN_FAILURE]: deletejaladharsamrakshyanFailure,

  [SamrakshyanTypes.FETCHALLNADIKINARSAMRAKSHYAN_REQUEST]: fetchallnadikinarsamrakshyanRequest,
  [SamrakshyanTypes.FETCHALLNADIKINARSAMRAKSHYAN_SUCCESS]: fetchallnadikinarsamrakshyanSuccess,
  [SamrakshyanTypes.FETCHALLNADIKINARSAMRAKSHYAN_FAILURE]: fetchallnadikinarsamrakshyanFailure,

  [SamrakshyanTypes.FETCHNADIKINARSAMRAKSHYAN_REQUEST]: fetchnadikinarsamrakshyanRequest,
  [SamrakshyanTypes.FETCHNADIKINARSAMRAKSHYAN_SUCCESS]: fetchnadikinarsamrakshyanSuccess,
  [SamrakshyanTypes.FETCHNADIKINARSAMRAKSHYAN_FAILURE]: fetchnadikinarsamrakshyanFailure,

  [SamrakshyanTypes.ADDNADIKINARSAMRAKSHYAN_REQUEST]: addnadikinarsamrakshyanRequest,
  [SamrakshyanTypes.ADDNADIKINARSAMRAKSHYAN_SUCCESS]: addnadikinarsamrakshyanSuccess,
  [SamrakshyanTypes.ADDNADIKINARSAMRAKSHYAN_FAILURE]: addnadikinarsamrakshyanFailure,

  [SamrakshyanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [SamrakshyanTypes.CLEAR_REQUEST]: clearRequest,
});
