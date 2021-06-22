const express = require("express");
const router = express.Router();

const banpaidawarLilamController = require("../controller/banpaidawarLilamController");
router.post(
  "/banpaidawarLilamList",
  banpaidawarLilamController.getAllBanpaidawarLilam
);
router.get(
  "/banpaidawarLilam/:banpaidawarLilamId",
  banpaidawarLilamController.getBanpaidawarLilam
);
router.post(
  "/banpaidawarLilam",
  banpaidawarLilamController.addBanpaidawarLilam
);
router.put(
  "/banpaidawarLilam/:banpaidawarLilamId",
  banpaidawarLilamController.updateBanpaidawarLilam
);
router.delete(
  "/banpaidawarLilam/:banpaidawarLilamId",
  banpaidawarLilamController.deleteBanpaidawarLilam
);
module.exports = router;
