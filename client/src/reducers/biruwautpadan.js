import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BiruwautpadanTypes } from "../actions/biruwautpadan";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbiruwautpadanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbiruwautpadanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbiruwautpadanData: action.response,
  });
};
const fetchallbiruwautpadanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbiruwautpadanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

  const fetchbiruwautpadanSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    biruwautpadanData: action.response,
  });
};
const fetchbiruwautpadanFailure = (state, action) => {
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
  [BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_REQUEST]: fetchallbiruwautpadanRequest,
  [BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_SUCCESS]: fetchallbiruwautpadanSuccess,
  [BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_FAILURE]: fetchallbiruwautpadanFailure,

  [BiruwautpadanTypes.FETCHBIRUWAUTPADAN_REQUEST]: fetchbiruwautpadanRequest,
  [BiruwautpadanTypes.FETCHBIRUWAUTPADAN_SUCCESS]: fetchbiruwautpadanSuccess,
  [BiruwautpadanTypes.FETCHBIRUWAUTPADAN_FAILURE]: fetchbiruwautpadanFailure,
  
  [BiruwautpadanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BiruwautpadanTypes.CLEAR_REQUEST]: clearRequest,
});
