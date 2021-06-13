const express = require("express");
const router = express.Router();

const provinceController = require("../controller/provinceController");
router.get("/province", provinceController.getAllProvince);
router.get("/province/:provinceId", provinceController.getProvince);
router.post("/province", provinceController.addProvince);
router.put("/province/:provinceId", provinceController.updateProvince);
router.delete("/province/:provinceId", provinceController.deleteProvince);
module.exports = router;
