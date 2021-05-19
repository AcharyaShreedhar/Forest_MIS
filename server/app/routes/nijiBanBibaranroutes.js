const express = require("express");
const router = express.Router();

const nijibanBibaranController = require("../controller/nijibanBibarancontroller");
router.get("/nijibanBibaran", nijibanBibaranController.getAllNijibanBibaran);
router.get("/nijibanBibaran/nijibanBibaranId", nijibanBibaranController.getNijibanBibaran);
router.post("/nijibanBibaran", nijibanBibaranController.addNijibanBibaran);
router.put("/nijibanBibaran", nijibanBibaranController.updateNijibanBibaran);
router.delete("/nijibanBibaran", nijibanBibaranController.deleteNijibanBibaran);
module.exports = router;