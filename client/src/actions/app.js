/**
 * We will use the following prefixes.
 * add: When adding something to the database.
 * delete: When deleting something from the database.
 * update: When updating something in the database.
 * fetch: When pulling something from the database.
 * search: When searching something in the database.
 * select: When setting reducers, not handling with database, just handling only reducers.
 */

import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['response'],
  loginFailure: null,

  logoutRequest: null,
  logoutSuccess: null,
  logoutFailure: null,

 // Municipalities 

  fetchallmunicipalitiesRequest: ["payload"],
  fetchallmunicipalitiesSuccess: ["response"],
  fetchallmunicipalitiesFailure: null,

  fetchmunicipalitiesRequest: ["payload"],
  fetchmunicipalitiesSuccess: ["response"],
  fetchmunicipalitiesFailure: null,


  addmunicipalitiesRequest: ["payload"],
  addmunicipalitiesSuccess: ["response"],
  addmunicipalitiesFailure: null,

  updatemunicipalitiesRequest: ["payload", "municipalitiesId"],
  updatemunicipalitiesSuccess: ["response"],
  updatemunicipalitiesFailure: null,

  deletemunicipalitiesRequest: ["payload", "municipalitiesId"],
  deletemunicipalitiesSuccess: ["response"],
  deletemunicipalitiesFailure: null,

  
  

//   // PROVINCES

  fetchallprovincesRequest: ["payload"],
  fetchallprovincesSuccess: ["response"],
  fetchallprovincesFailure: null,

  fetchprovincesRequest: ["payload"],
  fetchprovincesSuccess: ["response"],
  fetchprovincesFailure: null,

  addprovincesRequest: ["payload"],
  addprovincesSuccess: ["response"],
  addprovincesFailure: null,

  updateprovincesRequest: ["payload", "municipalitiesId"],
  updateprovincesSuccess: ["response"],
  updateprovincesFailure: null,

  deleteprovincesRequest: ["payload", "municipalitiesId"],
  deleteprovincesSuccess: ["response"],
  deleteprovincesFailure: null,

//   // Districts

  fetchalldistrictsRequest: ["payload"],
  fetchalldistrictsSuccess: ["response"],
  fetchalldistrictsFailure: null,

  
  fetchdistrictsRequest: ["payload"],
  fetchdistrictsSuccess: ["response"],
  fetchdistrictsFailure: null,

  adddistrictsRequest: ["payload"],
  adddistrictsSuccess: ["response"],
  adddistrictsFailure: null,

  updatedistrictsRequest: ["payload", "districtsId"],
  updatedistrictsSuccess: ["response"],
  updatedistrictsFailure: null,

  deletedistrictsRequest: ["payload", "districtsId"],
  deletedistrictsSuccess: ["response"],
  deletedistrictsFailure: null,

  //Users
  fetchallusersRequest: ["payload"],
  fetchallusersSuccess: ["response"],
  fetchallusersFailure: null,

  fetchusersRequest: ["payload"],
  fetchusersSuccess: ["response"],
  fetchusersFailure: null,

  addusersRequest: ["payload"],
  addusersSuccess: ["response"],
  addusersFailure: null,

  updateusersRequest: ["payload", "usersId"],
  updateusersSuccess: ["response"],
  updateusersFailure: null,

  deleteusersRequest: ["payload", "usersId"],
  deleteusersSuccess: ["response"],
  deleteusersFailure: null,

//   //Departments--------------//
  fetchalldepartmentsRequest: ["payload"],
  fetchalldepartmentsSuccess: ["response"],
  fetchalldepartmentsFailure: null,

  fetchdepartmentsRequest: ["payload"],
  fetchdepartmentsSuccess: ["response"],
  fetchdepartmentsFailure: null,

  adddepartmentsRequest: ["payload"],
  adddepartmentsSuccess: ["response"],
  adddepartmentsFailure: null,

  updatedepartmentsRequest: ["payload", "departmentsId"],
  updatedepartmentsSuccess: ["response"],
  updatedepartmentsFailure: null,

  deletedepartmentsRequest: ["payload", "departmentsId"],
  deletedepartmentsSuccess: ["response"],
  deletedepartmentsFailure: null,

  locationsRequest: ['payload'],
  // Clear all caches
  clearRequest: null,
})

export const AppTypes = Types
export default Creators
//** */