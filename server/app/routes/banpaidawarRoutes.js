const express = require("express");
const router = express.Router();

const banpaidawarController = require("../controller/BanpaidawarController");
router.get("/banpaidawar", banpaidawarController.getAllBanpaidawar);
router.get("/banpaidawar/:banpaidawarId", banpaidawarController.getBanpaidawar);
router.post("/banpaidawar", banpaidawarController.addBanpaidawar);
router.put("/banpaidawar/:banpaidawarId", banpaidawarController.updateBanpaidawar);
router.delete("/banpaidawar/:banpaidawarId", banpaidawarController.deleteBanpaidawar);
module.exports = router;
