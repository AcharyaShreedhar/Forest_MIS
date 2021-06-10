import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { KarmacharibibaranTypes } from "../actions/karmacharibibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallemployeesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallemployeesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allemployeesData: action.response,
  });
};
const fetchallemployeesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchemployeesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchemployeesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    employeesData: action.response,
  });
};
const fetchemployeesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchallemployeeshistoryRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallemployeeshistorySuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allemployeeshistoryData: action.response,
  });
};
const fetchallemployeeshistoryFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchemployeeshistoryRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchemployeeshistorySuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    employeeshistoryData: action.response,
  });
};
const fetchemployeeshistoryFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchalllevelRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchalllevelSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alllevelData: action.response,
  });
};
const fetchalllevelFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchlevelRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchlevelSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    levelData: action.response,
  });
};
const fetchlevelFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchallpostRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallpostSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allpostData: action.response,
  });
};
const fetchallpostFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchpostRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchpostSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    postData: action.response,
  });
};
const fetchpostFailure = (state, action) => {
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
    [KarmacharibibaranTypes.FETCHALLEMPLOYEES_REQUEST]: fetchallemployeesRequest,
    [KarmacharibibaranTypes.FETCHALLEMPLOYEES_SUCCESS]: fetchallemployeesSuccess,
    [KarmacharibibaranTypes.FETCHALLEMPLOYEES_FAILURE]: fetchallemployeesFailure,

    [KarmacharibibaranTypes.FETCHEMPLOYEES_REQUEST]: fetchemployeesRequest,
    [KarmacharibibaranTypes.FETCHEMPLOYEES_SUCCESS]: fetchemployeesSuccess,
    [KarmacharibibaranTypes.FETCHEMPLOYEES_FAILURE]: fetchemployeesFailure,

    [KarmacharibibaranTypes.FETCHALLEMPLOYEESHISTORY_REQUEST]: fetchallemployeeshistoryRequest,
    [KarmacharibibaranTypes.FETCHALLEMPLOYEESHISTORY_SUCCESS]: fetchallemployeeshistorySuccess,
    [KarmacharibibaranTypes.FETCHALLEMPLOYEESHISTORY_FAILURE]: fetchallemployeeshistoryFailure,
  
    [KarmacharibibaranTypes.FETCHEMPLOYEESHISTORY_REQUEST]: fetchemployeeshistoryRequest,
    [KarmacharibibaranTypes.FETCHEMPLOYEESHISTORY_SUCCESS]: fetchemployeeshistorySuccess,
    [KarmacharibibaranTypes.FETCHEMPLOYEESHISTORY_FAILURE]: fetchemployeeshistoryFailure,

    [KarmacharibibaranTypes.FETCHALLLEVEL_REQUEST]: fetchalllevelRequest,
    [KarmacharibibaranTypes.FETCHALLLEVEL_SUCCESS]: fetchalllevelSuccess,
    [KarmacharibibaranTypes.FETCHALLLEVEL_FAILURE]: fetchalllevelFailure,

    [KarmacharibibaranTypes.FETCHLEVEL_REQUEST]: fetchlevelRequest,
    [KarmacharibibaranTypes.FETCHLEVEL_SUCCESS]: fetchlevelSuccess,
    [KarmacharibibaranTypes.FETCHLEVEL_FAILURE]: fetchlevelFailure,

    [KarmacharibibaranTypes.FETCHALLPOST_REQUEST]: fetchallpostRequest,
    [KarmacharibibaranTypes.FETCHALLPOST_SUCCESS]: fetchallpostSuccess,
    [KarmacharibibaranTypes.FETCHALLPOST_FAILURE]: fetchallpostFailure,

    [KarmacharibibaranTypes.FETCHPOST_REQUEST]: fetchpostRequest,
    [KarmacharibibaranTypes.FETCHPOST_SUCCESS]: fetchpostSuccess,
    [KarmacharibibaranTypes.FETCHPOST_FAILURE]: fetchpostFailure,
    
    [KarmacharibibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
    [KarmacharibibaranTypes.CLEAR_REQUEST]: clearRequest,
  });
  