import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { DwandabebasthapanTypes } from "../actions/dwandabebasthapan";


const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbanyajantuuddarRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbanyajantuuddarSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allbanyajantuuddarData: action.response,
  });
};
const fetchallbanyajantuuddarFailure = (state, action) => {
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

  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_REQUEST]: fetchallbanyajantuuddarRequest,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_SUCCESS]: fetchallbanyajantuuddarSuccess,
  [DwandabebasthapanTypes.FETCHALLBANYAJANTUUDDAR_FAILURE]: fetchallbanyajantuuddarFailure,

 
  [DwandabebasthapanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [DwandabebasthapanTypes.CLEAR_REQUEST]: clearRequest,
});
