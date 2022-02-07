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
  fetchallpahirobibaranRequest: ["payload"],
  fetchallpahirobibaranSuccess: ["response"],
  fetchallpahirobibaranFailure: null,

  fetchpahirobibaranRequest: ["payload"],
  fetchpahirobibaranSuccess: ["response"],
  fetchpahirobibaranFailure: null,

  addpahirobibaranRequest: ["payload"],
  addpahirobibaranSuccess: ["response"],
  addpahirobibaranFailure: null,

  updatepahirobibaranRequest: ["payload", "pahirobibaranId"],
  updatepahirobibaranSuccess: ["response"],
  updatepahirobibaranFailure: null,

  deletepahirobibaranRequest: ["payload", "pahirobibaranId"],
  deletepahirobibaranSuccess: ["response"],
  deletepahirobibaranFailure: null,

  fetchallbadhibibaranRequest: ["payload"],
  fetchallbadhibibaranSuccess: ["response"],
  fetchallbadhibibaranFailure: null,

  fetchbadhibibaranRequest: ["payload"],
  fetchbadhibibaranSuccess: ["response"],
  fetchbadhibibaranFailure: null,

  addbadhibibaranRequest: ["payload"],
  addbadhibibaranSuccess: ["response"],
  addbadhibibaranFailure: null,

  updatebadhibibaranRequest: ["payload", "badhibibaranId"],
  updatebadhibibaranSuccess: ["response"],
  updatebadhibibaranFailure: null,

  deletebadhibibaranRequest: ["payload", "badhibibaranId"],
  deletebadhibibaranSuccess: ["response"],
  deletebadhibibaranFailure: null,

  fetchallbandadelobibaranRequest: ["payload"],
  fetchallbandadelobibaranSuccess: ["response"],
  fetchallbandadelobibaranFailure: null,

  fetchbandadelobibaranRequest: ["payload"],
  fetchbandadelobibaranSuccess: ["response"],
  fetchbandadelobibaranFailure: null,

  addbandadelobibaranRequest: ["payload"],
  addbandadelobibaranSuccess: ["response"],
  addbandadelobibaranFailure: null,

  updatebandadelobibaranRequest: ["payload", "bandadelobibaranId"],
  updatebandadelobibaranSuccess: ["response"],
  updatebandadelobibaranFailure: null,

  deletebandadelobibaranRequest: ["payload", "bandadelobibaranId"],
  deletebandadelobibaranSuccess: ["response"],
  deletebandadelobibaranFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const BipatbibaranTypes = Types;
export default Creators;
