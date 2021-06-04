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


 
  [SampatibibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [SampatibibaranTypes.CLEAR_REQUEST]: clearRequest,
});