const express = require("express");
const router = express.Router();

const YearlyActivitiesInfoController = require("../controller/yearlyActivitiesInfoController");
router.get("/yearlyActivitiesInfo", yearlyActivitiesInfoController.getAllYearlyActivitiesInfo);
router.get("/yearlyActivitiesInfo/yearlyActivitiesInfoId", yearlyActivitiesInfoController.getYearlyActivitiesInfo);
router.post("/yearlyActivitiesInfo", yearlyActivitiesInfoController.addYearlyActivitiesInfo);
router.put("/yearlyActivitiesInfo", yearlyActivitiesInfoController.updateYearlyActivitiesInfo);
router.delete("/yearlyActivitiesInfo", yearlyActivitiesInfoController.deleteYearlyActivitiesInfo);
module.exports = router;