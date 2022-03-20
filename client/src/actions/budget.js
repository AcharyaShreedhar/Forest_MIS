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
  fetchallkaryakramsirshakRequest: ['payload'],
  fetchallkaryakramsirshakSuccess: ['response'],
  fetchallkaryakramsirshakFailure: null,

  fetchkaryakramsirshakRequest: ['payload'],
  fetchkaryakramsirshakSuccess: ['response'],
  fetchkaryakramsirshakFailure: null,

  addkaryakramsirshakRequest: ['payload'],
  addkaryakramsirshakSuccess: ['response'],
  addkaryakramsirshakFailure: null,

  updatekaryakramsirshakRequest: ['payload', 'assetId'],
  updatekaryakramsirshakSuccess: ['response'],
  updatekaryakramsirshakFailure: null,

  deletekaryakramsirshakRequest: ['payload', 'assetId'],
  deletekaryakramsirshakSuccess: ['response'],
  deletekaryakramsirshakFailure: null,

  locationsRequest: ['payload'],
  // Clear all caches
  clearRequest: null,
})

export const BudgetTypes = Types
export default Creators
