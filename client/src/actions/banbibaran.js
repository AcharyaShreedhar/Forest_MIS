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

  addsamudayikbanbibaranRequest: ["payload"],
  addsamudayikbanbibaranSuccess: ["response"],
  addsamudayikbanbibaranFailure: null,

  updatesamudayikbanbibaranRequest: ["payload", "samudayikbanbibaranId"],
  updatesamudayikbanbibaranSuccess: ["response"],
  updatesamudayikbanbibaranFailure: null,

  deletesamudayikbanbibaranRequest: ["payload", "samudayikbanbibaranId"],
  deletesamudayikbanbibaranSuccess: ["response"],
  deletesamudayikbanbibaranFailure: null,

  fetchalldharmikbanbibaranRequest: ["payload"],
  fetchalldharmikbanbibaranSuccess: ["response"],
  fetchalldharmikbanbibaranFailure: null,

  fetchdharmikbanbibaranRequest: ["payload"],
  fetchdharmikbanbibaranSuccess: ["response"],
  fetchdharmikbanbibaranFailure: null,

  adddharmikbanbibaranRequest: ["payload"],
  adddharmikbanbibaranSuccess: ["response"],
  adddharmikbanbibaranFailure: null,

  updatedharmikbanbibaranRequest: ["payload", "dharmikbanBibaranId"],
  updatedharmikbanbibaranSuccess: ["response"],
  updatedharmikbanbibaranFailure: null,

  deletedharmikbanbibaranRequest: ["payload", "dharmikbanBibaranId"],
  deletedharmikbanbibaranSuccess: ["response"],
  deletedharmikbanbibaranFailure: null,

  fetchallnijibanbibaranRequest: ["payload"],
  fetchallnijibanbibaranSuccess: ["response"],
  fetchallnijibanbibaranFailure: null,

  fetchnijibanbibaranRequest: ["payload"],
  fetchnijibanbibaranSuccess: ["response"],
  fetchnijibanbibaranFailure: null,

  addnijibanbibaranRequest: ["payload"],
  addnijibanbibaranSuccess: ["response"],
  addnijibanbibaranFailure: null,

  updatenijibanbibaranRequest: ["payload", "nijibanBibaranId"],
  updatenijibanbibaranSuccess: ["response"],
  updatenijibanbibaranFailure: null,

  deletenijibanbibaranRequest: ["payload", "nijibanBibaranId"],
  deletenijibanbibaranSuccess: ["response"],
  deletenijibanbibaranFailure: null,


  fetchallkabuliyatibanbibaranRequest: ["payload"],
  fetchallkabuliyatibanbibaranSuccess: ["response"],
  fetchallkabuliyatibanbibaranFailure: null,

  fetchkabuliyatibanbibaranRequest: ["payload"],
  fetchkabuliyatibanbibaranSuccess: ["response"],
  fetchkabuliyatibanbibaranFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const BanbibaranTypes = Types;
export default Creators;
