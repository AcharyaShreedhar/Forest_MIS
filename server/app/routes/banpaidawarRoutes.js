const express = require("express");
const router = express.Router();

const banpaidawarController = require("../controller/banpaidawarController");
router.get("/banpaidawar", banpaidawarController.getAllBanpaidawar);
router.get("/banpaidawar/banpaidawarId", banpaidawarController.getBanpaidawar);
router.post("/banpaidawar", banpaidawarController.addBanpaidawar);
router.put("/banpaidawar", banpaidawarController.updateBanpaidawar);
router.delete("/banpaidawar", banpaidawarController.deleteBanpaidawar);
module.exports = router;

