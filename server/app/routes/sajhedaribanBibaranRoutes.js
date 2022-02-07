const express = require("express");
const router = express.Router();
const sajhedaribanBibaranController = require("../controller/sajhedaribanBibaranController");
router.post(
  "/sajhedaribanBibaranList",
  sajhedaribanBibaranController.getAllSajhedaribanBibaran
);
router.get(
  "/sajhedaribanBibaran/:sajhedaribanBibaranId",
  sajhedaribanBibaranController.getSajhedaribanBibaran
);
router.post("/sajhedaribanBibaran", sajhedaribanBibaranController.addSajhedaribanBibaran);
router.put(
  "/sajhedaribanBibaran/:sajhedaribanBibaranId",
  sajhedaribanBibaranController.updateSajhedaribanBibaran
);
router.delete(
  "/sajhedaribanBibaran/:sajhedaribanBibaranId",
  sajhedaribanBibaranController.deleteSajhedaribanBibaran
);
module.exports = router;