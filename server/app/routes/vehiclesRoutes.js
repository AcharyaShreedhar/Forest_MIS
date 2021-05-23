const express = require("express");
const router = express.Router();

const vehiclesController = require("../controller/vehiclesController");
router.get("/vehicles", vehiclesController.getAllVehicles);
router.get("/vehicles/vehicleId", vehiclesController.getVehicles);
router.post("/vehicles", vehiclesController.addVehicles);
router.put("/vehicles", vehiclesController.updateVehicles);
router.delete("/vehicles", vehiclesController.deleteVehicles);
module.exports = router;
