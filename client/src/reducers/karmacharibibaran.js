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
  
    
    [KarmacharibibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
    [KarmacharibibaranTypes.CLEAR_REQUEST]: clearRequest,
  });
  