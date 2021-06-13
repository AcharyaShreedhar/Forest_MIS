/**
 * We will use the following prefixes.
 * add: When adding something to the database.
 * delete: When deleting something from the database.
 * update: When updating something in the database.
 * fetch: When pulling something from the database.
 * search: When searching something in the database.
 * select: When setting reducers, not handling with database, just handling only reducers.
 */

import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  fetchallinventoriesRequest: ["payload"],
  fetchallinventoriesSuccess: ["response"],
  fetchallinventoriesFailure: null,

  fetchinventoriesRequest: ["payload"],
  fetchinventoriesSuccess: ["response"],
  fetchinventoriesFailure: null,

  fetchallentryRequest: ["payload"],
  fetchallentrySuccess: ["response"],
  fetchallentryFailure: null,

  fetchentryRequest: ["payload"],
  fetchentrySuccess: ["response"],
  fetchentryFailure: null,

  fetchallexitRequest: ["payload"],
  fetchallexitSuccess: ["response"],
  fetchallexitFailure: null,
  
  fetchexitRequest: ["payload"],
  fetchexitSuccess: ["response"],
  fetchexitFailure: null,


  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const InventoriesTypes = Types;
export default Creators;
