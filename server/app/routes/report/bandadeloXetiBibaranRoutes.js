const express = require("express");
const router = express.Router();

const bandadeloXetiController = require("../../controller/report/bandadeloXetiBibaranController");
router.post(
  "/bandadelo_xetibibaran",
  bandadeloXetiController.getBandadeloXetiBibaran
);

module.exports = router;
