const express = require("express");
const router = express.Router();

const districtController = require("../controller/districtController");
router.get("/districtlist/:provinceId", districtController.getAllDistrict);
router.get("/district/:districtId", districtController.getDistrict);
router.post("/district", districtController.addDistrict);
router.put("/district/:districtId", districtController.updateDistrict);
router.delete("/district/:districtId", districtController.deleteDistrict);
module.exports = router;
