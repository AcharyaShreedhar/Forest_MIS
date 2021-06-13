const express = require("express");
const router = express.Router();

const nijibanBibaranController = require("../controller/nijibanBibaranController");
router.get("/nijibanBibaran", nijibanBibaranController.getAllNijibanBibaran);
router.get("/nijibanBibaran/:nijibanBibaranId", nijibanBibaranController.getNijibanBibaran);
router.post("/nijibanBibaran", nijibanBibaranController.addNijibanBibaran);
router.put("/nijibanBibaran/:nijibanBibaranId", nijibanBibaranController.updateNijibanBibaran);
router.delete("/nijibanBibaran/:nijibanBibaranId", nijibanBibaranController.deleteNijibanBibaran);
module.exports = router;