import { createActions } from "reduxsauce";

 const { Types, Creators } = createActions({
     
    //---- banle srijana gareko rojagari 
   fetchallrojgarsrijanaRequest: ["payload"],
   fetchallrojgarsrijanaSuccess: ["response"],
   fetchallrojgarsrijanaFailure: null,



   locationsRequest: ["payload"],
   // Clear all caches
   clearRequest: null,
 });
 
 export const MiscellaneousTypes = Types;
 export default Creators;
