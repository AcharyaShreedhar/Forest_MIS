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


const fetchbandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

  const fetchbandadelobibaranSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    bandadelobibaranData: action.response,
  });
};
const fetchbandadelobibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add bandadelobibaran
const addbandadelobibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbandadelobibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbandadelobibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update Bandadelobibaran
const updatebandadelobibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatebandadelobibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatebandadelobibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete Bandadelobibaran
const deletebandadelobibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletebandadelobibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletebandadelobibaranFailure = (state, action) =>
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
        [BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_REQUEST]: fetchallbandadelobibaranRequest,
        [BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_SUCCESS]: fetchallbandadelobibaranSuccess,
        [BandadelobibaranTypes.FETCHALLBANDADELOBIBARAN_FAILURE]: fetchallbandadelobibaranFailure, 

        [BandadelobibaranTypes.FETCHBANDADELOBIBARAN_REQUEST]: fetchbandadelobibaranRequest,
        [BandadelobibaranTypes.FETCHBANDADELOBIBARAN_SUCCESS]: fetchbandadelobibaranSuccess,
        [BandadelobibaranTypes.FETCHBANDADELOBIBARAN_FAILURE]: fetchbandadelobibaranFailure, 


        [BandadelobibaranTypes.ADDBANDADELOBIBARAN_REQUEST]: addbandadelobibaranRequest,
        [BandadelobibaranTypes.ADDBANDADELOBIBARAN_SUCCESS]: addbandadelobibaranSuccess,
        [BandadelobibaranTypes.ADDBANDADELOBIBARAN_FAILURE]: addbandadelobibaranFailure, 


        [BandadelobibaranTypes.UPDATEBANDADELOBIBARAN_REQUEST]: updatebandadelobibaranRequest,
        [BandadelobibaranTypes.UPDATEBANDADELOBIBARAN_SUCCESS]: updatebandadelobibaranSuccess,
        [BandadelobibaranTypes.UPDATEBANDADELOBIBARAN_FAILURE]: updatebandadelobibaranFailure, 

        [BandadelobibaranTypes.DELETEBANDADELOBIBARAN_REQUEST]: deletebandadelobibaranRequest,
        [BandadelobibaranTypes.DELETEBANDADELOBIBARAN_SUCCESS]: deletebandadelobibaranSuccess,
        [BandadelobibaranTypes.DELETEBANDADELOBIBARAN_FAILURE]: deletebandadelobibaranFailure, 
        

        [BandadelobibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
        [BandadelobibaranTypes.CLEAR_REQUEST]: clearRequest,
      });
      
             