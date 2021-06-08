import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { PlotbibaranTypes } from "../actions/plotbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallplotbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallplotbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allplotbibaranData: action.response,
  });
};
const fetchallplotbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchplotbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchplotbibaranSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    plotbibaranData: action.response,
  });
};
const fetchplotbibaranFailure = (state, action) => {
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
  [PlotbibaranTypes.FETCHALLPLOTBIBARAN_REQUEST]: fetchallplotbibaranRequest,
  [PlotbibaranTypes.FETCHALLPLOTBIBARAN_SUCCESS]: fetchallplotbibaranSuccess,
  [PlotbibaranTypes.FETCHALLPLOTBIBARAN_FAILURE]: fetchallplotbibaranFailure,

  [PlotbibaranTypes.FETCHPLOTBIBARAN_REQUEST]: fetchplotbibaranRequest,
  [PlotbibaranTypes.FETCHPLOTBIBARAN_SUCCESS]: fetchplotbibaranSuccess,
  [PlotbibaranTypes.FETCHPLOTBIBARAN_FAILURE]: fetchplotbibaranFailure,


  [PlotbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [PlotbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
