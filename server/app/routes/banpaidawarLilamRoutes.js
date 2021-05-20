const express = require("express");
const router = express.Router();

const banpaidawarLilamController = require("../controller/banpaidawarLilamController");
router.get("/banpaidawarLilam", provinceController.getAllBanpaidawarLilam);
router.get("/banpaidawarLilam/banpaidawarLilamId", banpaidawarLilamController.getBanpaidawarLilam);
router.post("/banpaidawarLilam", banpaidawarLilamController.addBanpaidawarLilam);
router.put("/banpaidawarLilam", banpaidawarLilamController.updateBanpaidawarLilam);
router.delete("/banpaidawarLilam", banpaidawarLilamController.deletebanpaidawarLilam);
module.exports = router;