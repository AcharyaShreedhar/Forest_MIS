const express = require("express");
const router = express.Router();

const dharmikbanBibaranController = require("../controller/dharmikbanBibaranController");
router.get("/dharmikbanBibaran", dharmikbanBibaranController.getAllDharmikbanBibaran);
router.get("/dharmikbanBibaran/dharmikbanBibaranId", dharmikbanBibaranController.getDharmikbanBibaran);
router.post("/dharmikbanBibaran", dharmikbanBibaranController.addDharmikbanBibaran);
router.put("/dharmikbanBibaran", dharmikbanBibaranController.updateDharmikbanBibaran);
router.delete("/dharmikbanBibaran", dharmikbanBibaranController.deleteDharmikbanBibaran);
module.exports = router;
