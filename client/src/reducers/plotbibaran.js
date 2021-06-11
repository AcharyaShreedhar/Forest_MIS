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

//Add plotbibaran
const addplotbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addplotbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addplotbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update plotbibaran
const updateplotbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updateplotbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updateplotbibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete plotbibaran
const deleteplotbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deleteplotbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deleteplotbibaranFailure = (state, action) =>
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
  [PlotbibaranTypes.FETCHALLPLOTBIBARAN_REQUEST]: fetchallplotbibaranRequest,
  [PlotbibaranTypes.FETCHALLPLOTBIBARAN_SUCCESS]: fetchallplotbibaranSuccess,
  [PlotbibaranTypes.FETCHALLPLOTBIBARAN_FAILURE]: fetchallplotbibaranFailure,

  [PlotbibaranTypes.FETCHPLOTBIBARAN_REQUEST]: fetchplotbibaranRequest,
  [PlotbibaranTypes.FETCHPLOTBIBARAN_SUCCESS]: fetchplotbibaranSuccess,
  [PlotbibaranTypes.FETCHPLOTBIBARAN_FAILURE]: fetchplotbibaranFailure,

  [PlotbibaranTypes.ADDPLOTBIBARAN_REQUEST]: addplotbibaranRequest,
  [PlotbibaranTypes.ADDPLOTBIBARAN_SUCCESS]: addplotbibaranSuccess,
  [PlotbibaranTypes.ADDPLOTBIBARAN_FAILURE]: addplotbibaranFailure,

  [PlotbibaranTypes.UPDATEPLOTBIBARAN_REQUEST]: updateplotbibaranRequest,
  [PlotbibaranTypes.UPDATEPLOTBIBARAN_SUCCESS]: updateplotbibaranSuccess,
  [PlotbibaranTypes.UPDATEPLOTBIBARAN_FAILURE]: updateplotbibaranFailure,

  [PlotbibaranTypes.DELETEPLOTBIBARAN_REQUEST]: deleteplotbibaranRequest,
  [PlotbibaranTypes.DELETEPLOTBIBARAN_SUCCESS]: deleteplotbibaranSuccess,
  [PlotbibaranTypes.DELETEPLOTBIBARAN_FAILURE]: deleteplotbibaranFailure,


  [PlotbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [PlotbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
