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
     
   fetchallsamajikkaryabibaranRequest: ["payload"],
   fetchallsamajikkaryabibaranSuccess: ["response"],
   fetchallsamajikkaryabibaranFailure: null,

   fetchsamajikkaryabibaranRequest: ["payload"],
   fetchsamajikkaryabibaranSuccess: ["response"],
   fetchsamajikkaryabibaranFailure: null,

   addsamajikkaryabibaranRequest: ["payload"],
   addsamajikkaryabibaranSuccess: ["response"],
   addsamajikkaryabibaranFailure: null,

   updatesamajikkaryabibaranRequest: ["payload","samajikkaryabibaranId"],
   updatesamajikkaryabibaranSuccess: ["response"],
   updatesamajikkaryabibaranFailure: null,

   deletesamajikkaryabibaranRequest: ["payload","samajikkaryabibaranId"],
   deletesamajikkaryabibaranSuccess: ["response"],
   deletesamajikkaryabibaranFailure: null,


   locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const KaryabibaranTypes = Types;
 export default Creators;
  