const express = require("express");
const router = express.Router();

const districtController = require("../controller/districtController");
router.get("/district", districtController.getAllDistrict);
router.get("/district/districtId", districtController.getDistrict);
router.post("/district", districtController.addDistrict);
router.put("/district", districtController.updateDistrict);
router.delete("/district", districtController.deleteDistrict);
module.exports = router;
