import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BipatbibaranTypes } from "../actions/bipatbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

//----------- paherobibaran
const fetchallpaherobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallpaherobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allpaherobibaranData: action.response,
  });
};
const fetchallpaherobibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchpaherobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchpaherobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    paherobibaranData: action.response,
  });
};
const fetchpaherobibaranFailure = (state, action) => {
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
  [BipatbibaranTypes.FETCHALLPAHEROBIBARAN_REQUEST]: fetchallpaherobibaranRequest,
  [BipatbibaranTypes.FETCHALLPAHEROBIBARAN_SUCCESS]: fetchallpaherobibaranSuccess,
  [BipatbibaranTypes.FETCHALLPAHEROBIBARAN_FAILURE]: fetchallpaherobibaranFailure,

  [BipatbibaranTypes.FETCHPAHEROBIBARAN_REQUEST]: fetchpaherobibaranRequest,
  [BipatbibaranTypes.FETCHPAHEROBIBARAN_SUCCESS]: fetchpaherobibaranSuccess,
  [BipatbibaranTypes.FETCHPAHEROBIBARAN_FAILURE]: fetchpaherobibaranFailure,

  [BipatbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BipatbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
