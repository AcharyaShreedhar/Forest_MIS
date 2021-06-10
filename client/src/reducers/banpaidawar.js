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

//Add Banpaidawar
const addbanpaidawarRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbanpaidawarSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbanpaidawarFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update banpaidawar
const updatebanpaidawarRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatebanpaidawarSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatebanpaidawarFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete banpaidawar
const deletebanpaidawarRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletebanpaidawarSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletebanpaidawarFailure = (state, action) =>
state.merge({ ...state, status: "error" });




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


const fetchbanpaidawarlilamRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchbanpaidawarlilamSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    banpaidawarlilamData: action.response,
  });
};
const fetchbanpaidawarlilamFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add Banpaidawarlilam
const addbanpaidawarlilamRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbanpaidawarlilamSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbanpaidawarlilamFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update banpaidawarlilam
const updatebanpaidawarlilamRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatebanpaidawarlilamSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatebanpaidawarlilamFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete banpaidawarlilam
const deletebanpaidawarlilamRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletebanpaidawarlilamSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletebanpaidawarlilamFailure = (state, action) =>
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

  [BanpaidawarTypes.FETCHALLBANPAIDAWAR_REQUEST]: fetchallbanpaidawarRequest,
  [BanpaidawarTypes.FETCHALLBANPAIDAWAR_SUCCESS]: fetchallbanpaidawarSuccess,
  [BanpaidawarTypes.FETCHALLBANPAIDAWAR_FAILURE]: fetchallbanpaidawarFailure,

  [BanpaidawarTypes.FETCHBANPAIDAWAR_REQUEST]: fetchbanpaidawarRequest,
  [BanpaidawarTypes.FETCHBANPAIDAWAR_SUCCESS]: fetchbanpaidawarSuccess,
  [BanpaidawarTypes.FETCHBANPAIDAWAR_FAILURE]: fetchbanpaidawarFailure,

  [BanpaidawarTypes.ADDBANPAIDAWAR_REQUEST]: addbanpaidawarRequest,
  [BanpaidawarTypes.ADDBANPAIDAWAR_SUCCESS]: addbanpaidawarSuccess,
  [BanpaidawarTypes.ADDBANPAIDAWAR_FAILURE]: addbanpaidawarFailure,

  [BanpaidawarTypes.UPDATEBANPAIDAWAR_REQUEST]: updatebanpaidawarRequest,
  [BanpaidawarTypes.UPDATEBANPAIDAWAR_SUCCESS]: updatebanpaidawarSuccess,
  [BanpaidawarTypes.UPDATEBANPAIDAWAR_FAILURE]: updatebanpaidawarFailure,

  [BanpaidawarTypes.DELETEBANPAIDAWAR_REQUEST]: deletebanpaidawarRequest,
  [BanpaidawarTypes.DELETEBANPAIDAWAR_SUCCESS]: deletebanpaidawarSuccess,
  [BanpaidawarTypes.DELETEBANPAIDAWAR_FAILURE]: deletebanpaidawarFailure,

  [BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_REQUEST]: fetchallbanpaidawarlilamRequest,
  [BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_SUCCESS]: fetchallbanpaidawarlilamSuccess,
  [BanpaidawarTypes.FETCHALLBANPAIDAWARLILAM_FAILURE]: fetchallbanpaidawarlilamFailure,

  [BanpaidawarTypes.FETCHBANPAIDAWARLILAM_REQUEST]: fetchbanpaidawarlilamRequest,
  [BanpaidawarTypes.FETCHBANPAIDAWARLILAM_SUCCESS]: fetchbanpaidawarlilamSuccess,
  [BanpaidawarTypes.FETCHBANPAIDAWARLILAM_FAILURE]: fetchbanpaidawarlilamFailure,

  [BanpaidawarTypes.ADDBANPAIDAWARLILAM_REQUEST]: addbanpaidawarlilamRequest,
  [BanpaidawarTypes.ADDBANPAIDAWARLILAM_SUCCESS]: addbanpaidawarlilamSuccess,
  [BanpaidawarTypes.ADDBANPAIDAWARLILAM_FAILURE]: addbanpaidawarlilamFailure,

  [BanpaidawarTypes.UPDATEBANPAIDAWARLILAM_REQUEST]: updatebanpaidawarlilamRequest,
  [BanpaidawarTypes.UPDATEBANPAIDAWARLILAM_SUCCESS]: updatebanpaidawarlilamSuccess,
  [BanpaidawarTypes.UPDATEBANPAIDAWARLILAM_FAILURE]: updatebanpaidawarlilamFailure,

  [BanpaidawarTypes.DELETEBANPAIDAWARLILAM_REQUEST]: deletebanpaidawarlilamRequest,
  [BanpaidawarTypes.DELETEBANPAIDAWARLILAM_SUCCESS]: deletebanpaidawarlilamSuccess,
  [BanpaidawarTypes.DELETEBANPAIDAWARLILAM_FAILURE]: deletebanpaidawarlilamFailure,

 
  [BanpaidawarTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanpaidawarTypes.CLEAR_REQUEST]: clearRequest,
});