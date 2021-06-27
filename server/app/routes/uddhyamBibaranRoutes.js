const express = require("express");
const router = express.Router();

const uddhyamBibaranController = require("../controller/uddhyamBibaranController");
router.post("/uddhyamBibaranList", uddhyamBibaranController.getAllUddhyamBibaran);
router.get("/uddhyamBibaran/:uddhyamId", uddhyamBibaranController.getUddhyamBibaran);
router.post("/uddhyamBibaran", uddhyamBibaranController.addUddhyamBibaran);
router.put("/uddhyamBibaran/:uddhyamId", uddhyamBibaranController.updateUddhyamBibaran);
router.delete("/uddhyamBibaran/:uddhyamId", uddhyamBibaranController.deleteUddhyamBibaran);
module.exports = router;
