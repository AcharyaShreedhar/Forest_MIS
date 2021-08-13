const express = require("express");
const router = express.Router();

const totalBanyajantuxetiController = require("../controller/totalBanyajantuxetiController");
router.post(
  "/totalBanyajantuxetiList",
  totalBanyajantuxetiController.getAllTotalBanyajantuxeti
);

module.exports = router;