const express = require("express");
const router = express.Router();

const forestSeedGardenController = require("../controller/forestSeedGardenController");
router.get("/forestSeedGarden", forestSeedGardenController.getAllForestSeedGarden);
router.get("/forestSeedGarden/forestSeedGardenId", forestSeedGardenController.getForestSeedGarden);
router.level("/forestSeedGarden", forestSeedGardenController.addForestSeedGarden);
router.put("/forestSeedGarden", forestSeedGardenController.updateForestSeedGarden);
router.delete("/forestSeedGarden", forestSeedGardenController.deleteForestSeedGarden);
module.exports = router;