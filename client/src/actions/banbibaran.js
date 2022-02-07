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

  // baramaditchijbastu
  fetchallbaramaditchijbastuRequest: ["payload"],
  fetchallbaramaditchijbastuSuccess: ["response"],
  fetchallbaramaditchijbastuFailure: null,

  fetchbaramaditchijbastuRequest: ["payload"],
  fetchbaramaditchijbastuSuccess: ["response"],
  fetchbaramaditchijbastuFailure: null,

  addbaramaditchijbastuRequest: ["payload"],
  addbaramaditchijbastuSuccess: ["response"],
  addbaramaditchijbastuFailure: null,

  updatebaramaditchijbastuRequest: ["payload", "baramaditchijbastuId"],
  updatebaramaditchijbastuSuccess: ["response"],
  updatebaramaditchijbastuFailure: null,

  deletebaramaditchijbastuRequest: ["payload", "baramaditchijbastuId"],
  deletebaramaditchijbastuSuccess: ["response"],
  deletebaramaditchijbastuFailure: null,

  //banxetraanyaprayojan
  fetchallbanxetraanyaprayojanRequest: ["payload"],
  fetchallbanxetraanyaprayojanSuccess: ["response"],
  fetchallbanxetraanyaprayojanFailure: null,

  fetchbanxetraanyaprayojanRequest: ["payload"],
  fetchbanxetraanyaprayojanSuccess: ["response"],
  fetchbanxetraanyaprayojanFailure: null,

  addbanxetraanyaprayojanRequest: ["payload"],
  addbanxetraanyaprayojanSuccess: ["response"],
  addbanxetraanyaprayojanFailure: null,

  updatebanxetraanyaprayojanRequest: ["payload", "banxetraanyaprayojanId"],
  updatebanxetraanyaprayojanSuccess: ["response"],
  updatebanxetraanyaprayojanFailure: null,

  deletebanxetraanyaprayojanRequest: ["payload", "banxetraanyaprayojanId"],
  deletebanxetraanyaprayojanSuccess: ["response"],
  deletebanxetraanyaprayojanFailure: null,

  //gardern seed plot
  fetchallplotbibaranRequest: ["payload"],
  fetchallplotbibaranSuccess: ["response"],
  fetchallplotbibaranFailure: null,

  fetchplotbibaranRequest: ["payload"],
  fetchplotbibaranSuccess: ["response"],
  fetchplotbibaranFailure: null,

  addplotbibaranRequest: ["payload"],
  addplotbibaranSuccess: ["response"],
  addplotbibaranFailure: null,

  updateplotbibaranRequest: ["payload", "plotId"],
  updateplotbibaranSuccess: ["response"],
  updateplotbibaranFailure: null,

  deleteplotbibaranRequest: ["payload", "plotId"],
  deleteplotbibaranSuccess: ["response"],
  deleteplotbibaranFailure: null,

  //uddhyam BIbaran
  fetchalluddhyambibaranRequest: ["payload"],
  fetchalluddhyambibaranSuccess: ["response"],
  fetchalluddhyambibaranFailure: null,

  fetchuddhyambibaranRequest: ["payload"],
  fetchuddhyambibaranSuccess: ["response"],
  fetchuddhyambibaranFailure: null,

  adduddhyambibaranRequest: ["payload"],
  adduddhyambibaranSuccess: ["response"],
  adduddhyambibaranFailure: null,

  updateuddhyambibaranRequest: ["payload","uddhyamId"],
  updateuddhyambibaranSuccess: ["response"],
  updateuddhyambibaranFailure: null,

  deleteuddhyambibaranRequest: ["payload","uddhyamId"],
  deleteuddhyambibaranSuccess: ["response"],
  deleteuddhyambibaranFailure: null,


  //bachat bibaran
  fetchallbachatbibaranRequest: ["payload"],
  fetchallbachatbibaranSuccess: ["response"],
  fetchallbachatbibaranFailure: null,

  fetchbachatbibaranRequest: ["payload"],
  fetchbachatbibaranSuccess: ["response"],
  fetchbachatbibaranFailure: null,

  addbachatbibaranRequest: ["payload"],
  addbachatbibaranSuccess: ["response"],
  addbachatbibaranFailure: null,

  updatebachatbibaranRequest: ["payload", "bachatId"],
  updatebachatbibaranSuccess: ["response"],
  updatebachatbibaranFailure: null,

  deletebachatbibaranRequest: ["payload", "bachatId"],
  deletebachatbibaranSuccess: ["response"],
  deletebachatbibaranFailure: null,

  //banxetra atikraman
  fetchallbanxetraatikramanRequest: ["payload"],
   fetchallbanxetraatikramanSuccess: ["response"],
   fetchallbanxetraatikramanFailure: null,

   fetchbanxetraatikramanRequest: ["payload"],
   fetchbanxetraatikramanSuccess: ["response"],
   fetchbanxetraatikramanFailure: null,

   addbanxetraatikramanRequest: ["payload"],
   addbanxetraatikramanSuccess: ["response"],
   addbanxetraatikramanFailure: null,

   updatebanxetraatikramanRequest: ["payload","banxetraatikramanId"],
   updatebanxetraatikramanSuccess: ["response"],
   updatebanxetraatikramanFailure: null,

   deletebanxetraatikramanRequest: ["payload","banxetraatikramanId"],
   deletebanxetraatikramanSuccess: ["response"],
   deletebanxetraatikramanFailure: null,

   fetchallmuddaanusandhandayariRequest: ["payload"],
   fetchallmuddaanusandhandayariSuccess: ["response"],
   fetchallmuddaanusandhandayariFailure: null,

   fetchmuddaanusandhandayariRequest: ["payload"],
   fetchmuddaanusandhandayariSuccess: ["response"],
   fetchmuddaanusandhandayariFailure: null,

   addmuddaanusandhandayariRequest: ["payload"],
   addmuddaanusandhandayariSuccess: ["response"],
   addmuddaanusandhandayariFailure: null,

   updatemuddaanusandhandayariRequest: ["payload","muddaanusandhandayariId"],
   updatemuddaanusandhandayariSuccess: ["response"],
   updatemuddaanusandhandayariFailure: null,

   deletemuddaanusandhandayariRequest: ["payload","muddaanusandhandayariId"],
   deletemuddaanusandhandayariSuccess: ["response"],
   deletemuddaanusandhandayariFailure: null,


  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const BanbibaranTypes = Types;
export default Creators;
