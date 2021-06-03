import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BanbibaranTypes } from "../actions/banbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallsamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallsamudayikbanbibaranSuccess = (state, action) => {
  console.log("reducer", action.response);
  return state.merge({
    ...state,
    status: "done",
    allsamudayikbanbibaranData: action.response,
  });
};
const fetchallsamudayikbanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchsamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

  const fetchsamudayikbanbibaranSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    samudayikbanbibaranData: action.response,
  });
};
const fetchsamudayikbanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchalldharmikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchalldharmikbanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alldharmikbanbibaranData: action.response,
  });
};
const fetchalldharmikbanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchdharmikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

  const fetchdharmikbanbibaranSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    dharmikbanbibaranData: action.response,
  });
};
const fetchdharmikbanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchallkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallkabuliyatibanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allkabuliyatibanbibaranData: action.response,
  });
};
const fetchallkabuliyatibanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};





const fetchallnijibanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallnijibanbibaranSuccess = (state, action) => {
  console.log("reducer", action.response);
  return state.merge({
    ...state,
    status: "done",
    allnijibanbibaranData: action.response,
  });
};
const fetchallnijibanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const fetchkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

  const fetchkabuliyatibanbibaranSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    kabuliyatibanbibaranData: action.response,
  });
};
const fetchkabuliyatibanbibaranFailure = (state, action) => {
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
  [BanbibaranTypes.FETCHALLSAMUDAYIKBANBIBARAN_REQUEST]: fetchallsamudayikbanbibaranRequest,
  [BanbibaranTypes.FETCHALLSAMUDAYIKBANBIBARAN_SUCCESS]: fetchallsamudayikbanbibaranSuccess,
  [BanbibaranTypes.FETCHALLSAMUDAYIKBANBIBARAN_FAILURE]: fetchallsamudayikbanbibaranFailure,

  [BanbibaranTypes.FETCHSAMUDAYIKBANBIBARAN_REQUEST]: fetchsamudayikbanbibaranRequest,
  [BanbibaranTypes.FETCHSAMUDAYIKBANBIBARAN_SUCCESS]: fetchsamudayikbanbibaranSuccess,
  [BanbibaranTypes.FETCHSAMUDAYIKBANBIBARAN_FAILURE]: fetchsamudayikbanbibaranFailure,


  [BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_REQUEST]: fetchalldharmikbanbibaranRequest,
  [BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_SUCCESS]: fetchalldharmikbanbibaranSuccess,
  [BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_FAILURE]: fetchalldharmikbanbibaranFailure,

  [BanbibaranTypes.FETCHDHARMIKBANBIBARAN_REQUEST]: fetchdharmikbanbibaranRequest,
  [BanbibaranTypes.FETCHDHARMIKBANBIBARAN_SUCCESS]: fetchdharmikbanbibaranSuccess,
  [BanbibaranTypes.FETCHDHARMIKBANBIBARAN_FAILURE]: fetchdharmikbanbibaranFailure,

  [BanbibaranTypes.FETCHALLNIJIBANBIBARAN_REQUEST]: fetchallnijibanbibaranRequest,
  [BanbibaranTypes.FETCHALLNIJIBANBIBARAN_SUCCESS]: fetchallnijibanbibaranSuccess,
  [BanbibaranTypes.FETCHALLNIJIBANBIBARAN_FAILURE]: fetchallnijibanbibaranFailure,
  
  [BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_REQUEST]: fetchallkabuliyatibanbibaranRequest,
  [BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_SUCCESS]: fetchallkabuliyatibanbibaranSuccess,
  [BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_FAILURE]: fetchallkabuliyatibanbibaranFailure,

  [BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_REQUEST]: fetchkabuliyatibanbibaranRequest,
  [BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_SUCCESS]: fetchkabuliyatibanbibaranSuccess,
  [BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_FAILURE]: fetchkabuliyatibanbibaranFailure,



  [BanbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
