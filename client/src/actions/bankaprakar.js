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
  fetchallsamudayikbanbibaranRequest: ["payload"],
  fetchallsamudayikbanbibaranSuccess: ["response"],
  fetchallsamudayikbanbibaranFailure: null,

  fetchsamudayikbanbibaranRequest: ["payload"],
  fetchsamudayikbanbibaranSuccess: ["response"],
  fetchsamudayikbanbibaranFailure: null,

  addsamudayikbanbibaranRequest: ["payload"],
  addsamudayikbanbibaranSuccess: ["response"],
  addsamudayikbanbibaranFailure: null,

  updatesamudayikbanbibaranRequest: ["payload", "samudayikbanbibaranId"],
  updatesamudayikbanbibaranSuccess: ["response"],
  updatesamudayikbanbibaranFailure: null,

  deletesamudayikbanbibaranRequest: ["payload", "samudayikbanbibaranId"],
  deletesamudayikbanbibaranSuccess: ["response"],
  deletesamudayikbanbibaranFailure: null,

  fetchalldharmikbanbibaranRequest: ["payload"],
  fetchalldharmikbanbibaranSuccess: ["response"],
  fetchalldharmikbanbibaranFailure: null,

  fetchdharmikbanbibaranRequest: ["payload"],
  fetchdharmikbanbibaranSuccess: ["response"],
  fetchdharmikbanbibaranFailure: null,

  adddharmikbanbibaranRequest: ["payload"],
  adddharmikbanbibaranSuccess: ["response"],
  adddharmikbanbibaranFailure: null,

  updatedharmikbanbibaranRequest: ["payload", "dharmikbanbibaranId"],
  updatedharmikbanbibaranSuccess: ["response"],
  updatedharmikbanbibaranFailure: null,

  deletedharmikbanbibaranRequest: ["payload", "dharmikbanbibaranId"],
  deletedharmikbanbibaranSuccess: ["response"],
  deletedharmikbanbibaranFailure: null,

  fetchallnijibanbibaranRequest: ["payload"],
  fetchallnijibanbibaranSuccess: ["response"],
  fetchallnijibanbibaranFailure: null,

  fetchnijibanbibaranRequest: ["payload"],
  fetchnijibanbibaranSuccess: ["response"],
  fetchnijibanbibaranFailure: null,

  addnijibanbibaranRequest: ["payload"],
  addnijibanbibaranSuccess: ["response"],
  addnijibanbibaranFailure: null,

  updatenijibanbibaranRequest: ["payload", "nijibanbibaranId"],
  updatenijibanbibaranSuccess: ["response"],
  updatenijibanbibaranFailure: null,

  deletenijibanbibaranRequest: ["payload", "nijibanbibaranId"],
  deletenijibanbibaranSuccess: ["response"],
  deletenijibanbibaranFailure: null,

  fetchallkabuliyatibanbibaranRequest: ["payload"],
  fetchallkabuliyatibanbibaranSuccess: ["response"],
  fetchallkabuliyatibanbibaranFailure: null,

  fetchkabuliyatibanbibaranRequest: ["payload"],
  fetchkabuliyatibanbibaranSuccess: ["response"],
  fetchkabuliyatibanbibaranFailure: null,

  addkabuliyatibanbibaranRequest: ["payload"],
  addkabuliyatibanbibaranSuccess: ["response"],
  addkabuliyatibanbibaranFailure: null,

  updatekabuliyatibanbibaranRequest: ["payload", "kabuliyatibanbibaranId"],
  updatekabuliyatibanbibaranSuccess: ["response"],
  updatekabuliyatibanbibaranFailure: null,

  deletekabuliyatibanbibaranRequest: ["payload", "kabuliyatibanbibaranId"],
  deletekabuliyatibanbibaranSuccess: ["response"],
  deletekabuliyatibanbibaranFailure: null,

  fetchallnabikarankaryayojanaRequest: ["payload"],
  fetchallnabikarankaryayojanaSuccess: ["response"],
  fetchallnabikarankaryayojanaFailure: null,

  fetchnabikarankaryayojanaRequest: ["payload"],
  fetchnabikarankaryayojanaSuccess: ["response"],
  fetchnabikarankaryayojanaFailure: null,

  addnabikarankaryayojanaRequest: ["payload"],
  addnabikarankaryayojanaSuccess: ["response"],
  addnabikarankaryayojanaFailure: null,

  updatenabikarankaryayojanaRequest: ["payload", "nabikarankaryayojanaId"],
  updatenabikarankaryayojanaSuccess: ["response"],
  updatenabikarankaryayojanaFailure: null,

  deletenabikarankaryayojanaRequest: ["payload", "nabikarankaryayojanaId"],
  deletenabikarankaryayojanaSuccess: ["response"],
  deletenabikarankaryayojanaFailure: null,

  //rastriyabanbibaran
  fetchallrastriyabanbibaranRequest: ["payload"],
  fetchallrastriyabanbibaranSuccess: ["response"],
  fetchallrastriyabanbibaranFailure: null,

  fetchrastriyabanbibaranRequest: ["payload"],
  fetchrastriyabanbibaranSuccess: ["response"],
  fetchrastriyabanbibaranFailure: null,

  addrastriyabanbibaranRequest: ["payload"],
  addrastriyabanbibaranSuccess: ["response"],
  addrastriyabanbibaranFailure: null,

  updaterastriyabanbibaranRequest: ["payload", "rastriyabanbibaranId"],
  updaterastriyabanbibaranSuccess: ["response"],
  updaterastriyabanbibaranFailure: null,

  deleterastriyabanbibaranRequest: ["payload", "rastriyabanbibaranId"],
  deleterastriyabanbibaranSuccess: ["response"],
  deleterastriyabanbibaranFailure: null,
  
  //commercialkabuliyatibanbibaran
  fetchallcommercialkabuliyatibanbibaranRequest: ["payload"],
  fetchallcommercialkabuliyatibanbibaranSuccess: ["response"],
  fetchallcommercialkabuliyatibanbibaranFailure: null,

  fetchcommercialkabuliyatibanbibaranRequest: ["payload"],
  fetchcommercialkabuliyatibanbibaranSuccess: ["response"],
  fetchcommercialkabuliyatibanbibaranFailure: null,

  //-----ConsumergroupDetails
  fetchallconsumergroupdetailsRequest: ["payload"],
  fetchallconsumergroupdetailsSuccess: ["response"],
  fetchallconsumergroupdetailsFailure: null,

  fetchconsumergroupdetailsRequest: ["payload"],
  fetchconsumergroupdetailsSuccess: ["response"],
  fetchconsumergroupdetailsFailure: null,

  addconsumergroupdetailsRequest: ["payload"],
  addconsumergroupdetailsSuccess: ["response"],
  addconsumergroupdetailsFailure: null,

  locationsRequest: ["payload"],
  // Clear all caches
  clearRequest: null,
});

export const BankaprakarTypes = Types;
export default Creators;
