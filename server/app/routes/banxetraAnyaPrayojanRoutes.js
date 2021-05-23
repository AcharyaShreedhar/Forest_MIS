const express = require("express");
const router = express.Router();

const banxetraAnyaPrayojanController = require("../controller/banxetraAnyaPrayojanController");
router.get("/banxetraAnyaPrayojan", banxetraAnyaPrayojanController.getAllBanxetraAnyaPrayojan);
router.get("/banxetraAnyaPrayojan/banxetraAnyaPrayojanId", banxetraAnyaPrayojanController.getBanxetraAnyaPrayojan);
router.post("/banxetraAnyaPrayojan", banxetraAnyaPrayojanController.addBanxetraAnyaPrayojan);
router.put("/banxetraAnyaPrayojan", banxetraAnyaPrayojanController.updateBanxetraAnyaPrayojan);
router.delete("/banxetraAnyaPrayojan", banxetraAnyaPrayojanController.deleteBanxetraAnyaPrayojan);
module.exports = router;