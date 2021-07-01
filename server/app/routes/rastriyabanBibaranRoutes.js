const express = require("express");
const router = express.Router();

const rastriyabanBibaranController = require("../controller/rastriyabanBibaranController");
router.post("/rastriyabanBibaranList", rastriyabanBibaranController.getAllRastriyabanBibaran);
router.get("/rastriyabanBibaran/:rastriyabanBibaranId", rastriyabanBibaranController.getRastriyabanBibaran);
router.post("/rastriyabanBibaran", rastriyabanBibaranController.addRastriyabanBibaran);
router.put("/rastriyabanBibaran/:rastriyabanBibaranId", rastriyabanBibaranController.updateRastriyabanBibaran);
router.delete("/rastriyabanBibaran/:rastriyabanBibaranId", rastriyabanBibaranController.deleteRastriyabanBibaran);
module.exports = router;
