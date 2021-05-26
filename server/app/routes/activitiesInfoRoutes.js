
const express = require("express");
const router = express.Router();

const activitiesInfoController = require("../controller/activitiesInfoController");
router.get("/activitiesInfo", activitiesInfoController.getAllActivitiesInfo);
router.get("/activitiesInfo/:activitiesInfoId", activitiesInfoController.getActivitiesInfo);
router.post("/activitiesInfo", activitiesInfoController.addActivitiesInfo);
router.put("/activitiesInfo/:activitiesInfoId", activitiesInfoController.updateActivitiesInfo);
router.delete("/activitiesInfo/:activitiesInfoId", activitiesInfoController.deleteActivitiesInfo);
module.exports = router;