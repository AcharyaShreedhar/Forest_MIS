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
     
   fetchallbanpaidawarRequest: ["payload"],
   fetchallbanpaidawarSuccess: ["response"],
   fetchallbanpaidawarFailure: null,

   fetchbanpaidawarRequest: ["payload"],
   fetchbanpaidawarSuccess: ["response"],
   fetchbanpaidawarFailure: null,

   addbanpaidawarRequest: ["payload"],
   addbanpaidawarSuccess: ["response"],
   addbanpaidawarFailure: null,

   updatebanpaidawarRequest: ["payload"],
   updatebanpaidawarSuccess: ["response"],
   updatebanpaidawarFailure: null,

   deletebanpaidawarRequest: ["payload"],
   deletebanpaidawarSuccess: ["response"],
   deletebanpaidawarFailure: null,

   fetchallbanpaidawarlilamRequest: ["payload"],
   fetchallbanpaidawarlilamSuccess: ["response"],
   fetchallbanpaidawarlilamFailure: null,

   fetchbanpaidawarlilamRequest: ["payload"],
   fetchbanpaidawarlilamSuccess: ["response"],
   fetchbanpaidawarlilamFailure: null,


       locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const BanpaidawarTypes = Types;
 export default Creators;