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
   fetchallemployeesRequest: ["payload"],
   fetchallemployeesSuccess: ["response"],
   fetchallemployeesFailure: null,

   fetchemployeesRequest: ["payload"],
   fetchemployeesSuccess: ["response"],
   fetchemployeesFailure: null,
 
   fetchallemployeeshistoryRequest: ["payload"],
   fetchallemployeeshistorySuccess: ["response"],
   fetchallemployeeshistoryFailure: null,

   fetchemployeeshistoryRequest: ["payload"],
   fetchemployeeshistorySuccess: ["response"],
   fetchemployeeshistoryFailure: null,
 
   fetchalllevelRequest: ["payload"],
   fetchalllevelSuccess: ["response"],
   fetchalllevelFailure: null,


   locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const KarmacharibibaranTypes = Types;
 export default Creators;
 