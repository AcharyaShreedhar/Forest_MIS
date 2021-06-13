import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { SampatibibaranTypes } from "../actions/sampatibibaran";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallassetsRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallassetsSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allassetsData: action.response,
  });
};
const fetchallassetsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchassetsRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchassetsSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    assetsData: action.response,
  });
};
const fetchassetsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


//Add assets
const addassetsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addassetsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addassetsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update assets
const updateassetsRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updateassetsSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updateassetsFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete assets
const deleteassetsRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deleteassetsSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deleteassetsFailure = (state, action) =>
state.merge({ ...state, status: "error" });




const fetchallvehiclesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallvehiclesSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allvehiclesData: action.response,
  });
};
const fetchallvehiclesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchvehiclesRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchvehiclesSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    vehiclesData: action.response,
  });
};
const fetchvehiclesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add vehicles
const addvehiclesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addvehiclesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addvehiclesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update vehicles
const updatevehiclesRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatevehiclesSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatevehiclesFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete vehicles
const deletevehiclesRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletevehiclesSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletevehiclesFailure = (state, action) =>
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

  [SampatibibaranTypes.FETCHALLASSETS_REQUEST]: fetchallassetsRequest,
  [SampatibibaranTypes.FETCHALLASSETS_SUCCESS]: fetchallassetsSuccess,
  [SampatibibaranTypes.FETCHALLASSETS_FAILURE]: fetchallassetsFailure,

  [SampatibibaranTypes.FETCHASSETS_REQUEST]: fetchassetsRequest,
  [SampatibibaranTypes.FETCHASSETS_SUCCESS]: fetchassetsSuccess,
  [SampatibibaranTypes.FETCHASSETS_FAILURE]: fetchassetsFailure,

  [SampatibibaranTypes.ADDASSETS_REQUEST]: addassetsRequest,
  [SampatibibaranTypes.ADDASSETS_SUCCESS]: addassetsSuccess,
  [SampatibibaranTypes.ADDASSETS_FAILURE]: addassetsFailure,

  [SampatibibaranTypes.UPDATEASSETS_REQUEST]: updateassetsRequest,
  [SampatibibaranTypes.UPDATEASSETS_SUCCESS]: updateassetsSuccess,
  [SampatibibaranTypes.UPDATEASSETS_FAILURE]: updateassetsFailure,

  [SampatibibaranTypes.DELETEASSETS_REQUEST]: deleteassetsRequest,
  [SampatibibaranTypes.DELETEASSETS_SUCCESS]: deleteassetsSuccess,
  [SampatibibaranTypes.DELETEASSETS_FAILURE]: deleteassetsFailure,

  [SampatibibaranTypes.FETCHALLVEHICLES_REQUEST]: fetchallvehiclesRequest,
  [SampatibibaranTypes.FETCHALLVEHICLES_SUCCESS]: fetchallvehiclesSuccess,
  [SampatibibaranTypes.FETCHALLVEHICLES_FAILURE]: fetchallvehiclesFailure,
  
  [SampatibibaranTypes.FETCHVEHICLES_REQUEST]: fetchvehiclesRequest,
  [SampatibibaranTypes.FETCHVEHICLES_SUCCESS]: fetchvehiclesSuccess,
  [SampatibibaranTypes.FETCHVEHICLES_FAILURE]: fetchvehiclesFailure,

  [SampatibibaranTypes.ADDVEHICLES_REQUEST]: addvehiclesRequest,
  [SampatibibaranTypes.ADDVEHICLES_SUCCESS]: addvehiclesSuccess,
  [SampatibibaranTypes.ADDVEHICLES_FAILURE]: addvehiclesFailure,

  [SampatibibaranTypes.UPDATEVEHICLES_REQUEST]: updatevehiclesRequest,
  [SampatibibaranTypes.UPDATEVEHICLES_SUCCESS]: updatevehiclesSuccess,
  [SampatibibaranTypes.UPDATEVEHICLES_FAILURE]: updatevehiclesFailure,

  [SampatibibaranTypes.DELETEVEHICLES_REQUEST]: deletevehiclesRequest,
  [SampatibibaranTypes.DELETEVEHICLES_SUCCESS]: deletevehiclesSuccess,
  [SampatibibaranTypes.DELETEVEHICLES_FAILURE]: deletevehiclesFailure,


 
  [SampatibibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [SampatibibaranTypes.CLEAR_REQUEST]: clearRequest,
});