import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { MuddaanusandhandayariTypes } from "../actions/muddaanusandhandayari";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallmuddaanusandhandayariRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallmuddaanusandhandayariSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allmuddaanusandhandayariData: action.response,
  });
};
const fetchallmuddaanusandhandayariFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchmuddaanusandhandayariRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchmuddaanusandhandayariSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    muddaanusandhandayariData: action.response,
  });
};
const fetchmuddaanusandhandayariFailure = (state, action) => {
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

  [MuddaanusandhandayariTypes.FETCHALLMUDDAANUSANDHANDAYARI_REQUEST]: fetchallmuddaanusandhandayariRequest,
  [MuddaanusandhandayariTypes.FETCHALLMUDDAANUSANDHANDAYARI_SUCCESS]: fetchallmuddaanusandhandayariSuccess,
  [MuddaanusandhandayariTypes.FETCHALLMUDDAANUSANDHANDAYARI_FAILURE]: fetchallmuddaanusandhandayariFailure,

  [MuddaanusandhandayariTypes.FETCHMUDDAANUSANDHANDAYARI_REQUEST]: fetchmuddaanusandhandayariRequest,
  [MuddaanusandhandayariTypes.FETCHMUDDAANUSANDHANDAYARI_SUCCESS]: fetchmuddaanusandhandayariSuccess,
  [MuddaanusandhandayariTypes.FETCHMUDDAANUSANDHANDAYARI_FAILURE]: fetchmuddaanusandhandayariFailure,

 
 
  [MuddaanusandhandayariTypes.LOCATIONS_REQUEST]: locationsRequest,
  [MuddaanusandhandayariTypes.CLEAR_REQUEST]: clearRequest,
});