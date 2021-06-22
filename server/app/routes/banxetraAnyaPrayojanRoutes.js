const express = require("express");
const router = express.Router();

const banxetraAnyaprayojanController = require("../controller/banxetraAnyaprayojanController");
router.post("/banxetraAnyaprayojanList", banxetraAnyaprayojanController.getAllBanxetraAnyaprayojan);
router.get("/banxetraAnyaprayojan/:banxetraAnyaprayojanId", banxetraAnyaprayojanController.getBanxetraAnyaprayojan);
router.post("/banxetraAnyaprayojan",banxetraAnyaprayojanController.addBanxetraAnyaprayojan);
router.put("/banxetraAnyaprayojan/:banxetraAnyaprayojanId", banxetraAnyaprayojanController.updateBanxetraAnyaprayojan);
router.delete("/banxetraAnyaprayojan/:banxetraAnyaprayojanId", banxetraAnyaprayojanController.deleteBanxetraAnyaprayojan);
module.exports = router;