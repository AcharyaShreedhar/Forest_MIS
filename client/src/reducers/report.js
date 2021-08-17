import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { ReportTypes } from "../actions/report";


const initialState = Immutable({
  status: "",
});

//...................................Nabikaran Bibaran
const fetchnabikaranbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchnabikaranbibaranSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    nabikaran_yojana: action.response,
  });
};
const fetchnabikaranbibaranFailure = (state, action) => {
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

  [ReportTypes.FETCHNABIKARAN_REQUEST]: fetchnabikaranbibaranRequest,
  [ReportTypes.FETCHNABIKARAN_SUCCESS]: fetchnabikaranbibaranSuccess,
  [ReportTypes.FETCHNABIKARAN_FAILURE]: fetchnabikaranbibaranFailure,
  
  [ReportTypes.LOCATIONS_REQUEST]: locationsRequest,
  [ReportTypes.CLEAR_REQUEST]: clearRequest,
});
