const express = require("express");
const router = express.Router();

const kabuliyatibanBibaranController = require("../controller/kabuliyatibanBibaranController");
router.get("/kabuliyatibanBibaran", kabuliyatibanBibaranController.getAllKabuliyatibanBibaran);
router.get("/kabuliyatibanBibaran/:kabuliyatibanBibaranId",kabuliyatibanBibaranController.getKabuliyatibanBibaran);
router.post("/kabuliyatibanBibaran", kabuliyatibanBibaranController.addKabuliyatibanBibaran);
router.put("/kabuliyatibanBibaran/:kabuliyatibanBibaranId",kabuliyatibanBibaranController.updateKabuliyatibanBibaran);
router.delete("/kabuliyatibanBibaran/:kabuliyatibanBibaranId", kabuliyatibanBibaranController.deleteKabuliyatibanBibaran);
module.exports = router;