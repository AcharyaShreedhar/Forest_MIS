const express = require("express");
const router = express.Router();

const samudayikbanBibaranController = require("../controller/samudayikbanBibaranController");
router.get("/samudayikbanBibaran", samudayikbanBibaranController.getAllSamudayikbanBibaran);
router.get("/samudayikbanBibaran/:samudayikbanBibaranId", samudayikbanBibaranController.getSamudayikbanBibaran);
router.post("/samudayikbanBibaran",samudayikbanBibaranController.addSamudayikbanBibaran);
router.put("/samudayikbanBibaran/:samudayikbanBibaranId", samudayikbanBibaranController.updateSamudayikbanBibaran);
router.delete("/samudayikbanBibaran/:samudayikbanBibaranId", samudayikbanBibaranController.deleteSamudayikbanBibaran);
module.exports = router;