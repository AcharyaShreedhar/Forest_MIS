const express = require("express");
const router = express.Router();

const religiousForestBibaranController = require("../controller/religiousForestBibaranController");
router.get("/religiousForestBibaran", religiousForestBibaranController.getAllReligiousForestBibaran);
router.get("/religiousForestBibaran/religiousForestBibaranId", religiousForestBibaranController.getProvince);
router.post("/preligiousForestBibaran", religiousForestBibaranController.addReligiousForestBibaran);
router.put("/preligiousForestBibaran", religiousForestBibaranController.updateReligiousForestBibaran);
router.delete("/religiousForestBibaran", religiousForestBibaranController.deleteReligiousForestBibaran);
module.exports = router;
