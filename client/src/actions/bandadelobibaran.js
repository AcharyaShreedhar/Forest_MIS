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
  
  export const BandadelobibaranTypes = Types;
  export default Creators;