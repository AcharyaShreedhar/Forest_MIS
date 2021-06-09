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

//Add samudayikbanbibaran
const addsamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addsamudayikbanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addsamudayikbanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update Samudayikbanbibaran
const updatesamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatesamudayikbanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatesamudayikbanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete Samudayikbanbibaran
const deletesamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletesamudayikbanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletesamudayikbanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });



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

//Add dharmikbanbibaran
const adddharmikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const adddharmikbanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const adddharmikbanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


  //Update Dharmikbanbibaran
const updatedharmikbanbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatedharmikbanbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatedharmikbanbibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//Delete Dharmikbanbibaran
const deletedharmikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletedharmikbanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletedharmikbanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

  

const fetchallnijibanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

const fetchallnijibanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allnijibanbibaranData: action.response,
  });
};
const fetchallnijibanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};



const fetchnijibanbibaranRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchnijibanbibaranSuccess = (state, action) => {
  console.log("reducer", action.response);
  return state.merge({
    ...state,
    status: "done",
    nijibanbibaranData: action.response,
  });
};
const fetchnijibanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add nijibanbibaran
const addnijibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addnijibanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addnijibanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


  //Update Nijiban
const updatenijibanbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatenijibanbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatenijibanbibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete Nijibanbibaran
const deletenijibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletenijibanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletenijibanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


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


//Add kabuliyatibanbibaran
const addkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addkabuliyatibanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addkabuliyatibanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update Kabuliyatiban
const updatekabuliyatibanbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatekabuliyatibanbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatekabuliyatibanbibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete Kabuliyatiban
const deletekabuliyatibanbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletekabuliyatibanbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletekabuliyatibanbibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });


const fetchallnabikarankaryayojanaRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallnabikarankaryayojanaSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allnabikarankaryayojanaData: action.response,
  });
};
const fetchallnabikarankaryayojanaFailure = (state, action) => {
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

  [BanbibaranTypes.ADDSAMUDAYIKBANBIBARAN_REQUEST]: addsamudayikbanbibaranRequest,
  [BanbibaranTypes.ADDSAMUDAYIKBANBIBARAN_SUCCESS]: addsamudayikbanbibaranSuccess,
  [BanbibaranTypes.ADDSAMUDAYIKBANBIBARAN_FAILURE]: addsamudayikbanbibaranFailure,

  [BanbibaranTypes.UPDATESAMUDAYIKBANBIBARAN_REQUEST]: updatesamudayikbanbibaranRequest,
  [BanbibaranTypes.UPDATESAMUDAYIKBANBIBARAN_SUCCESS]: updatesamudayikbanbibaranSuccess,
  [BanbibaranTypes.UPDATESAMUDAYIKBANBIBARAN_FAILURE]: updatesamudayikbanbibaranFailure,

  [BanbibaranTypes.DELETESAMUDAYIKBANBIBARAN_REQUEST]: deletesamudayikbanbibaranRequest,
  [BanbibaranTypes.DELETESAMUDAYIKBANBIBARAN_SUCCESS]: deletesamudayikbanbibaranSuccess,
  [BanbibaranTypes.DELETESAMUDAYIKBANBIBARAN_FAILURE]: deletesamudayikbanbibaranFailure,

  [BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_REQUEST]: fetchalldharmikbanbibaranRequest,
  [BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_SUCCESS]: fetchalldharmikbanbibaranSuccess,
  [BanbibaranTypes.FETCHALLDHARMIKBANBIBARAN_FAILURE]: fetchalldharmikbanbibaranFailure,

  [BanbibaranTypes.FETCHDHARMIKBANBIBARAN_REQUEST]: fetchdharmikbanbibaranRequest,
  [BanbibaranTypes.FETCHDHARMIKBANBIBARAN_SUCCESS]: fetchdharmikbanbibaranSuccess,
  [BanbibaranTypes.FETCHDHARMIKBANBIBARAN_FAILURE]: fetchdharmikbanbibaranFailure,

  [BanbibaranTypes.ADDDHARMIKBANBIBARAN_REQUEST]: adddharmikbanbibaranRequest,
  [BanbibaranTypes.ADDDHARMIKBANBIBARAN_SUCCESS]: adddharmikbanbibaranSuccess,
  [BanbibaranTypes.ADDDHARMIKBANBIBARAN_FAILURE]: adddharmikbanbibaranFailure,

  [BanbibaranTypes.UPDATEDHARMIKBANBIBARAN_REQUEST]: updatedharmikbanbibaranRequest,
  [BanbibaranTypes.UPDATEDHARMIKBANBIBARAN_SUCCESS]: updatedharmikbanbibaranSuccess,
  [BanbibaranTypes.UPDATEDHARMIKBANBIBARAN_FAILURE]: updatedharmikbanbibaranFailure,

  [BanbibaranTypes.DELETEDHARMIKBANBIBARAN_REQUEST]: deletedharmikbanbibaranRequest,
  [BanbibaranTypes.DELETEDHARMIKBANBIBARAN_SUCCESS]: deletedharmikbanbibaranSuccess,
  [BanbibaranTypes.DELETEDHARMIKBANBIBARAN_FAILURE]: deletedharmikbanbibaranFailure,

  [BanbibaranTypes.FETCHALLNIJIBANBIBARAN_REQUEST]: fetchallnijibanbibaranRequest,
  [BanbibaranTypes.FETCHALLNIJIBANBIBARAN_SUCCESS]: fetchallnijibanbibaranSuccess,
  [BanbibaranTypes.FETCHALLNIJIBANBIBARAN_FAILURE]: fetchallnijibanbibaranFailure,

  [BanbibaranTypes.FETCHNIJIBANBIBARAN_REQUEST]: fetchnijibanbibaranRequest,
  [BanbibaranTypes.FETCHNIJIBANBIBARAN_SUCCESS]: fetchnijibanbibaranSuccess,
  [BanbibaranTypes.FETCHNIJIBANBIBARAN_FAILURE]: fetchnijibanbibaranFailure,

  [BanbibaranTypes.ADDNIJIBANBIBARAN_REQUEST]: addnijibanbibaranRequest,
  [BanbibaranTypes.ADDNIJIBANBIBARAN_SUCCESS]: addnijibanbibaranSuccess,
  [BanbibaranTypes.ADDNIJIBANBIBARAN_FAILURE]: addnijibanbibaranFailure,

  [BanbibaranTypes.UPDATENIJIBANBIBARAN_REQUEST]: updatenijibanbibaranRequest,
  [BanbibaranTypes.UPDATENIJIBANBIBARAN_SUCCESS]: updatenijibanbibaranSuccess,
  [BanbibaranTypes.UPDATENIJIBANBIBARAN_FAILURE]: updatenijibanbibaranFailure,

  [BanbibaranTypes.DELETENIJIBANBIBARAN_REQUEST]: deletenijibanbibaranRequest,
  [BanbibaranTypes.DELETENIJIBANBIBARAN_SUCCESS]: deletenijibanbibaranSuccess,
  [BanbibaranTypes.DELETENIJIBANBIBARAN_FAILURE]: deletenijibanbibaranFailure,

  [BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_REQUEST]: fetchallkabuliyatibanbibaranRequest,
  [BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_SUCCESS]: fetchallkabuliyatibanbibaranSuccess,
  [BanbibaranTypes.FETCHALLKABULIYATIBANBIBARAN_FAILURE]: fetchallkabuliyatibanbibaranFailure,

  [BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_REQUEST]: fetchkabuliyatibanbibaranRequest,
  [BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_SUCCESS]: fetchkabuliyatibanbibaranSuccess,
  [BanbibaranTypes.FETCHKABULIYATIBANBIBARAN_FAILURE]: fetchkabuliyatibanbibaranFailure,

  [BanbibaranTypes.ADDKABULIYATIBANBIBARAN_REQUEST]: addkabuliyatibanbibaranRequest,
  [BanbibaranTypes.ADDKABULIYATIBANBIBARAN_SUCCESS]: addkabuliyatibanbibaranSuccess,
  [BanbibaranTypes.ADDKABULIYATIBANBIBARAN_FAILURE]: addkabuliyatibanbibaranFailure,

  [BanbibaranTypes.UPDATEKABULIYATIBANBIBARAN_REQUEST]: updatekabuliyatibanbibaranRequest,
  [BanbibaranTypes.UPDATEKABULIYATIBANBIBARAN_SUCCESS]: updatekabuliyatibanbibaranSuccess,
  [BanbibaranTypes.UPDATEKABULIYATIBANBIBARAN_FAILURE]: updatekabuliyatibanbibaranFailure,

  [BanbibaranTypes.DELETEKABULIYATIBANBIBARAN_REQUEST]: deletekabuliyatibanbibaranRequest,
  [BanbibaranTypes.DELETEKABULIYATIBANBIBARAN_SUCCESS]: deletekabuliyatibanbibaranSuccess,
  [BanbibaranTypes.DELETEKABULIYATIBANBIBARAN_FAILURE]: deletekabuliyatibanbibaranFailure,

  [BanbibaranTypes.FETCHALLNABIKARANKARYAYOJANA_REQUEST]: fetchallnabikarankaryayojanaRequest,
  [BanbibaranTypes.FETCHALLNABIKARANKARYAYOJANA_SUCCESS]: fetchallnabikarankaryayojanaSuccess,
  [BanbibaranTypes.FETCHALLNABIKARANKARYAYOJANA_FAILURE]: fetchallnabikarankaryayojanaFailure,


  [BanbibaranTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BanbibaranTypes.CLEAR_REQUEST]: clearRequest,
});
