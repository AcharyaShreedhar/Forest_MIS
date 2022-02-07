const express = require("express");
const router = express.Router();

const dharmikbanBibaranController = require("../controller/dharmikbanBibaranController");
router.post(
  "/dharmikbanBibaranList",
  dharmikbanBibaranController.getAllDharmikbanBibaran
);
router.get(
  "/dharmikbanBibaran/:dharmikbanBibaranId",
  dharmikbanBibaranController.getDharmikbanBibaran
);
router.post(
  "/dharmikbanBibaran",
  dharmikbanBibaranController.addDharmikbanBibaran
);
router.put(
  "/dharmikbanBibaran/:dharmikbanBibaranId",
  dharmikbanBibaranController.updateDharmikbanBibaran
);
router.delete(
  "/dharmikbanBibaran/:dharmikbanBibaranId",
  dharmikbanBibaranController.deleteDharmikbanBibaran
);
module.exports = router;
