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

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const BanbibaranTypes = Types;
export default Creators;
