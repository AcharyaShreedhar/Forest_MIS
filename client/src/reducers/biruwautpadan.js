import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { BiruwautpadanTypes } from "../actions/biruwautpadan";

const initialState = Immutable({
  status: "",
  token: "",
});

const fetchallbiruwautpadanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const fetchallbiruwautpadanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbiruwautpadanData: action.response,
  });
};
const fetchallbiruwautpadanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchbiruwautpadanRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });

  const fetchbiruwautpadanSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    biruwautpadanData: action.response,
  });
};
const fetchbiruwautpadanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


//Add biruwautpadan
const addbiruwautpadanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbiruwautpadanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbiruwautpadanFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


//Update biruwautpadan
const updatebiruwautpadanRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updatebiruwautpadanSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updatebiruwautpadanFailure = (state, action) =>
state.merge({ ...state, status: "error" });


//Delete biruwautpadan
const deletebiruwautpadanRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deletebiruwautpadanSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deletebiruwautpadanFailure = (state, action) =>
state.merge({ ...state, status: "error" });


const fetchallactivitiesinfoRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallactivitiesinfoSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allactivitiesinfoData: action.response,
  });
};
const fetchallactivitiesinfoFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchactivitiesinfoRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

  const fetchactivitiesinfoSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    activitiesinfoData: action.response,
  });
};
const fetchactivitiesinfoFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add activitiesinfo
const addactivitiesinfoRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addactivitiesinfoSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addactivitiesinfoFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

  //Update activitiesinfo
const updateactivitiesinfoRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const updateactivitiesinfoSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const updateactivitiesinfoFailure = (state, action) =>
state.merge({ ...state, status: "error" });

// Delete activitiesinfo
const deleteactivitiesinfoRequest = (state, action) =>
state.merge({ ...state, status: "pending" });
const deleteactivitiesinfoSuccess = (state, action) =>
state.merge({
  ...state,
  status: "done",
});
const deleteactivitiesinfoFailure = (state, action) =>
state.merge({ ...state, status: "error" });

//brixyaropan

const fetchallbrixyaropanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallbrixyaropanSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allbrixyaropanData: action.response,
  });
};
const fetchallbrixyaropanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};



const fetchbrixyaropanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

  const fetchbrixyaropanSuccess = (state, action) => {
    return state.merge({
    ...state,
    status: "done",
    brixyaropanData: action.response,
  });
};
const fetchbrixyaropanFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};


const addbrixyaropanRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addbrixyaropanSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addbrixyaropanFailure = (state, action) =>
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
  [BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_REQUEST]: fetchallbiruwautpadanRequest,
  [BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_SUCCESS]: fetchallbiruwautpadanSuccess,
  [BiruwautpadanTypes.FETCHALLBIRUWAUTPADAN_FAILURE]: fetchallbiruwautpadanFailure,

  [BiruwautpadanTypes.FETCHBIRUWAUTPADAN_REQUEST]: fetchbiruwautpadanRequest,
  [BiruwautpadanTypes.FETCHBIRUWAUTPADAN_SUCCESS]: fetchbiruwautpadanSuccess,
  [BiruwautpadanTypes.FETCHBIRUWAUTPADAN_FAILURE]: fetchbiruwautpadanFailure,

  [BiruwautpadanTypes.ADDBIRUWAUTPADAN_REQUEST]: addbiruwautpadanRequest,
  [BiruwautpadanTypes.ADDBIRUWAUTPADAN_SUCCESS]: addbiruwautpadanSuccess,
  [BiruwautpadanTypes.ADDBIRUWAUTPADAN_FAILURE]: addbiruwautpadanFailure,

  [BiruwautpadanTypes.UPDATEBIRUWAUTPADAN_REQUEST]: updatebiruwautpadanRequest,
  [BiruwautpadanTypes.UPDATEBIRUWAUTPADAN_SUCCESS]: updatebiruwautpadanSuccess,
  [BiruwautpadanTypes.UPDATEBIRUWAUTPADAN_FAILURE]: updatebiruwautpadanFailure,

  [BiruwautpadanTypes.DELETEBIRUWAUTPADAN_REQUEST]: deletebiruwautpadanRequest,
  [BiruwautpadanTypes.DELETEBIRUWAUTPADAN_SUCCESS]: deletebiruwautpadanSuccess,
  [BiruwautpadanTypes.DELETEBIRUWAUTPADAN_FAILURE]: deletebiruwautpadanFailure,

  [BiruwautpadanTypes.FETCHALLACTIVITIESINFO_REQUEST]: fetchallactivitiesinfoRequest,
  [BiruwautpadanTypes.FETCHALLACTIVITIESINFO_SUCCESS]: fetchallactivitiesinfoSuccess,
  [BiruwautpadanTypes.FETCHALLACTIVITIESINFO_FAILURE]: fetchallactivitiesinfoFailure,

  [BiruwautpadanTypes.FETCHACTIVITIESINFO_REQUEST]: fetchactivitiesinfoRequest,
  [BiruwautpadanTypes.FETCHACTIVITIESINFO_SUCCESS]: fetchactivitiesinfoSuccess,
  [BiruwautpadanTypes.FETCHACTIVITIESINFO_FAILURE]: fetchactivitiesinfoFailure,

  [BiruwautpadanTypes.ADDACTIVITIESINFO_REQUEST]: addactivitiesinfoRequest,
  [BiruwautpadanTypes.ADDACTIVITIESINFO_SUCCESS]: addactivitiesinfoSuccess,
  [BiruwautpadanTypes.ADDACTIVITIESINFO_FAILURE]: addactivitiesinfoFailure,

  [BiruwautpadanTypes.UPDATEACTIVITIESINFO_REQUEST]: updateactivitiesinfoRequest,
  [BiruwautpadanTypes.UPDATEACTIVITIESINFO_SUCCESS]: updateactivitiesinfoSuccess,
  [BiruwautpadanTypes.UPDATEACTIVITIESINFO_FAILURE]: updateactivitiesinfoFailure,

  [BiruwautpadanTypes.DELETEACTIVITIESINFO_REQUEST]: deleteactivitiesinfoRequest,
  [BiruwautpadanTypes.DELETEACTIVITIESINFO_SUCCESS]: deleteactivitiesinfoSuccess,
  [BiruwautpadanTypes.DELETEACTIVITIESINFO_FAILURE]: deleteactivitiesinfoFailure,

  [BiruwautpadanTypes.FETCHALLBRIXYAROPAN_REQUEST]: fetchallbrixyaropanRequest,
  [BiruwautpadanTypes.FETCHALLBRIXYAROPAN_SUCCESS]: fetchallbrixyaropanSuccess,
  [BiruwautpadanTypes.FETCHALLBRIXYAROPAN_FAILURE]: fetchallbrixyaropanFailure,

  [BiruwautpadanTypes.FETCHBRIXYAROPAN_REQUEST]: fetchbrixyaropanRequest,
  [BiruwautpadanTypes.FETCHBRIXYAROPAN_SUCCESS]: fetchbrixyaropanSuccess,
  [BiruwautpadanTypes.FETCHBRIXYAROPAN_FAILURE]: fetchbrixyaropanFailure,

  [BiruwautpadanTypes.ADDBRIXYAROPAN_REQUEST]: addbrixyaropanRequest,
  [BiruwautpadanTypes.ADDBRIXYAROPAN_SUCCESS]: addbrixyaropanSuccess,
  [BiruwautpadanTypes.ADDBRIXYAROPAN_FAILURE]: addbrixyaropanFailure,

   
  [BiruwautpadanTypes.LOCATIONS_REQUEST]: locationsRequest,
  [BiruwautpadanTypes.CLEAR_REQUEST]: clearRequest,
});
