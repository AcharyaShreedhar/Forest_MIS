const express = require("express");
const router = express.Router();

const nijibanBibaranController = require("../controller/nijibanBibaranController");
router.get("/province", nijibanBibaranController.getAllnijibanBibaran);
router.get("/province/provinceId", nijibanBibaranController.getnijibanBibaran);
router.post("/province", nijibanBibaranController.addnijibanBibaran);
router.put("/province", nijibanBibaranController.updatenijibanBibaran);
router.delete("/province", nijibanBibaranController.deletenijibanBibaran);
module.exports = router;