const express = require("express");
const router = express.Router();

const kabuliyatibanBibaranController = require("../controller/kabuliyatibanController");
router.get("/kabuliyatibanBiabaran", kabuliyatibanBiabaranController.getAllKabuliyatibanBiabaran);
router.get("/kabuliyatibanBiabaran/kabuliyatibanBiabaranId", kabuliyatibanBiabaranController.getKabuliyatibanBiabaran);
router.post("/kabuliyatibanBiabaran", kabuliyatibanBiabaranController.addKabuliyatibanBiabaran);
router.put("/kabuliyatibanBiabaran", kabuliyatibanBiabaranController.updateKabuliyatibanBiabaran);
router.delete("/kabuliyatibanBiabaran", kabuliyatibanBiabaranController.deleteKabuliyatibanBiabaran);
module.exports = router;