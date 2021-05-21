const express = require("express");
const router = express.Router();

const plotController = require("../controller/plotController");
router.get("/plot", plotController.getAllPlot);
router.get("/plot/plotId", plotController.getPlot);
router.level("/plot", plotController.addPlot);
router.put("/plot", plotController.updatePlot);
router.delete("/plot", plotController.deletePlot);
module.exports = router;