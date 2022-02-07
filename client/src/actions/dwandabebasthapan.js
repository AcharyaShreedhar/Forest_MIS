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
  //.................Banyajantu Uddar
  fetchtotalbanyajantuuddarRequest: ["payload"],
  fetchtotalbanyajantuuddarSuccess: ["response"],
  fetchtotalbanyajantuuddarFailure: null,

  fetchallbanyajantuuddarRequest: ["payload"],
  fetchallbanyajantuuddarSuccess: ["response"],
  fetchallbanyajantuuddarFailure: null,

  fetchbanyajantuuddarRequest: ["payload"],
  fetchbanyajantuuddarSuccess: ["response"],
  fetchbanyajantuuddarFailure: null,

  addbanyajantuuddarRequest: ["payload"],
  addbanyajantuuddarSuccess: ["response"],
  addbanyajantuuddarFailure: null,

  updatebanyajantuuddarRequest: ["payload", "banyajantuuddarId"],
  updatebanyajantuuddarSuccess: ["response"],
  updatebanyajantuuddarFailure: null,

  deletebanyajantuuddarRequest: ["payload", "banyajantuuddarId"],
  deletebanyajantuuddarSuccess: ["response"],
  deletebanyajantuuddarFailure: null,

  //.................Banyajantu Xeti
  fetchtotalbanyajantuxetiRequest: ["payload"],
  fetchtotalbanyajantuxetiSuccess: ["response"],
  fetchtotalbanyajantuxetiFailure: null,

  fetchallbanyajantuxetiRequest: ["payload"],
  fetchallbanyajantuxetiSuccess: ["response"],
  fetchallbanyajantuxetiFailure: null,

  fetchbanyajantuxetiRequest: ["payload"],
  fetchbanyajantuxetiSuccess: ["response"],
  fetchbanyajantuxetiFailure: null,

  addbanyajantuxetiRequest: ["payload"],
  addbanyajantuxetiSuccess: ["response"],
  addbanyajantuxetiFailure: null,

  updatebanyajantuxetiRequest: ["payload", "banyajantuxetiId"],
  updatebanyajantuxetiSuccess: ["response"],
  updatebanyajantuxetiFailure: null,

  deletebanyajantuxetiRequest: ["payload", "banyajantuxetiId"],
  deletebanyajantuxetiSuccess: ["response"],
  deletebanyajantuxetiFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const DwandabebasthapanTypes = Types;
export default Creators;
