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
  // budgetsirshak

  fetchallbudgetsirshakRequest: ['payload'],
  fetchallbudgetsirshakSuccess: ['response'],
  fetchallbudgetsirshakFailure: null,

  fetchbudgetsirshakRequest: ['payload'],
  fetchbudgetsirshakSuccess: ['response'],
  fetchbudgetsirshakFailure: null,

  addbudgetsirshakRequest: ['payload'],
  addbudgetsirshakSuccess: ['response'],
  addbudgetsirshakFailure: null,

  updatebudgetsirshakRequest: ['payload', 'budgetsirshakId'],
  updatebudgetsirshakSuccess: ['response'],
  updatebudgetsirshakFailure: null,

  deletebudgetsirshakRequest: ['payload', 'budgetsirshakId'],
  deletebudgetsirshakSuccess: ['response'],
  deletebudgetsirshakFailure: null,

  // karyakramsirshak

  fetchallkaryakramsirshakRequest: ['payload'],
  fetchallkaryakramsirshakSuccess: ['response'],
  fetchallkaryakramsirshakFailure: null,

  fetchkaryakramsirshakRequest: ['payload'],
  fetchkaryakramsirshakSuccess: ['response'],
  fetchkaryakramsirshakFailure: null,

  addkaryakramsirshakRequest: ['payload'],
  addkaryakramsirshakSuccess: ['response'],
  addkaryakramsirshakFailure: null,

  updatekaryakramsirshakRequest: ['payload', 'karyakramSirshakId'],
  updatekaryakramsirshakSuccess: ['response'],
  updatekaryakramsirshakFailure: null,

  deletekaryakramsirshakRequest: ['payload', 'karyakramSirshakId'],
  deletekaryakramsirshakSuccess: ['response'],
  deletekaryakramsirshakFailure: null,

  // Budget barshik
  fetchallbudgetbarshikRequest: ['payload'],
  fetchallbudgetbarshikSuccess: ['response'],
  fetchallbudgetbarshikFailure: null,

  fetchbudgetbarshikRequest: ['payload'],
  fetchbudgetbarshikSuccess: ['response'],
  fetchbudgetbarshikFailure: null,

  fetchbudgetsirshakdropdownRequest: ['payload'],
  fetchbudgetsirshakdropdownSuccess: ['response'],
  fetchbudgetsirshakdropdownFailure: null,

  addbudgetbarshikRequest: ['payload'],
  addbudgetbarshikSuccess: ['response'],
  addbudgetbarshikFailure: null,

  updatebudgetbarshikRequest: ['payload', 'budgetbarshikId'],
  updatebudgetbarshikSuccess: ['response'],
  updatebudgetbarshikFailure: null,

  deletebudgetbarshikRequest: ['payload', 'budgetbarshikId'],
  deletebudgetbarshikSuccess: ['response'],
  deletebudgetbarshikFailure: null,

  // Budget entry
  fetchallbudgetentryRequest: ['payload'],
  fetchallbudgetentrySuccess: ['response'],
  fetchallbudgetentryFailure: null,

  fetchbudgetentryRequest: ['payload'],
  fetchbudgetentrySuccess: ['response'],
  fetchbudgetentryFailure: null,

  addbudgetentryRequest: ['payload'],
  addbudgetentrySuccess: ['response'],
  addbudgetentryFailure: null,

  updatebudgetentryRequest: ['payload', 'budgetkarmacharidetailId'],
  updatebudgetentrySuccess: ['response'],
  updatebudgetentryFailure: null,

  deletebudgetentryRequest: ['payload', 'budgetkarmacharidetailId'],
  deletebudgetentrySuccess: ['response'],
  deletebudgetentryFailure: null,

  locationsRequest: ['payload'],
  // Clear all caches
  clearRequest: null,
})

export const BudgetbibaranTypes = Types
export default Creators
