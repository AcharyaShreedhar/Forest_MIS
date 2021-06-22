const express = require("express");
const router = express.Router();

const banyajantuXetiBibaranController = require("../controller/banyajantuXetiBibaranController");
router.post("/banyajantuXetiBibaransList", banyajantuXetiBibaranController.getAllBanyajantuXetiBibarans);
router.get("/banyajantuXetiBibarans/:banyajantuxetiBibaranId", banyajantuXetiBibaranController.getBabyajantuXetiBibarans);
router.post("/banyajantuXetiBibarans", banyajantuXetiBibaranController.addBanyajantuXetiBibarans);
router.put("/banyajantuXetiBibarans/:banyajantuxetiBibaranId", banyajantuXetiBibaranController.updateBanyajantuXetiBibarans);
router.delete("/banyajantuXetiBibarans/:banyajantuxetiBibaranId", banyajantuXetiBibaranController.deleteBanyajantuXetiBibarans);
module.exports = router;