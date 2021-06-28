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

   updatebanpaidawarRequest: ["payload","banpaidawarId"],
   updatebanpaidawarSuccess: ["response"],
   updatebanpaidawarFailure: null,

   deletebanpaidawarRequest: ["payload","banpaidawarId"],
   deletebanpaidawarSuccess: ["response"],
   deletebanpaidawarFailure: null,

   fetchallbanpaidawarlilamRequest: ["payload"],
   fetchallbanpaidawarlilamSuccess: ["response"],
   fetchallbanpaidawarlilamFailure: null,

   fetchbanpaidawarlilamRequest: ["payload"],
   fetchbanpaidawarlilamSuccess: ["response"],
   fetchbanpaidawarlilamFailure: null,

   addbanpaidawarlilamRequest: ["payload"],
   addbanpaidawarlilamSuccess: ["response"],
   addbanpaidawarlilamFailure: null,

   updatebanpaidawarlilamRequest: ["payload","banpaidawarlilamId"],
   updatebanpaidawarlilamSuccess: ["response"],
   updatebanpaidawarlilamFailure: null,

   deletebanpaidawarlilamRequest: ["payload","banpaidawarlilamId"],
   deletebanpaidawarlilamSuccess: ["response"],
   deletebanpaidawarlilamFailure: null,

     // ------ banpaidawarbikribitaran
  fetchallbanpaidawarbikribitaranRequest: ["payload"],
  fetchallbanpaidawarbikribitaranSuccess: ["response"],
  fetchallbanpaidawarbikribitaranFailure: null,

  fetchbanpaidawarbikribitaranRequest: ["payload"],
  fetchbanpaidawarbikribitaranSuccess: ["response"],
  fetchbanpaidawarbikribitaranFailure: null,

  addbanpaidawarbikribitaranRequest: ["payload"],
  addbanpaidawarbikribitaranSuccess: ["response"],
  addbanpaidawarbikribitaranFailure: null,

  locationsRequest: ["payload"],
   // Clear all caches
  clearRequest: null,
 });
 
 export const BanpaidawarTypes = Types;
 export default Creators;