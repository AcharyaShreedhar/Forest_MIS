const express = require("express");
const router = express.Router();

const provinceController = require("../controller/provinceController");
router.get("/province", provinceController.getAllProvince);
router.get("/province/provinceId", provinceController.getProvince);
module.exports = router;
