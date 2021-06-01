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
    
  fetchallsamudayikbanbibaranRequest: ["payload"],
  fetchallsamudayikbanbibaranSuccess: ["response"],
  fetchallsamudayikbanbibaranFailure: null,

  fetchsamudayikbanbibaranRequest: ["payload"],
  fetchsamudayikbanbibaranSuccess: ["response"],
  fetchsamudayikbanbibaranFailure: null,

  fetchalldharmikbanbibaranRequest: ["payload"],
  fetchalldharmikbanbibaranSuccess: ["response"],
  fetchalldharmikbanbibaranFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const BanbibaranTypes = Types;
export default Creators;
