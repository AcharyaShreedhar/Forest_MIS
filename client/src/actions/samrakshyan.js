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
  //---------samrakshyanpokhari
  fetchallsamrakshyanpokharinirmanRequest: ["payload"],
  fetchallsamrakshyanpokharinirmanSuccess: ["response"],
  fetchallsamrakshyanpokharinirmanFailure: null,

  fetchsamrakshyanpokharinirmanRequest: ["payload"],
  fetchsamrakshyanpokharinirmanSuccess: ["response"],
  fetchsamrakshyanpokharinirmanFailure: null,

  addsamrakshyanpokharinirmanRequest: ["payload"],
  addsamrakshyanpokharinirmanSuccess: ["response"],
  addsamrakshyanpokharinirmanFailure: null,

  updatesamrakshyanpokharinirmanRequest: [
    "payload",
    "samrakshyanpokhariNirmanId",
  ],
  updatesamrakshyanpokharinirmanSuccess: ["response"],
  updatesamrakshyanpokharinirmanFailure: null,

  deletesamrakshyanpokharinirmanRequest: [
    "payload",
    "samrakshyanpokhariNirmanId",
  ],
  deletesamrakshyanpokharinirmanSuccess: ["response"],
  deletesamrakshyanpokharinirmanFailure: null,

  //------ jaladharsamrakshyan
  fetchalljaladharsamrakshyanRequest: ["payload"],
  fetchalljaladharsamrakshyanSuccess: ["response"],
  fetchalljaladharsamrakshyanFailure: null,

  fetchjaladharsamrakshyanRequest: ["payload"],
  fetchjaladharsamrakshyanSuccess: ["response"],
  fetchjaladharsamrakshyanFailure: null,

  addjaladharsamrakshyanRequest: ["payload"],
  addjaladharsamrakshyanSuccess: ["response"],
  addjaladharsamrakshyanFailure: null,

  updatejaladharsamrakshyanRequest: ["payload", "jaladharsamrakshyanId"],
  updatejaladharsamrakshyanSuccess: ["response"],
  updatejaladharsamrakshyanFailure: null,

  deletejaladharsamrakshyanRequest: ["payload", "jaladharsamrakshyanId"],
  deletejaladharsamrakshyanSuccess: ["response"],
  deletejaladharsamrakshyanFailure: null,

  //----------nadikinar samrakshyan
  fetchallnadikinarsamrakshyanRequest: ["payload"],
  fetchallnadikinarsamrakshyanSuccess: ["response"],
  fetchallnadikinarsamrakshyanFailure: null,

  fetchnadikinarsamrakshyanRequest: ["payload"],
  fetchnadikinarsamrakshyanSuccess: ["response"],
  fetchnadikinarsamrakshyanFailure: null,

  addnadikinarsamrakshyanRequest: ["payload"],
  addnadikinarsamrakshyanSuccess: ["response"],
  addnadikinarsamrakshyanFailure: null,

  updatenadikinarsamrakshyanRequest: ["payload", "nadikinarSamrakshyanId"],
  updatenadikinarsamrakshyanSuccess: ["response"],
  updatenadikinarsamrakshyanFailure: null,
  //--------panimuhansamrakshyan
  fetchallpanimuhansamrakshyanRequest: ["payload"],
  fetchallpanimuhansamrakshyanSuccess: ["response"],
  fetchallpanimuhansamrakshyanFailure: null,

  deletenadikinarsamrakshyanRequest: ["payload", "nadikinarSamrakshyanId"],
  deletenadikinarsamrakshyanSuccess: ["response"],
  deletenadikinarsamrakshyanFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const SamrakshyanTypes = Types;
export default Creators;
