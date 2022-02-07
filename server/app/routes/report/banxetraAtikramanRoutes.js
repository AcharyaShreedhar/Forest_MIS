const express = require("express");
const router = express.Router();

const banxetraAtikramanController = require("../../controller/report/banxetraatikramanNiyantranBibaranController");
router.post(
  "/banxetra_atikraman",
  banxetraAtikramanController.getBanxetraAtikraman
);

module.exports = router;
