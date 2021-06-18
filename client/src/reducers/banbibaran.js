import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BanbibaranTypes } from "../actions/banbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbaramaditchijbastuRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbaramaditchijbastuSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbaramaditchijbastuData: action.response,
  });
};
const fetchallbaramaditchijbastuFailure = (state, action) => {
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
        [BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_REQUEST]: fetchallbaramaditchijbastuRequest,
        [BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_SUCCESS]: fetchallbaramaditchijbastuSuccess,
        [BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_FAILURE]: fetchallbaramaditchijbastuFailure, 

        [BanbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
        [BanbibaranTypes.CLEAR_REQUEST]: clearRequest,
      });