const express = require("express");
const router = express.Router();

const banbikasKaryabibaranController = require("../controller/banbikasKaryabibaranController");
router.post("/banbikasKaryabibaranList", banbikasKaryabibaranController.getAllBanbikasKaryabibaran);
router.get("/banbikasKaryabibaran/:banbikasKaryabibaranId", banbikasKaryabibaranController.getBanbikasKaryabibaran);
router.post("/banbikasKaryabibaran", banbikasKaryabibaranController.addBanbikasKaryabibaran);
router.put("/banbikasKaryabibaran/:banbikasKaryabibaranId", banbikasKaryabibaranController.updateBanbikasKaryabibaran);
router.delete("/banbikasKaryabibaran/:banbikasKaryabibaranId", banbikasKaryabibaranController.deleteBanbikasKaryabibaran);
module.exports = router;
