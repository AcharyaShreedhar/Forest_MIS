const express = require("express");
const router = express.Router();

const jadibutiController = require("../controller/jadibutiController");
router.post("/jadibutiList", jadibutiController.getAllJadibuti);
router.get("/jadibuti/:jadibutiId", jadibutiController.getJadibuti);
router.post("/jadibuti", jadibutiController.addJadibuti);
router.put("/jadibuti/:jadibutiId", jadibutiController.updateJadibuti);
router.delete("/jadibuti/:jadibutiId", jadibutiController.deleteJadibuti);
module.exports = router;
