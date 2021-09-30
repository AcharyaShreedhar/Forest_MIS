import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { dropLast, prepend } from "ramda";
import { AppTypes } from "../actions/app";

const initialState = Immutable({
  status: "",
  user: {},
  token: "",
  menuStatus:false,
});

const loginRequest = (state, action) =>
  state.merge({ ...state, token: "", status: "pending" });
const loginSuccess = (state, action) => {
  const { user_token, user } = action.response;

  return state.merge({
    ...state,
    status: "done",
    token: user_token,
    user,
  });
};
const loginFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const logoutRequest = (state, action) =>
  state.merge({ ...state, status: "done" });
const logoutSuccess = (state, action) =>
  state.merge({ ...state, status: "done" });
const logoutFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

// // Municipalities
const fetchallmunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallmunicipalitiesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allmunicipalitiesData: action.response,
  });
};
const fetchallmunicipalitiesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchmunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

const fetchmunicipalitiesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    municipalitiesData: action.response,
  });
};
const fetchmunicipalitiesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add municipalities
const addmunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addmunicipalitiesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addmunicipalitiesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update municipalities
const updatemunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatemunicipalitiesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatemunicipalitiesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete municipalities
const deletemunicipalitiesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletemunicipalitiesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletemunicipalitiesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


// // Provinces

const fetchallprovincesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallprovincesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allprovincesData: action.response,
  });
};
const fetchallprovincesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchprovincesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });

const fetchprovincesSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    provincesData: action.response,
  });
};
const fetchprovincesFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add provinces
const addprovincesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addprovincesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addprovincesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update provinces
const updateprovincesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updateprovincesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updateprovincesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete provinces
const deleteprovincesRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deleteprovincesSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deleteprovincesFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


// // Districts

const fetchalldistrictsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchalldistrictsSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alldistrictsData: action.response,
  });
};
const fetchalldistrictsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchdistrictsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchdistrictsSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    districtsData: action.response,
  });
};
const fetchdistrictsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add districts
const adddistrictsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const adddistrictsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const adddistrictsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update districts
const updatedistrictsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatedistrictsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatedistrictsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete districts
const deletedistrictsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletedistrictsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletedistrictsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


// // Departments

const fetchalldepartmentsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchalldepartmentsSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    alldepartmentsData: action.response,
  });
};
const fetchalldepartmentsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchdepartmentsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchdepartmentsSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    departmentsData: action.response,
  });
};
const fetchdepartmentsFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

//Add departments
const adddepartmentsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const adddepartmentsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const adddepartmentsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update departments
const updatedepartmentsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updatedepartmentsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updatedepartmentsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete departments
const deletedepartmentsRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deletedepartmentsSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deletedepartmentsFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


// //-----------USERS
const fetchallusersRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchallusersSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    allusersData: action.response,
  });
};
const fetchallusersFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const fetchusersRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const fetchusersSuccess = (state, action) => {
  return state.merge({
    ...state,
    status: "done",
    usersData: action.response,
  });
};
const fetchusersFailure = (state, action) => {
  state.merge({ ...state, status: "error" });
};

const locationsRequest = (state, action) => {
  let locations = state.locations;

  locations = prepend(action.payload.route, locations);
  locations = dropLast(1, locations);
  return state.merge({ ...state, locations });
};

const menuRequest = (state, action) => {
 let menuStatus= !state.menuStatus
  return state.merge({ ...state, menuStatus });
};

//Add users
const addusersRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const addusersSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const addusersFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Update users
const updateusersRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const updateusersSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const updateusersFailure = (state, action) =>
  state.merge({ ...state, status: "error" });

//Delete users
const deleteusersRequest = (state, action) =>
  state.merge({ ...state, status: "pending" });
const deleteusersSuccess = (state, action) =>
  state.merge({
    ...state,
    status: "done",
  });
const deleteusersFailure = (state, action) =>
  state.merge({ ...state, status: "error" });


const clearRequest = (state, action) =>
  state.merge({ ...state, ...initialState });


export const reducer = createReducer(initialState, {
  [AppTypes.LOGIN_REQUEST]: loginRequest,
  [AppTypes.LOGIN_SUCCESS]: loginSuccess,
  [AppTypes.LOGIN_FAILURE]: loginFailure,

  [AppTypes.LOGOUT_REQUEST]: logoutRequest,
  [AppTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AppTypes.LOGOUT_FAILURE]: logoutFailure,

  //Municipalities

  [AppTypes.FETCHALLMUNICIPALITIES_REQUEST]: fetchallmunicipalitiesRequest,
  [AppTypes.FETCHALLMUNICIPALITIES_SUCCESS]: fetchallmunicipalitiesSuccess,
  [AppTypes.FETCHALLMUNICIPALITIES_FAILURE]: fetchallmunicipalitiesFailure,

  [AppTypes.FETCHMUNICIPALITIES_REQUEST]: fetchmunicipalitiesRequest,
  [AppTypes.FETCHMUNICIPALITIES_SUCCESS]: fetchmunicipalitiesSuccess,
  [AppTypes.FETCHMUNICIPALITIES_FAILURE]: fetchmunicipalitiesFailure,

  [AppTypes.ADDMUNICIPALITIES_REQUEST]: addmunicipalitiesRequest,
  [AppTypes.ADDMUNICIPALITIES_SUCCESS]: addmunicipalitiesSuccess,
  [AppTypes.ADDMUNICIPALITIES_FAILURE]: addmunicipalitiesFailure, 


  [AppTypes.UPDATEMUNICIPALITIES_REQUEST]: updatemunicipalitiesRequest,
  [AppTypes.UPDATEMUNICIPALITIES_SUCCESS]: updatemunicipalitiesSuccess,
  [AppTypes.UPDATEMUNICIPALITIES_FAILURE]: updatemunicipalitiesFailure, 

  [AppTypes.DELETEMUNICIPALITIES_REQUEST]: deletemunicipalitiesRequest,
  [AppTypes.DELETEMUNICIPALITIES_SUCCESS]: deletemunicipalitiesSuccess,
  [AppTypes.DELETEMUNICIPALITIES_FAILURE]: deletemunicipalitiesFailure,

  // // Provinces

  [AppTypes.FETCHALLPROVINCES_REQUEST]: fetchallprovincesRequest,
  [AppTypes.FETCHALLPROVINCES_SUCCESS]: fetchallprovincesSuccess,
  [AppTypes.FETCHALLPROVINCES_FAILURE]: fetchallprovincesFailure,

  [AppTypes.FETCHPROVINCES_REQUEST]: fetchprovincesRequest,
  [AppTypes.FETCHPROVINCES_SUCCESS]: fetchprovincesSuccess,
  [AppTypes.FETCHPROVINCES_FAILURE]: fetchprovincesFailure,

  [AppTypes.ADDPROVINCES_REQUEST]: addprovincesRequest,
  [AppTypes.ADDPROVINCES_SUCCESS]: addprovincesSuccess,
  [AppTypes.ADDPROVINCES_FAILURE]: addprovincesFailure, 


  [AppTypes.UPDATEPROVINCES_REQUEST]: updateprovincesRequest,
  [AppTypes.UPDATEPROVINCES_SUCCESS]: updateprovincesSuccess,
  [AppTypes.UPDATEPROVINCES_FAILURE]: updateprovincesFailure, 

  [AppTypes.DELETEPROVINCES_REQUEST]: deleteprovincesRequest,
  [AppTypes.DELETEPROVINCES_SUCCESS]: deleteprovincesSuccess,
  [AppTypes.DELETEPROVINCES_FAILURE]: deleteprovincesFailure,

  // Districts

  [AppTypes.FETCHALLDISTRICTS_REQUEST]: fetchalldistrictsRequest,
  [AppTypes.FETCHALLDISTRICTS_SUCCESS]: fetchalldistrictsSuccess,
  [AppTypes.FETCHALLDISTRICTS_FAILURE]: fetchalldistrictsFailure,

  [AppTypes.FETCHDISTRICTS_REQUEST]: fetchdistrictsRequest,
  [AppTypes.FETCHDISTRICTS_SUCCESS]: fetchdistrictsSuccess,
  [AppTypes.FETCHDISTRICTS_FAILURE]: fetchdistrictsFailure,

  [AppTypes.ADDDISTRICTS_REQUEST]: adddistrictsRequest,
  [AppTypes.ADDDISTRICTS_SUCCESS]: adddistrictsSuccess,
  [AppTypes.ADDDISTRICTS_FAILURE]: adddistrictsFailure, 

  [AppTypes.UPDATEDISTRICTS_REQUEST]: updatedistrictsRequest,
  [AppTypes.UPDATEDISTRICTS_SUCCESS]: updatedistrictsSuccess,
  [AppTypes.UPDATEDISTRICTS_FAILURE]: updatedistrictsFailure, 

  [AppTypes.DELETEDISTRICTS_REQUEST]: deletedistrictsRequest,
  [AppTypes.DELETEDISTRICTS_SUCCESS]: deletedistrictsSuccess,
  [AppTypes.DELETEDISTRICTS_FAILURE]: deletedistrictsFailure,

  //-----USERS
  [AppTypes.FETCHALLUSERS_REQUEST]: fetchallusersRequest,
  [AppTypes.FETCHALLUSERS_SUCCESS]: fetchallusersSuccess,
  [AppTypes.FETCHALLUSERS_FAILURE]: fetchallusersFailure,

  [AppTypes.FETCHUSERS_REQUEST]: fetchusersRequest,
  [AppTypes.FETCHUSERS_SUCCESS]: fetchusersSuccess,
  [AppTypes.FETCHUSERS_FAILURE]: fetchusersFailure,

  [AppTypes.ADDUSERS_REQUEST]: addusersRequest,
  [AppTypes.ADDUSERS_SUCCESS]: addusersSuccess,
  [AppTypes.ADDUSERS_FAILURE]: addusersFailure, 

  [AppTypes.UPDATEUSERS_REQUEST]: updateusersRequest,
  [AppTypes.UPDATEUSERS_SUCCESS]: updateusersSuccess,
  [AppTypes.UPDATEUSERS_FAILURE]: updateusersFailure, 

  [AppTypes.DELETEUSERS_REQUEST]: deleteusersRequest,
  [AppTypes.DELETEUSERS_SUCCESS]: deleteusersSuccess,
  [AppTypes.DELETEUSERS_FAILURE]: deleteusersFailure,


  // //-----Departments--------------//
  [AppTypes.FETCHALLDEPARTMENTS_REQUEST]: fetchalldepartmentsRequest,
  [AppTypes.FETCHALLDEPARTMENTS_SUCCESS]: fetchalldepartmentsSuccess,
  [AppTypes.FETCHALLDEPARTMENTS_FAILURE]: fetchalldepartmentsFailure,

  [AppTypes.FETCHDEPARTMENTS_REQUEST]: fetchdepartmentsRequest,
  [AppTypes.FETCHDEPARTMENTS_SUCCESS]: fetchdepartmentsSuccess,
  [AppTypes.FETCHDEPARTMENTS_FAILURE]: fetchdepartmentsFailure,

  [AppTypes.ADDDEPARTMENTS_REQUEST]: adddepartmentsRequest,
  [AppTypes.ADDDEPARTMENTS_SUCCESS]: adddepartmentsSuccess,
  [AppTypes.ADDDEPARTMENTS_FAILURE]: adddepartmentsFailure, 

  [AppTypes.UPDATEDEPARTMENTS_REQUEST]: updatedepartmentsRequest,
  [AppTypes.UPDATEDEPARTMENTS_SUCCESS]: updatedepartmentsSuccess,
  [AppTypes.UPDATEDEPARTMENTS_FAILURE]: updatedepartmentsFailure, 

  [AppTypes.DELETEUSERS_REQUEST]: deletedepartmentsRequest,
  [AppTypes.DELETEUSERS_SUCCESS]: deletedepartmentsSuccess,
  [AppTypes.DELETEUSERS_FAILURE]: deletedepartmentsFailure,
  
  [AppTypes.LOCATIONS_REQUEST]: locationsRequest,
  [AppTypes.MENU_REQUEST]: menuRequest,
  [AppTypes.CLEAR_REQUEST]: clearRequest,
});
/** */