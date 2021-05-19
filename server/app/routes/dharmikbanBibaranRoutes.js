const express = require("express");
const router = express.Router();

const dharmikbanBibaranController = require("../controller/dharmikbanBibaranController");
router.get("/dharmikBibaran", dharmikbanBibaranController.getAllDharmikbanBibaran);
router.get("/dharmikBibaran/dharmikbanBibaranId", dharmikbanBibaranController.getDharmikbanBibaran);
router.post("/dharmikBibaran", dharmikbanBibaranController.addDharmikbanBibaran);
router.put("/dharmikBibaran", dharmikbanBibaranController.updateDharmikbanBibaran);
router.delete("/dharmikBibaran", dharmikbanBibaranController.deleteDharmikbanBibaran);
module.exports = router;
