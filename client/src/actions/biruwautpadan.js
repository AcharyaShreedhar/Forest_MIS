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
     
   fetchallbiruwautpadanRequest: ["payload"],
   fetchallbiruwautpadanSuccess: ["response"],
   fetchallbiruwautpadanFailure: null,

   fetchbiruwautpadanRequest: ["payload"],
   fetchbiruwautpadanSuccess: ["response"],
   fetchbiruwautpadanFailure: null,

   addbiruwautpadanRequest: ["payload"],
   addbiruwautpadanSuccess: ["response"],
   addbiruwautpadanFailure: null,

   updatebiruwautpadanRequest: ["payload","biruwautpadanId"],
   updatebiruwautpadanSuccess: ["response"],
   updatebiruwautpadanFailure: null,

   deletebiruwautpadanRequest: ["payload","biruwautpadanId"],
   deletebiruwautpadanSuccess: ["response"],
   deletebiruwautpadanFailure: null,

   fetchallactivitiesinfoRequest: ["payload"],
   fetchallactivitiesinfoSuccess: ["response"],
   fetchallactivitiesinfoFailure: null,

   fetchactivitiesinfoRequest: ["payload"],
   fetchactivitiesinfoSuccess: ["response"],
   fetchactivitiesinfoFailure: null,
 
   addactivitiesinfoRequest: ["payload"],
   addactivitiesinfoSuccess: ["response"],
   addactivitiesinfoFailure: null,

   updateactivitiesinfoRequest: ["payload","activitiesinfoId"],
   updateactivitiesinfoSuccess: ["response"],
   updateactivitiesinfoFailure: null,

   deleteactivitiesinfoRequest: ["payload","activitiesinfoId"],
   deleteactivitiesinfoSuccess: ["response"],
   deleteactivitiesinfoFailure: null,

   locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const BiruwautpadanTypes = Types;
 export default Creators;
