const express = require("express");
const router = express.Router();

const baramaditChijbastuController = require("../controller/baramaditChijbastuController");
router.get("/baramaditChijbastu", baramaditChijbastuController.getAllBaramaditChijbastu);
router.get("/baramaditChijbastu/baramaditChijbastuId", baramaditChijbastuController.getBaramaditChijbastu);
router.post("/baramaditChijbastu", baramaditChijbastuController.addBaramaditChijbastu);
router.put("/baramaditChijbastu", baramaditChijbastuController.updateBaramaditChijbastu);
router.delete("/baramaditChijbastu", baramaditChijbastuController.deleteBaramaditChijbastu);
module.exports = router;
