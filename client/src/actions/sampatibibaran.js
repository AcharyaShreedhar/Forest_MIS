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
     
   fetchallassetsRequest: ["payload"],
   fetchallassetsSuccess: ["response"],
   fetchallassetsFailure: null,

   fetchassetsRequest: ["payload"],
   fetchassetsSuccess: ["response"],
   fetchassetsFailure: null,

   addassetsRequest: ["payload"],
   addassetsSuccess: ["response"],
   addassetsFailure: null,

   updateassetsRequest: ["payload", "assetId"],
   updateassetsSuccess: ["response"],
   updateassetsFailure: null,

   deleteassetsRequest: ["payload", "assetId"],
   deleteassetsSuccess: ["response"],
   deleteassetsFailure: null,

   fetchallvehiclesRequest: ["payload"],
   fetchallvehiclesSuccess: ["response"],
   fetchallvehiclesFailure: null,

   fetchvehiclesRequest: ["payload"],
   fetchvehiclesSuccess: ["response"],
   fetchvehiclesFailure: null,

   addvehiclesRequest: ["payload"],
   addvehiclesSuccess: ["response"],
   addvehiclesFailure: null,

   updatevehiclesRequest: ["payload", "vehicleId"],
   updatevehiclesSuccess: ["response"],
   updatevehiclesFailure: null,

   deletevehiclesRequest: ["payload", "vehicleId"],
   deletevehiclesSuccess: ["response"],
   deletevehiclesFailure: null,
 
    locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const SampatibibaranTypes = Types;
 export default Creators;