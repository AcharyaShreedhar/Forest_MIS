const express = require("express");
const router = express.Router();

const banyajantuUddarController = require("../../controller/report/banyajantuUddarController");
router.post(
  "/banyajantu_uddar",
  banyajantuUddarController.getBanyajantuUddarBibaran
);

module.exports = router;
