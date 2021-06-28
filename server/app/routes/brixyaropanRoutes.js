const express = require("express");
const router = express.Router();

const brixyaropanController = require("../controller/brixyaropanController");
router.post("/brixyaropanList", brixyaropanController.getAllBrixyaropan);
router.get("/brixyaropan/:brixyaropanId", brixyaropanController.getBrixyaropan);
router.post("/brixyaropan", brixyaropanController.addBrixyaropan);
router.put("/brixyaropan/:brixyaropanId", brixyaropanController.updateBrixyaropan);
router.delete("/brixyaropan/:brixyaropanId", brixyaropanController.deleteBrixyaropan);
module.exports = router;
