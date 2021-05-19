const express = require("express");
const router = express.Router();

const nijibanBibaranController = require("../controller/nijibanBibaranController");
router.get("/nijibanBibaran", nijibanBibaranController.getAllnijibanBibaran);
router.get("/nijibanBibaran/nijibanBibaranId", nijibanBibaranController.getnijibanBibaran);
router.post("/nijibanBibaran", nijibanBibaranController.addnijibanBibaran);
router.put("/nijibanBibaran", nijibanBibaranController.updatenijibanBibaran);
router.delete("/nijibanBibaran", nijibanBibaranController.deletenijibanBibaran);
module.exports = router;