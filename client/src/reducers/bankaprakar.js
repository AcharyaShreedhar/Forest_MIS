import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BankaprakarTypes } from "../actions/bankaprakar";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallsamudayikbanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallsamudayikbanbibaranSuccess = (state, action) => {
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
  state.merge({ ...state, status: "pending" });

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
  state.merge({ ...state, status: "pending" });
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
  state.merge({ ...state, status: "pending" });

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
  state.merge({ ...state, status: "pending" });

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
  state.merge({ ...state, status: "pending" });
const fetchnijibanbibaranSuccess = (state, action) => {
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
  state.merge({ ...state, status: "pending" });
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
  state.merge({ ...state, status: "pending" });

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
  state.merge({ ...state, status: "pending" });
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

const fetchnabikarankaryayojanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchnabikarankaryayojanaSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    nabikarankaryayojanaData: action.response,
  });
};
const fetchnabikarankaryayojanaFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add NabikaranKaryayojana
const addnabikarankaryayojanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addnabikarankaryayojanaSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addnabikarankaryayojanaFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update Nabikarankaryayojana
const updatenabikarankaryayojanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatenabikarankaryayojanaSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatenabikarankaryayojanaFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete Nabikarankaryayojana
const deletenabikarankaryayojanaRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletenabikarankaryayojanaSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletenabikarankaryayojanaFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//chaklabanbibaran
const fetchallchaklabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallchaklabanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allchaklabanbibaranData: action.response,
  });
};
const fetchallchaklabanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchchaklabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchchaklabanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    chaklabanbibaranData: action.response,
  });
};
const fetchchaklabanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add chaklabanbibaran
const addchaklabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addchaklabanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addchaklabanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update chaklabanbibaran
const updatechaklabanbibaranRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatechaklabanbibaranSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatechaklabanbibaranFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//Delete Nijibanbibaran
const deletechaklabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletechaklabanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletechaklabanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//---Consumergroupsdetails
const fetchallconsumergroupdetailsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallconsumergroupdetailsSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allconsumergroupdetailsData: action.response,
  });
};
const fetchallconsumergroupdetailsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchconsumergroupdetailsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

const fetchconsumergroupdetailsSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    consumergroupdetailsData: action.response,
  });
};
const fetchconsumergroupdetailsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};
const addconsumergroupdetailsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addconsumergroupdetailsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addconsumergroupdetailsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

const updateconsumergroupdetailsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updateconsumergroupdetailsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updateconsumergroupdetailsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

const deleteconsumergroupdetailsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deleteconsumergroupdetailsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deleteconsumergroupdetailsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//rastriyabanbibaran
const fetchallrastriyabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallrastriyabanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allrastriyabanbibaranData: action.response,
  });
};
const fetchallrastriyabanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchrastriyabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchrastriyabanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    rastriyabanbibaranData: action.response,
  });
};
const fetchrastriyabanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const addrastriyabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addrastriyabanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addrastriyabanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update rastriyaban
const updaterastriyabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updaterastriyabanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updaterastriyabanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

const deleterastriyabanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deleterastriyabanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deleterastriyabanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//sajhedariban bibarn
const fetchallsajhedaribanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

const fetchallsajhedaribanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allsajhedaribanbibaranData: action.response,
  });
};
const fetchallsajhedaribanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};
const fetchsajhedaribanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchsajhedaribanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    sajhedaribanbibaranData: action.response,
  });
};
const fetchsajhedaribanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const addsajhedaribanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addsajhedaribanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addsajhedaribanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });
  

//commercial kabuliyatibanbiabaran
const fetchallcommercialkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallcommercialkabuliyatibanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allcommercialkabuliyatibanbibaranData: action.response,
  });
};
const fetchallcommercialkabuliyatibanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchcommercialkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchcommercialkabuliyatibanbibaranSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    commercialkabuliyatibanbibaranData: action.response,
  });
};
const fetchcommercialkabuliyatibanbibaranFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const addcommercialkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addcommercialkabuliyatibanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addcommercialkabuliyatibanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

const updatecommercialkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatecommercialkabuliyatibanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatecommercialkabuliyatibanbibaranFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

const deletecommercialkabuliyatibanbibaranRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletecommercialkabuliyatibanbibaranSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletecommercialkabuliyatibanbibaranFailure = (state, action) =>
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
  [BankaprakarTypes.FETCHALLSAMUDAYIKBANBIBARAN_REQUEST]: fetchallsamudayikbanbibaranRequest,
  [BankaprakarTypes.FETCHALLSAMUDAYIKBANBIBARAN_SUCCESS]: fetchallsamudayikbanbibaranSuccess,
  [BankaprakarTypes.FETCHALLSAMUDAYIKBANBIBARAN_FAILURE]: fetchallsamudayikbanbibaranFailure,

  [BankaprakarTypes.FETCHSAMUDAYIKBANBIBARAN_REQUEST]: fetchsamudayikbanbibaranRequest,
  [BankaprakarTypes.FETCHSAMUDAYIKBANBIBARAN_SUCCESS]: fetchsamudayikbanbibaranSuccess,
  [BankaprakarTypes.FETCHSAMUDAYIKBANBIBARAN_FAILURE]: fetchsamudayikbanbibaranFailure,

  [BankaprakarTypes.ADDSAMUDAYIKBANBIBARAN_REQUEST]: addsamudayikbanbibaranRequest,
  [BankaprakarTypes.ADDSAMUDAYIKBANBIBARAN_SUCCESS]: addsamudayikbanbibaranSuccess,
  [BankaprakarTypes.ADDSAMUDAYIKBANBIBARAN_FAILURE]: addsamudayikbanbibaranFailure,

  [BankaprakarTypes.UPDATESAMUDAYIKBANBIBARAN_REQUEST]: updatesamudayikbanbibaranRequest,
  [BankaprakarTypes.UPDATESAMUDAYIKBANBIBARAN_SUCCESS]: updatesamudayikbanbibaranSuccess,
  [BankaprakarTypes.UPDATESAMUDAYIKBANBIBARAN_FAILURE]: updatesamudayikbanbibaranFailure,

  [BankaprakarTypes.DELETESAMUDAYIKBANBIBARAN_REQUEST]: deletesamudayikbanbibaranRequest,
  [BankaprakarTypes.DELETESAMUDAYIKBANBIBARAN_SUCCESS]: deletesamudayikbanbibaranSuccess,
  [BankaprakarTypes.DELETESAMUDAYIKBANBIBARAN_FAILURE]: deletesamudayikbanbibaranFailure,

  [BankaprakarTypes.FETCHALLDHARMIKBANBIBARAN_REQUEST]: fetchalldharmikbanbibaranRequest,
  [BankaprakarTypes.FETCHALLDHARMIKBANBIBARAN_SUCCESS]: fetchalldharmikbanbibaranSuccess,
  [BankaprakarTypes.FETCHALLDHARMIKBANBIBARAN_FAILURE]: fetchalldharmikbanbibaranFailure,

  [BankaprakarTypes.FETCHDHARMIKBANBIBARAN_REQUEST]: fetchdharmikbanbibaranRequest,
  [BankaprakarTypes.FETCHDHARMIKBANBIBARAN_SUCCESS]: fetchdharmikbanbibaranSuccess,
  [BankaprakarTypes.FETCHDHARMIKBANBIBARAN_FAILURE]: fetchdharmikbanbibaranFailure,

  [BankaprakarTypes.ADDDHARMIKBANBIBARAN_REQUEST]: adddharmikbanbibaranRequest,
  [BankaprakarTypes.ADDDHARMIKBANBIBARAN_SUCCESS]: adddharmikbanbibaranSuccess,
  [BankaprakarTypes.ADDDHARMIKBANBIBARAN_FAILURE]: adddharmikbanbibaranFailure,

  [BankaprakarTypes.UPDATEDHARMIKBANBIBARAN_REQUEST]: updatedharmikbanbibaranRequest,
  [BankaprakarTypes.UPDATEDHARMIKBANBIBARAN_SUCCESS]: updatedharmikbanbibaranSuccess,
  [BankaprakarTypes.UPDATEDHARMIKBANBIBARAN_FAILURE]: updatedharmikbanbibaranFailure,

  [BankaprakarTypes.DELETEDHARMIKBANBIBARAN_REQUEST]: deletedharmikbanbibaranRequest,
  [BankaprakarTypes.DELETEDHARMIKBANBIBARAN_SUCCESS]: deletedharmikbanbibaranSuccess,
  [BankaprakarTypes.DELETEDHARMIKBANBIBARAN_FAILURE]: deletedharmikbanbibaranFailure,

  [BankaprakarTypes.FETCHALLNIJIBANBIBARAN_REQUEST]: fetchallnijibanbibaranRequest,
  [BankaprakarTypes.FETCHALLNIJIBANBIBARAN_SUCCESS]: fetchallnijibanbibaranSuccess,
  [BankaprakarTypes.FETCHALLNIJIBANBIBARAN_FAILURE]: fetchallnijibanbibaranFailure,

  [BankaprakarTypes.FETCHNIJIBANBIBARAN_REQUEST]: fetchnijibanbibaranRequest,
  [BankaprakarTypes.FETCHNIJIBANBIBARAN_SUCCESS]: fetchnijibanbibaranSuccess,
  [BankaprakarTypes.FETCHNIJIBANBIBARAN_FAILURE]: fetchnijibanbibaranFailure,

  [BankaprakarTypes.ADDNIJIBANBIBARAN_REQUEST]: addnijibanbibaranRequest,
  [BankaprakarTypes.ADDNIJIBANBIBARAN_SUCCESS]: addnijibanbibaranSuccess,
  [BankaprakarTypes.ADDNIJIBANBIBARAN_FAILURE]: addnijibanbibaranFailure,

  [BankaprakarTypes.UPDATENIJIBANBIBARAN_REQUEST]: updatenijibanbibaranRequest,
  [BankaprakarTypes.UPDATENIJIBANBIBARAN_SUCCESS]: updatenijibanbibaranSuccess,
  [BankaprakarTypes.UPDATENIJIBANBIBARAN_FAILURE]: updatenijibanbibaranFailure,

  [BankaprakarTypes.DELETENIJIBANBIBARAN_REQUEST]: deletenijibanbibaranRequest,
  [BankaprakarTypes.DELETENIJIBANBIBARAN_SUCCESS]: deletenijibanbibaranSuccess,
  [BankaprakarTypes.DELETENIJIBANBIBARAN_FAILURE]: deletenijibanbibaranFailure,

  [BankaprakarTypes.FETCHALLKABULIYATIBANBIBARAN_REQUEST]: fetchallkabuliyatibanbibaranRequest,
  [BankaprakarTypes.FETCHALLKABULIYATIBANBIBARAN_SUCCESS]: fetchallkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.FETCHALLKABULIYATIBANBIBARAN_FAILURE]: fetchallkabuliyatibanbibaranFailure,

  [BankaprakarTypes.FETCHKABULIYATIBANBIBARAN_REQUEST]: fetchkabuliyatibanbibaranRequest,
  [BankaprakarTypes.FETCHKABULIYATIBANBIBARAN_SUCCESS]: fetchkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.FETCHKABULIYATIBANBIBARAN_FAILURE]: fetchkabuliyatibanbibaranFailure,

  [BankaprakarTypes.ADDKABULIYATIBANBIBARAN_REQUEST]: addkabuliyatibanbibaranRequest,
  [BankaprakarTypes.ADDKABULIYATIBANBIBARAN_SUCCESS]: addkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.ADDKABULIYATIBANBIBARAN_FAILURE]: addkabuliyatibanbibaranFailure,

  [BankaprakarTypes.UPDATEKABULIYATIBANBIBARAN_REQUEST]: updatekabuliyatibanbibaranRequest,
  [BankaprakarTypes.UPDATEKABULIYATIBANBIBARAN_SUCCESS]: updatekabuliyatibanbibaranSuccess,
  [BankaprakarTypes.UPDATEKABULIYATIBANBIBARAN_FAILURE]: updatekabuliyatibanbibaranFailure,

  [BankaprakarTypes.DELETEKABULIYATIBANBIBARAN_REQUEST]: deletekabuliyatibanbibaranRequest,
  [BankaprakarTypes.DELETEKABULIYATIBANBIBARAN_SUCCESS]: deletekabuliyatibanbibaranSuccess,
  [BankaprakarTypes.DELETEKABULIYATIBANBIBARAN_FAILURE]: deletekabuliyatibanbibaranFailure,

  [BankaprakarTypes.FETCHALLNABIKARANKARYAYOJANA_REQUEST]: fetchallnabikarankaryayojanaRequest,
  [BankaprakarTypes.FETCHALLNABIKARANKARYAYOJANA_SUCCESS]: fetchallnabikarankaryayojanaSuccess,
  [BankaprakarTypes.FETCHALLNABIKARANKARYAYOJANA_FAILURE]: fetchallnabikarankaryayojanaFailure,

  [BankaprakarTypes.FETCHNABIKARANKARYAYOJANA_REQUEST]: fetchnabikarankaryayojanaRequest,
  [BankaprakarTypes.FETCHNABIKARANKARYAYOJANA_SUCCESS]: fetchnabikarankaryayojanaSuccess,
  [BankaprakarTypes.FETCHNABIKARANKARYAYOJANA_FAILURE]: fetchnabikarankaryayojanaFailure,

  [BankaprakarTypes.ADDNABIKARANKARYAYOJANA_REQUEST]: addnabikarankaryayojanaRequest,
  [BankaprakarTypes.ADDNABIKARANKARYAYOJANA_SUCCESS]: addnabikarankaryayojanaSuccess,
  [BankaprakarTypes.ADDNABIKARANKARYAYOJANA_FAILURE]: addnabikarankaryayojanaFailure,

  [BankaprakarTypes.UPDATENABIKARANKARYAYOJANA_REQUEST]: updatenabikarankaryayojanaRequest,
  [BankaprakarTypes.UPDATENABIKARANKARYAYOJANA_SUCCESS]: updatenabikarankaryayojanaSuccess,
  [BankaprakarTypes.UPDATENABIKARANKARYAYOJANA_FAILURE]: updatenabikarankaryayojanaFailure,

  [BankaprakarTypes.DELETENABIKARANKARYAYOJANA_REQUEST]: deletenabikarankaryayojanaRequest,
  [BankaprakarTypes.DELETENABIKARANKARYAYOJANA_SUCCESS]: deletenabikarankaryayojanaSuccess,
  [BankaprakarTypes.DELETENABIKARANKARYAYOJANA_FAILURE]: deletenabikarankaryayojanaFailure,

  // rastriyabanbibaran
  [BankaprakarTypes.FETCHALLRASTRIYABANBIBARAN_REQUEST]: fetchallrastriyabanbibaranRequest,
  [BankaprakarTypes.FETCHALLRASTRIYABANBIBARAN_SUCCESS]: fetchallrastriyabanbibaranSuccess,
  [BankaprakarTypes.FETCHALLRASTRIYABANBIBARAN_FAILURE]: fetchallrastriyabanbibaranFailure,

  [BankaprakarTypes.FETCHRASTRIYABANBIBARAN_REQUEST]: fetchrastriyabanbibaranRequest,
  [BankaprakarTypes.FETCHRASTRIYABANBIBARAN_SUCCESS]: fetchrastriyabanbibaranSuccess,
  [BankaprakarTypes.FETCHRASTRIYABANBIBARAN_FAILURE]: fetchrastriyabanbibaranFailure,

  [BankaprakarTypes.ADDRASTRIYABANBIBARAN_REQUEST]: addrastriyabanbibaranRequest,
  [BankaprakarTypes.ADDRASTRIYABANBIBARAN_SUCCESS]: addrastriyabanbibaranSuccess,
  [BankaprakarTypes.ADDRASTRIYABANBIBARAN_FAILURE]: addrastriyabanbibaranFailure,

  [BankaprakarTypes.UPDATERASTRIYABANBIBARAN_REQUEST]: updaterastriyabanbibaranRequest,
  [BankaprakarTypes.UPDATERASTRIYABANBIBARAN_SUCCESS]: updaterastriyabanbibaranSuccess,
  [BankaprakarTypes.UPDATERASTRIYABANBIBARAN_FAILURE]: updaterastriyabanbibaranFailure,

  [BankaprakarTypes.DELETERASTRIYABANBIBARAN_REQUEST]: deleterastriyabanbibaranRequest,
  [BankaprakarTypes.DELETERASTRIYABANBIBARAN_SUCCESS]: deleterastriyabanbibaranSuccess,
  [BankaprakarTypes.DELETERASTRIYABANBIBARAN_FAILURE]: deleterastriyabanbibaranFailure,

  // Sajhedaribanbibaran
  [BankaprakarTypes.FETCHALLSAJHEDARIBANBIBARAN_REQUEST]: fetchallsajhedaribanbibaranRequest,
  [BankaprakarTypes.FETCHALLSAJHEDARIBANBIBARAN_SUCCESS]: fetchallsajhedaribanbibaranSuccess,
  [BankaprakarTypes.FETCHALLSAJHEDARIBANBIBARAN_FAILURE]: fetchallsajhedaribanbibaranFailure,

  [BankaprakarTypes.FETCHSAJHEDARIBANBIBARAN_REQUEST]: fetchsajhedaribanbibaranRequest,
  [BankaprakarTypes.FETCHSAJHEDARIBANBIBARAN_SUCCESS]: fetchsajhedaribanbibaranSuccess,
  [BankaprakarTypes.FETCHSAJHEDARIBANBIBARAN_FAILURE]: fetchsajhedaribanbibaranFailure,

  [BankaprakarTypes.ADDSAJHEDARIBANBIBARAN_REQUEST]: addsajhedaribanbibaranRequest,
  [BankaprakarTypes.ADDSAJHEDARIBANBIBARAN_SUCCESS]: addsajhedaribanbibaranSuccess,
  [BankaprakarTypes.ADDSAJHEDARIBANBIBARAN_FAILURE]: addsajhedaribanbibaranFailure,

  //commercialkabuliyatibanbibaran
  [BankaprakarTypes.FETCHALLCOMMERCIALKABULIYATIBANBIBARAN_REQUEST]: fetchallcommercialkabuliyatibanbibaranRequest,
  [BankaprakarTypes.FETCHALLCOMMERCIALKABULIYATIBANBIBARAN_SUCCESS]: fetchallcommercialkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.FETCHALLCOMMERCIALKABULIYATIBANBIBARAN_FAILURE]: fetchallcommercialkabuliyatibanbibaranFailure,

  [BankaprakarTypes.FETCHCOMMERCIALKABULIYATIBANBIBARAN_REQUEST]: fetchcommercialkabuliyatibanbibaranRequest,
  [BankaprakarTypes.FETCHCOMMERCIALKABULIYATIBANBIBARAN_SUCCESS]: fetchcommercialkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.FETCHCOMMERCIALKABULIYATIBANBIBARAN_FAILURE]: fetchcommercialkabuliyatibanbibaranFailure,

  [BankaprakarTypes.ADDCOMMERCIALKABULIYATIBANBIBARAN_REQUEST]: addcommercialkabuliyatibanbibaranRequest,
  [BankaprakarTypes.ADDCOMMERCIALKABULIYATIBANBIBARAN_SUCCESS]: addcommercialkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.ADDCOMMERCIALKABULIYATIBANBIBARAN_FAILURE]: addcommercialkabuliyatibanbibaranFailure,

  [BankaprakarTypes.UPDATECOMMERCIALKABULIYATIBANBIBARAN_REQUEST]: updatecommercialkabuliyatibanbibaranRequest,
  [BankaprakarTypes.UPDATECOMMERCIALKABULIYATIBANBIBARAN_SUCCESS]: updatecommercialkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.UPDATECOMMERCIALKABULIYATIBANBIBARAN_FAILURE]: updatecommercialkabuliyatibanbibaranFailure,

  [BankaprakarTypes.DELETECOMMERCIALKABULIYATIBANBIBARAN_REQUEST]: deletecommercialkabuliyatibanbibaranRequest,
  [BankaprakarTypes.DELETECOMMERCIALKABULIYATIBANBIBARAN_SUCCESS]: deletecommercialkabuliyatibanbibaranSuccess,
  [BankaprakarTypes.DELETECOMMERCIALKABULIYATIBANBIBARAN_FAILURE]: deletecommercialkabuliyatibanbibaranFailure,

  //chaklabanbibaran
  [BankaprakarTypes.FETCHALLCHAKLABANBIBARAN_REQUEST]: fetchallchaklabanbibaranRequest,
  [BankaprakarTypes.FETCHALLCHAKLABANBIBARAN_SUCCESS]: fetchallchaklabanbibaranSuccess,
  [BankaprakarTypes.FETCHALLCHAKLABANBIBARAN_FAILURE]: fetchallchaklabanbibaranFailure,

  [BankaprakarTypes.FETCHCHAKLABANBIBARAN_REQUEST]: fetchchaklabanbibaranRequest,
  [BankaprakarTypes.FETCHCHAKLABANBIBARAN_SUCCESS]: fetchchaklabanbibaranSuccess,
  [BankaprakarTypes.FETCHCHAKLABANBIBARAN_FAILURE]: fetchchaklabanbibaranFailure,

  [BankaprakarTypes.ADDCHAKLABANBIBARAN_REQUEST]: addchaklabanbibaranRequest,
  [BankaprakarTypes.ADDCHAKLABANBIBARAN_SUCCESS]: addchaklabanbibaranSuccess,
  [BankaprakarTypes.ADDCHAKLABANBIBARAN_FAILURE]: addchaklabanbibaranFailure,

  [BankaprakarTypes.UPDATECHAKLABANBIBARAN_REQUEST]: updatechaklabanbibaranRequest,
  [BankaprakarTypes.UPDATECHAKLABANBIBARAN_SUCCESS]: updatechaklabanbibaranSuccess,
  [BankaprakarTypes.UPDATECHAKLABANBIBARAN_FAILURE]: updatechaklabanbibaranFailure,

  [BankaprakarTypes.DELETECHAKLABANBIBARAN_REQUEST]: deletechaklabanbibaranRequest,
  [BankaprakarTypes.DELETECHAKLABANBIBARAN_SUCCESS]: deletechaklabanbibaranSuccess,
  [BankaprakarTypes.DELETECHAKLABANBIBARAN_FAILURE]: deletechaklabanbibaranFailure,

  //------Consumergroup Details
  [BankaprakarTypes.FETCHALLCONSUMERGROUPDETAILS_REQUEST]: fetchallconsumergroupdetailsRequest,
  [BankaprakarTypes.FETCHALLCONSUMERGROUPDETAILS_SUCCESS]: fetchallconsumergroupdetailsSuccess,
  [BankaprakarTypes.FETCHALLCONSUMERGROUPDETAILS_FAILURE]: fetchallconsumergroupdetailsFailure,

  [BankaprakarTypes.FETCHCONSUMERGROUPDETAILS_REQUEST]: fetchconsumergroupdetailsRequest,
  [BankaprakarTypes.FETCHCONSUMERGROUPDETAILS_SUCCESS]: fetchconsumergroupdetailsSuccess,
  [BankaprakarTypes.FETCHCONSUMERGROUPDETAILS_FAILURE]: fetchconsumergroupdetailsFailure,

  [BankaprakarTypes.ADDCONSUMERGROUPDETAILS_REQUEST]: addconsumergroupdetailsRequest,
  [BankaprakarTypes.ADDCONSUMERGROUPDETAILS_SUCCESS]: addconsumergroupdetailsSuccess,
  [BankaprakarTypes.ADDCONSUMERGROUPDETAILS_FAILURE]: addconsumergroupdetailsFailure,

  [BankaprakarTypes.UPDATECONSUMERGROUPDETAILS_REQUEST]: updateconsumergroupdetailsRequest,
  [BankaprakarTypes.UPDATECONSUMERGROUPDETAILS_SUCCESS]: updateconsumergroupdetailsSuccess,
  [BankaprakarTypes.UPDATECONSUMERGROUPDETAILS_FAILURE]: updateconsumergroupdetailsFailure,

  [BankaprakarTypes.DELETECONSUMERGROUPDETAILS_REQUEST]: deleteconsumergroupdetailsRequest,
  [BankaprakarTypes.DELETECONSUMERGROUPDETAILS_SUCCESS]: deleteconsumergroupdetailsSuccess,
  [BankaprakarTypes.DELETECONSUMERGROUPDETAILS_FAILURE]: deleteconsumergroupdetailsFailure,

  [BankaprakarTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BankaprakarTypes.CLEAR_REQUEST]: clearRequest,
});
