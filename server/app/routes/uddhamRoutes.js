const express = require("express");
const router = express.Router();

const uddhamBibaranController = require("../controller/uddhamController");
router.post("/uddhamList", uddhamBibaranController.getAllUddhamBibaran);
router.get("/uddham/:uddhamId", uddhamBibaranController.getUddhamBibaran);
router.post("/uddham", uddhamBibaranController.addUddhamBibaran);
router.put("/uddham/:uddhamId", uddhamBibaranController.updateUddhamBibaran);
router.delete("/uddham/:uddhamId", uddhamBibaranController.deleteUddhamBibaran);
module.exports = router;
