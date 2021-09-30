import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  //---- banle srijana gareko rojagari
  fetchallrojgarsrijanaRequest: ["payload"],
  fetchallrojgarsrijanaSuccess: ["response"],
  fetchallrojgarsrijanaFailure: null,

  fetchrojgarsrijanaRequest: ["payload"],
  fetchrojgarsrijanaSuccess: ["response"],
  fetchrojgarsrijanaFailure: null,

  addrojgarsrijanaRequest: ["payload"],
  addrojgarsrijanaSuccess: ["response"],
  addrojgarsrijanaFailure: null,

  updaterojgarsrijanaRequest: ["payload", "rojgarsrijanaId"],
  updaterojgarsrijanaSuccess: ["response"],
  updaterojgarsrijanaFailure: null,

  deleterojgarsrijanaRequest: ["payload", "rojgarsrijanaId"],
  deleterojgarsrijanaSuccess: ["response"],
  deleterojgarsrijanaFailure: null,

  //---- uddham sambhandhi Bibaran
  fetchalluddhamRequest: ["payload"],
  fetchalluddhamSuccess: ["response"],
  fetchalluddhamFailure: null,

  fetchuddhamRequest: ["payload"],
  fetchuddhamSuccess: ["response"],
  fetchuddhamFailure: null,

  adduddhamRequest: ["payload"],
  adduddhamSuccess: ["response"],
  adduddhamFailure: null,

  updateuddhamRequest: ["payload", "uddhamId"],
  updateuddhamSuccess: ["response"],
  updateuddhamFailure: null,

  deleteuddhamRequest: ["payload", "uddhamId"],
  deleteuddhamSuccess: ["response"],
  deleteuddhamFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const MiscellaneousTypes = Types;
export default Creators;
