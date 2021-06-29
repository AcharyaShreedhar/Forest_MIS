const express = require("express");
const router = express.Router();
 
const chaklabanBibaranController = require("../controller/chaklabanBibaranController");
router.post(
  "/chaklabanBibaranList",
  chaklabanBibaranController.getAllChaklabanBibaran
);
router.get(
  "/chaklabanBibaran/:chaklabanBibaranId",
  chaklabanBibaranController.getChaklabanBibaran
);
router.post(
  "/chaklabanBibaran",
  chaklabanBibaranController.addChaklabanBibaran
);
router.put(
  "/chaklabanBibaran/:chaklabanBibaranId",
  chaklabanBibaranController.updateChaklabanBibaran
);
router.delete(
  "/chaklabanBibaran/:chaklabanBibaranId",
  chaklabanBibaranController.deleteChaklabanBibaran
);
module.exports = router;
