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
     
   fetchallbanxetraatikramanRequest: ["payload"],
   fetchallbanxetraatikramanSuccess: ["response"],
   fetchallbanxetraatikramanFailure: null,

   fetchbanxetraatikramanRequest: ["payload"],
   fetchbanxetraatikramanSuccess: ["response"],
   fetchbanxetraatikramanFailure: null,

   addbanxetraatikramanRequest: ["payload"],
   addbanxetraatikramanSuccess: ["response"],
   addbanxetraatikramanFailure: null,

   updatebanxetraatikramanRequest: ["payload"],
   updatebanxetraatikramanSuccess: ["response"],
   updatebanxetraatikramanFailure: null,

   deletebanxetraatikramanRequest: ["payload"],
   deletebanxetraatikramanSuccess: ["response"],
   deletebanxetraatikramanFailure: null,

       locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const BanxetraatikramanTypes = Types;
 export default Creators;