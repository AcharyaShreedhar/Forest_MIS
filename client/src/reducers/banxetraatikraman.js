import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BanxetraatikramanTypes } from "../actions/banxetraatikraman";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbanxetraatikramanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanxetraatikramanSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanxetraatikramanData: action.response,
  });
};
const fetchallbanxetraatikramanFailure = (state, action) => {
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

  [BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_REQUEST]: fetchallbanxetraatikramanRequest,
  [BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_SUCCESS]: fetchallbanxetraatikramanSuccess,
  [BanxetraatikramanTypes.FETCHALLBANXETRAATIKRAMAN_FAILURE]: fetchallbanxetraatikramanFailure,

   
 
  [BanxetraatikramanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanxetraatikramanTypes.CLEAR_REQUEST]: clearRequest,
});