const express = require("express");
const router = express.Router();

const assetsController = require("../controller/assetsController");
router.get("/assets", assetsController.getAllAssets);
router.get("/assets/assetsId", assetsController.getAssets);
router.post("/assets", assetsController.addAssets);
router.put("/assets", assetsController.updateAssets);
router.delete("/assets", assetsController.deleteAssets);
module.exports = router;