import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BanbibaranTypes } from "../actions/banbibaran";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbaramaditchijbastuRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallbaramaditchijbastuSuccess = (state, action) => {
  console.log("reducer", action.response);
  return state.merge({
    ...state,
    status: "done",
    allbaramaditchijbastuData: action.response,
  });
};
const fetchallbaramaditchijbastuFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbaramaditchijbastuRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

const fetchbaramaditchijbastuSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    baramaditchijbastuData: action.response,
  });
};
const fetchbaramaditchijbastuFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//add baramaditchijbastu
const addbaramaditchijbastuRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbaramaditchijbastuSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbaramaditchijbastuFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//update baramaditchijbastu
const updatebaramaditchijbastuRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatebaramaditchijbastuSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatebaramaditchijbastuFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//----------delete baramaditchijbastu
const deletebaramaditchijbastuRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletebaramaditchijbastuSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletebaramaditchijbastuFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//------------banxetraanyaprayojan
const fetchallbanxetraanyaprayojanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallbanxetraanyaprayojanSuccess = (state, action) => {
  console.log("reducer", action.response);
  return state.merge({
    ...state,
    status: "done",
    allbanxetraanyaprayojanData: action.response,
  });
};
const fetchallbanxetraanyaprayojanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbanxetraanyaprayojanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

const fetchbanxetraanyaprayojanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    banxetraanyaprayojanData: action.response,
  });
};
const fetchbanxetraanyaprayojanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//------------ add banxetraanyaprayojan
const addbanxetraanyaprayojanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbanxetraanyaprayojanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbanxetraanyaprayojanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//-------------- update banxetraanyaprayojan
const updatebanxetraanyaprayojanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatebanxetraanyaprayojanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatebanxetraanyaprayojanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//--------------- delete banxetraanyaprayojan
const deletebanxetraanyaprayojanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletebanxetraanyaprayojanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletebanxetraanyaprayojanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });  

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


  //uddhyam bibaran
  const fetchalluddhyambibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchalluddhyambibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alluddhyambibaranData: action.response,
  });
};
const fetchalluddhyambibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchuddhyambibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchuddhyambibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    uddhyambibaranData: action.response,
  });
};
const fetchuddhyambibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add uddhyambibaran
const adduddhyambibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const adduddhyambibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const adduddhyambibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//bachat bibaran
const fetchallbachatbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbachatbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbachatbibaranData: action.response,
  });
};
const fetchallbachatbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbachatbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchbachatbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    bachatbibaranData: action.response,
  });
};
const fetchbachatbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const addbachatbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbachatbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbachatbibaranFailure = (state, action) =>
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
  [BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_REQUEST]: fetchallbaramaditchijbastuRequest,
  [BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_SUCCESS]: fetchallbaramaditchijbastuSuccess,
  [BanbibaranTypes.FETCHALLBARAMADITCHIJBASTU_FAILURE]: fetchallbaramaditchijbastuFailure,

  [BanbibaranTypes.FETCHBARAMADITCHIJBASTU_REQUEST]: fetchbaramaditchijbastuRequest,
  [BanbibaranTypes.FETCHBARAMADITCHIJBASTU_SUCCESS]: fetchbaramaditchijbastuSuccess,
  [BanbibaranTypes.FETCHBARAMADITCHIJBASTU_FAILURE]: fetchbaramaditchijbastuFailure,

  [BanbibaranTypes.ADDBARAMADITCHIJBASTU_REQUEST]: addbaramaditchijbastuRequest,
  [BanbibaranTypes.ADDBARAMADITCHIJBASTU_SUCCESS]: addbaramaditchijbastuSuccess,
  [BanbibaranTypes.ADDBARAMADITCHIJBASTU_FAILURE]: addbaramaditchijbastuFailure,

  [BanbibaranTypes.UPDATEBARAMADITCHIJBASTU_REQUEST]: updatebaramaditchijbastuRequest,
  [BanbibaranTypes.UPDATEBARAMADITCHIJBASTU_SUCCESS]: updatebaramaditchijbastuSuccess,
  [BanbibaranTypes.UPDATEBARAMADITCHIJBASTU_FAILURE]: updatebaramaditchijbastuFailure,

  [BanbibaranTypes.DELETEBARAMADITCHIJBASTU_REQUEST]: deletebaramaditchijbastuRequest,
  [BanbibaranTypes.DELETEBARAMADITCHIJBASTU_SUCCESS]: deletebaramaditchijbastuSuccess,
  [BanbibaranTypes.DELETEBARAMADITCHIJBASTU_FAILURE]: deletebaramaditchijbastuFailure,

  [BanbibaranTypes.FETCHALLBANXETRAANYAPRAYOJAN_REQUEST]: fetchallbanxetraanyaprayojanRequest,
  [BanbibaranTypes.FETCHALLBANXETRAANYAPRAYOJAN_SUCCESS]: fetchallbanxetraanyaprayojanSuccess,
  [BanbibaranTypes.FETCHALLBANXETRAANYAPRAYOJAN_FAILURE]: fetchallbanxetraanyaprayojanFailure,

  [BanbibaranTypes.FETCHBANXETRAANYAPRAYOJAN_REQUEST]: fetchbanxetraanyaprayojanRequest,
  [BanbibaranTypes.FETCHBANXETRAANYAPRAYOJAN_SUCCESS]: fetchbanxetraanyaprayojanSuccess,
  [BanbibaranTypes.FETCHBANXETRAANYAPRAYOJAN_FAILURE]: fetchbanxetraanyaprayojanFailure,

  [BanbibaranTypes.ADDBANXETRAANYAPRAYOJAN_REQUEST]: addbanxetraanyaprayojanRequest,
  [BanbibaranTypes.ADDBANXETRAANYAPRAYOJAN_SUCCESS]: addbanxetraanyaprayojanSuccess,
  [BanbibaranTypes.ADDBANXETRAANYAPRAYOJAN_FAILURE]: addbanxetraanyaprayojanFailure,

  [BanbibaranTypes.UPDATEBANXETRAANYAPRAYOJAN_REQUEST]: updatebanxetraanyaprayojanRequest,
  [BanbibaranTypes.UPDATEBANXETRAANYAPRAYOJAN_SUCCESS]: updatebanxetraanyaprayojanSuccess,
  [BanbibaranTypes.UPDATEBANXETRAANYAPRAYOJAN_FAILURE]: updatebanxetraanyaprayojanFailure,

  [BanbibaranTypes.DELETEBANXETRAANYAPRAYOJAN_REQUEST]: deletebanxetraanyaprayojanRequest,
  [BanbibaranTypes.DELETEBANXETRAANYAPRAYOJAN_SUCCESS]: deletebanxetraanyaprayojanSuccess,
  [BanbibaranTypes.DELETEBANXETRAANYAPRAYOJAN_FAILURE]: deletebanxetraanyaprayojanFailure,

  [BanbibaranTypes.FETCHALLPLOTBIBARAN_REQUEST]: fetchallplotbibaranRequest,
  [BanbibaranTypes.FETCHALLPLOTBIBARAN_SUCCESS]: fetchallplotbibaranSuccess,
  [BanbibaranTypes.FETCHALLPLOTBIBARAN_FAILURE]: fetchallplotbibaranFailure,

  [BanbibaranTypes.FETCHPLOTBIBARAN_REQUEST]: fetchplotbibaranRequest,
  [BanbibaranTypes.FETCHPLOTBIBARAN_SUCCESS]: fetchplotbibaranSuccess,
  [BanbibaranTypes.FETCHPLOTBIBARAN_FAILURE]: fetchplotbibaranFailure,

  [BanbibaranTypes.ADDPLOTBIBARAN_REQUEST]: addplotbibaranRequest,
  [BanbibaranTypes.ADDPLOTBIBARAN_SUCCESS]: addplotbibaranSuccess,
  [BanbibaranTypes.ADDPLOTBIBARAN_FAILURE]: addplotbibaranFailure,

  [BanbibaranTypes.UPDATEPLOTBIBARAN_REQUEST]: updateplotbibaranRequest,
  [BanbibaranTypes.UPDATEPLOTBIBARAN_SUCCESS]: updateplotbibaranSuccess,
  [BanbibaranTypes.UPDATEPLOTBIBARAN_FAILURE]: updateplotbibaranFailure,

  [BanbibaranTypes.DELETEPLOTBIBARAN_REQUEST]: deleteplotbibaranRequest,
  [BanbibaranTypes.DELETEPLOTBIBARAN_SUCCESS]: deleteplotbibaranSuccess,
  [BanbibaranTypes.DELETEPLOTBIBARAN_FAILURE]: deleteplotbibaranFailure,

  [BanbibaranTypes.FETCHALLUDDHYAMBIBARAN_REQUEST]: fetchalluddhyambibaranRequest,
  [BanbibaranTypes.FETCHALLUDDHYAMBIBARAN_SUCCESS]: fetchalluddhyambibaranSuccess,
  [BanbibaranTypes.FETCHALLUDDHYAMBIBARAN_FAILURE]: fetchalluddhyambibaranFailure,
  
  [BanbibaranTypes.FETCHUDDHYAMBIBARAN_REQUEST]: fetchuddhyambibaranRequest,
  [BanbibaranTypes.FETCHUDDHYAMBIBARAN_SUCCESS]: fetchuddhyambibaranSuccess,
  [BanbibaranTypes.FETCHUDDHYAMBIBARAN_FAILURE]: fetchuddhyambibaranFailure,

  [BanbibaranTypes.ADDUDDHYAMBIBARAN_REQUEST]: adduddhyambibaranRequest,
  [BanbibaranTypes.ADDUDDHYAMBIBARAN_SUCCESS]: adduddhyambibaranSuccess,
  [BanbibaranTypes.ADDUDDHYAMBIBARAN_FAILURE]: adduddhyambibaranFailure,

  [BanbibaranTypes.FETCHALLBACHATBIBARAN_REQUEST]: fetchallbachatbibaranRequest,
  [BanbibaranTypes.FETCHALLBACHATBIBARAN_SUCCESS]: fetchallbachatbibaranSuccess,
  [BanbibaranTypes.FETCHALLBACHATBIBARAN_FAILURE]: fetchallbachatbibaranFailure,

  [BanbibaranTypes.FETCHBACHATBIBARAN_REQUEST]: fetchbachatbibaranRequest,
  [BanbibaranTypes.FETCHBACHATBIBARAN_SUCCESS]: fetchbachatbibaranSuccess,
  [BanbibaranTypes.FETCHBACHATBIBARAN_FAILURE]: fetchbachatbibaranFailure,

  [BanbibaranTypes.ADDBACHATBIBARAN_REQUEST]: addbachatbibaranRequest,
  [BanbibaranTypes.ADDBACHATBIBARAN_SUCCESS]: addbachatbibaranSuccess,
  [BanbibaranTypes.ADDBACHATBIBARAN_FAILURE]: addbachatbibaranFailure,

  [BanbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
