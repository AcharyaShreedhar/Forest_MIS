const express = require("express");
const router = express.Router();

const banyajantuXetiBibaranController = require("../controller/banyajantuXetiBibaranController");
router.get("/banyajantuXetiBibaran", banyajantuXetiBibaranController.getAllBanyajantuXetiBibaran);
router.get("/banyajantuXetiBibaran/banyajantuXetiBibaranId", banyajantuXetiBibaranController.getBanyajantuXetiBibaran);
router.post("/banyajantuXetiBibaran", banyajantuXetiBibaranController.addBanyajantuXetiBibaran);
router.put("/banyajantuXetiBibaran", banyajantuXetiBibaranController.updateBanyajantuXetiBibaran);
router.delete("/banyajantuXetiBibaran", banyajantuXetiBibaranController.deleteBanyajantuXetiBibaran);
module.exports = router;
