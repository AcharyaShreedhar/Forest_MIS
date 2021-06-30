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

  logoutRequest: ['payload'],
  logoutSuccess: null,
  logoutFailure: null,

// Municipalities 

  fetchallmunicipalitiesRequest: ["payload"],
  fetchallmunicipalitiesSuccess: ["response"],
  fetchallmunicipalitiesFailure: null,

  fetchmunicipalitiesRequest: ["payload"],
  fetchmunicipalitiesSuccess: ["response"],
  fetchmunicipalitiesFailure: null,

  // PROVINCES

  fetchallprovincesRequest: ["payload"],
  fetchallprovincesSuccess: ["response"],
  fetchallprovincesFailure: null,

  fetchprovincesRequest: ["payload"],
  fetchprovincesSuccess: ["response"],
  fetchprovincesFailure: null,

  // Districts

  fetchalldistrictsRequest: ["payload"],
  fetchalldistrictsSuccess: ["response"],
  fetchalldistrictsFailure: null,

  
  fetchdistrictsRequest: ["payload"],
  fetchdistrictsSuccess: ["response"],
  fetchdistrictsFailure: null,

  //Users
  fetchallusersRequest: ["payload"],
  fetchallusersSuccess: ["response"],
  fetchallusersFailure: null,

  fetchusersRequest: ["payload"],
  fetchusersSuccess: ["response"],
  fetchusersFailure: null,

  //Departments
  fetchalldepartmentsRequest: ["payload"],
  fetchalldepartmentsSuccess: ["response"],
  fetchalldepartmentsFailure: null,

  fetchdepartmentsRequest: ["payload"],
  fetchdepartmentsSuccess: ["response"],
  fetchdepartmentsFailure: null,

  locationsRequest: ['payload'],
  // Clear all caches
  clearRequest: null,
})

export const AppTypes = Types
export default Creators
