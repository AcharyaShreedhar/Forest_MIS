const express = require("express");
const router = express.Router();

const banxetraAtikramanAreaController = require("../controller/banxetraAtikramanAreaController");
router.get("/banxetraAtikramanArea", banxetraAtikramanAreaController.getAllBanxetraAtikramanArea);
router.get("/banxetraAtikramanArea/banxetraAtikramanAreaId", banxetraAtikramanAreaController.getBanxetraAtikramanArea);
router.post("/banxetraAtikramanArea", banxetraAtikramanAreaController.addBanxetraAtikramanArea);
router.put("/banxetraAtikramanArea", banxetraAtikramanAreaController.updateBanxetraAtikramanArea);
router.delete("/banxetraAtikramanArea", banxetraAtikramanAreaController.deleteBanxetraAtikramanArea);
module.exports = router;