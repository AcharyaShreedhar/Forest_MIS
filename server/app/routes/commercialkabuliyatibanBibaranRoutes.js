const express = require("express");
const router = express.Router();
const commercialkabuliyatibanBibaranController = require("../controller/commercialkabuliyatibanBibaranController");
router.post(
  "/commercialkabuliyatibanBibaranList",
  commercialkabuliyatibanBibaranController.getAllCommercialkabuliyatibanBibaran
);
router.get(
  "/commercialkabuliyatibanBibaran/:commercialkabuliyatibanBibaranId",
  commercialkabuliyatibanBibaranController.getCommercialkabuliyatibanBibaran
);
router.post("/commercialkabuliyatibanBibaran", commercialkabuliyatibanBibaranController.addCommercialkabuliyatibanBibaran);
router.put(
  "/commercialkabuliyatibanBibaran/:commercialkabuliyatibanBibaranId",
  commercialkabuliyatibanBibaranController.updateCommercialkabuliyatibanBibaran
);
router.delete(
  "/commercialkabuliyatibanBibaran/:commercialkabuliyatibanBibaranId",
  commercialkabuliyatibanBibaranController.deleteCommercialkabuliyatibanBibaran
);
module.exports = router;