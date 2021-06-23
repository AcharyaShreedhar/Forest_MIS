const express = require("express");
const router = express.Router();

const plotController = require("../controller/plotController");
router.post("/plotList", plotController.getAllPlot);
router.get("/plot/:plotId", plotController.getPlot);
router.post("/plot", plotController.addPlot);
router.put("/plot/:plotId", plotController.updatePlot);
router.delete("/plot/:plotId", plotController.deletePlot);
module.exports = router;