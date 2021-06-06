import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BandadelobibaranTypes } from "../actions/bandadelobibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbandadelobibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbandadelobibaranData: action.response,
  });
};
const fetchallbandadelobibaranFailure = (state, action) => {
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
        [BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_REQUEST]: fetchallbandadelobibaranRequest,
        [BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_SUCCESS]: fetchallbandadelobibaranSuccess,
        [BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_FAILURE]: fetchallbandadelobibaranFailure, 



        [BandadelobibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
        [BandadelobibaranTypes.CLEAR_REQUEST]: clearRequest,
      });
      
             