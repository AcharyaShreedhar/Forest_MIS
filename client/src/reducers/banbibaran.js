import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { banbibaranTypes } from "../actions/app";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchsamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchsamudayikbanbibaranSuccess = (state, action) => {
  const { token, user } = action.response;

  return state.merge({
    ...state,
    status: "done",
    samudayikbanbibaranData: action.response,
  });
};
const fetchsamudayikbanbibaranFailure = (state, action) => {
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
  [AppTypes.FETCHSAMUDAYIKBANBIBARAN_REQUEST]: fetchsamudayikbanbibaranRequest,
  [AppTypes.FETCHSAMUDAYIKBANBIBARAN_SUCCESS]: fetchsamudayikbanbibaranSuccess,
  [AppTypes.FETCHSAMUDAYIKBANBIBARAN_FAILURE]: fetchsamudayikbanbibaranFailure,

  [AppTypes.LOCATIONS_REQUEST]: locationsRequest,
  [AppTypes.CLEAR_REQUEST]: clearRequest,
});
