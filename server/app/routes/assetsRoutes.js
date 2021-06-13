const express = require("express");
const router = express.Router();

const assetsController = require("../controller/assetsController");
router.get("/assets", assetsController.getAllAssets);
router.get("/assets/:assetId", assetsController.getAssets);
router.post("/assets", assetsController.addAsets);
router.put("/assets/:assetId", assetsController.updateAssets);
router.delete("/assets/:assetId", assetsController.deleteAssets);
module.exports = router;