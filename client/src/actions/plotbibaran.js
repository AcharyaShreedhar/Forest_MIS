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
  fetchallplotbibaranRequest: ["payload"],
  fetchallplotbibaranSuccess: ["response"],
  fetchallplotbibaranFailure: null,
 
  fetchplotbibaranRequest: ["payload"],
  fetchplotbibaranSuccess: ["response"],
  fetchplotbibaranFailure: null,

  addplotbibaranRequest: ["payload"],
  addplotbibaranSuccess: ["response"],
  addplotbibaranFailure: null,

  updateplotbibaranRequest: ["payload"],
  updateplotbibaranSuccess: ["response"],
  updateplotbibaranFailure: null,

  deleteplotbibaranRequest: ["payload"],
  deleteplotbibaranSuccess: ["response"],
  deleteplotbibaranFailure: null,


  

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const PlotbibaranTypes = Types;
export default Creators;
