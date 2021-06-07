import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import {KarmacharidarbandiTypes } from "../actions/karmacharidarbandi";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallkarmacharidarbandiRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallkarmacharidarbandiSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allkarmacharidarbandiData: action.response,
  });
};
const fetchallkarmacharidarbandiFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchkarmacharidarbandiRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchkarmacharidarbandiSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    karmacharidarbandiData: action.response,
  });
};
const fetchkarmacharidarbandiFailure = (state, action) => {
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
    [KarmacharidarbandiTypes.FETCHALLKARMACHARIDARBANDI_REQUEST]: fetchallkarmacharidarbandiRequest,
    [KarmacharidarbandiTypes.FETCHALLKARMACHARIDARBANDI_SUCCESS]: fetchallkarmacharidarbandiSuccess,
    [KarmacharidarbandiTypes.FETCHALLKARMACHARIDARBANDI_FAILURE]: fetchallkarmacharidarbandiFailure,

    [KarmacharidarbandiTypes.FETCHKARMACHARIDARBANDI_REQUEST]: fetchkarmacharidarbandiRequest,
    [KarmacharidarbandiTypes.FETCHKARMACHARIDARBANDI_SUCCESS]: fetchkarmacharidarbandiSuccess,
    [KarmacharidarbandiTypes.FETCHKARMACHARIDARBANDI_FAILURE]: fetchkarmacharidarbandiFailure,

    
    [KarmacharidarbandiTypes.LOCATIONS_REQUEST]: locationsRequest,
    [KarmacharidarbandiTypes.CLEAR_REQUEST]: clearRequest,
});
