import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import {KaryabibaranTypes } from "../actions/karyabibaran";

const initialState = Immutable({
  status: "",
});

const fetchallsamajikkaryabibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallsamajikkaryabibaranSuccess = (state, action) => {

  return state.merge({
    ...state,
    status: "done",
    allsamajikkaryabibaranData: action.response,
  });
};
const fetchallsamajikkaryabibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchsamajikkaryabibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchsamajikkaryabibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    samajikkaryabibaranData: action.response,
  });
};
const fetchsamajikkaryabibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add samajikkaryabibaran
const addsamajikkaryabibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addsamajikkaryabibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
  const addsamajikkaryabibaranFailure = (state, action) =>
    state.merge({ ...state, status: "error" });

 //Update samajikkaryabibaran
const updatesamajikkaryabibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatesamajikkaryabibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatesamajikkaryabibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//Delete samajikkaryabibaran
const deletesamajikkaryabibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletesamajikkaryabibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletesamajikkaryabibaranFailure = (state, action) =>
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
      [KaryabibaranTypes.FETCHALLSAMAJIKKARYABIBARAN_REQUEST]: fetchallsamajikkaryabibaranRequest,
      [KaryabibaranTypes.FETCHALLSAMAJIKKARYABIBARAN_SUCCESS]: fetchallsamajikkaryabibaranSuccess,
      [KaryabibaranTypes.FETCHALLSAMAJIKKARYABIBARAN_FAILURE]: fetchallsamajikkaryabibaranFailure,

      [KaryabibaranTypes.FETCHSAMAJIKKARYABIBARAN_REQUEST]: fetchsamajikkaryabibaranRequest,
      [KaryabibaranTypes.FETCHSAMAJIKKARYABIBARAN_SUCCESS]: fetchsamajikkaryabibaranSuccess,
      [KaryabibaranTypes.FETCHSAMAJIKKARYABIBARAN_FAILURE]: fetchsamajikkaryabibaranFailure,

      [KaryabibaranTypes.ADDSAMAJIKKARYABIBARAN_REQUEST]: addsamajikkaryabibaranRequest,
      [KaryabibaranTypes.ADDSAMAJIKKARYABIBARAN_SUCCESS]: addsamajikkaryabibaranSuccess,
      [KaryabibaranTypes.ADDSAMAJIKKARYABIBARAN_FAILURE]: addsamajikkaryabibaranFailure,

      [KaryabibaranTypes.UPDATESAMAJIKKARYABIBARAN_REQUEST]: updatesamajikkaryabibaranRequest,
      [KaryabibaranTypes.UPDATESAMAJIKKARYABIBARAN_SUCCESS]: updatesamajikkaryabibaranSuccess,
      [KaryabibaranTypes.UPDATESAMAJIKKARYABIBARAN_FAILURE]: updatesamajikkaryabibaranFailure,

      [KaryabibaranTypes.DELETESAMAJIKKARYABIBARAN_REQUEST]: deletesamajikkaryabibaranRequest,
      [KaryabibaranTypes.DELETESAMAJIKKARYABIBARAN_SUCCESS]: deletesamajikkaryabibaranSuccess,
      [KaryabibaranTypes.DELETESAMAJIKKARYABIBARAN_FAILURE]: deletesamajikkaryabibaranFailure,


      [KaryabibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
      [KaryabibaranTypes.CLEAR_REQUEST]: clearRequest,
  });
  