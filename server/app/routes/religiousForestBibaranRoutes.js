const express = require("express");
const router = express.Router();

const religiousForestBibaranController = require("../controller/religiousForestBibaranController");
router.get("/religiousForestBibaran", religiousForestBibaranController.getAllreligiousForestBibaran);
router.get("/religiousForestBibaran/religiousForestBibaranId", religiousForestBibaranController.getProvince);
router.post("/preligiousForestBibaran", religiousForestBibaranController.addreligiousForestBibaran);
router.put("/preligiousForestBibaran", religiousForestBibaranController.updatereligiousForestBibaran);
router.delete("/religiousForestBibaran", religiousForestBibaranController.deletereligiousForestBibaran);
module.exports = router;