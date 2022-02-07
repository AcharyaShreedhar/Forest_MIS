const express = require("express");
const router = express.Router();

const pahiroBibaranController = require("../controller/pahiroBibaranController");
router.post("/pahiroBibaranList", pahiroBibaranController.getAllPahiroBibaran);
router.get(
  "/pahiroBibaran/:pahiroBibaranId",
  pahiroBibaranController.getPahiroBibaran
);
router.post("/pahiroBibaran", pahiroBibaranController.addPahiroBibaran);
router.put(
  "/pahiroBibaran/:pahiroBibaranId",
  pahiroBibaranController.updatePahiroBibaran
);
router.delete(
  "/pahiroBibaran/:pahiroBibaranId",
  pahiroBibaranController.deletePahiroBibaran
);
module.exports = router;
