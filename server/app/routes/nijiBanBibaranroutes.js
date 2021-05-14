const express = require("express");
const router = express.Router();

const NijibanBibaranController = require("../controller/NijibanBibaranController");
router.get("/province", NijibanBibaranController.getAllNijibanBibaran);
router.get("/province/provinceId", NijibanBibaranController.getNijibanBibaran);
router.post("/province", NijibanBibaranController.addNijibanBibaran);
router.put("/province", NijibanBibaranController.updateNijibanBibaran);
router.delete("/province", NijibanBibaranController.deleteNijibanBibaran);
module.exports = router;