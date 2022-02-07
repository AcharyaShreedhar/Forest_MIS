const express = require("express");
const router = express.Router();

const upavoktaSusasanController = require("../../controller/report/upavoktaSusasanController");
router.post(
  "/upavokta_susasan",
  upavoktaSusasanController.getUpavoktaSusasanBibaran
);

module.exports = router;
