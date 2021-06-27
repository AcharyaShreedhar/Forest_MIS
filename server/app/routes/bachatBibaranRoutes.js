const express = require("express");
const router = express.Router();

const bachatBibaranController = require("../controller/bachatBibaranController");
router.post("/bachatBibaranList", bachatBibaranController.getAllBachatBibaran);
router.get("/bachatBibaran/:bachatId", bachatBibaranController.getBachatBibaran);
router.post("/bachatBibaran", bachatBibaranController.addBachatBibaran);
router.put("/bachatBibaran/:bachatId", bachatBibaranController.updateBachatBibaran);
router.delete("/bachatBibaran/:bachatId", bachatBibaranController.deleteBachatBibaran);
module.exports = router;
