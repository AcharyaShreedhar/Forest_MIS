const express = require("express");
const router = express.Router();

const paheroBibaranController = require("../controller/paheroBibaranController");
router.post("/paheroBibaranList", paheroBibaranController.getAllPaheroBibaran);
router.get(
  "/paheroBibaran/:paheroBibaranId",
  paheroBibaranController.getPaheroBibaran
);
router.post("/paheroBibaran", paheroBibaranController.addPaheroBibaran);
router.put(
  "/paheroBibaran/:paheroBibaranId",
  paheroBibaranController.updatePaheroBibaran
);
router.delete(
  "/paheroBibaran/:paheroBibaranId",
  paheroBibaranController.deletePaheroBibaran
);
module.exports = router;
