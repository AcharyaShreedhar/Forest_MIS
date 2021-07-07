import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BipatbibaranTypes } from "../actions/bipatbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

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

  [BipatbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BipatbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
