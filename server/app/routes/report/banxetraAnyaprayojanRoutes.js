const express = require("express");
const router = express.Router();

const banxetraAnyaprayojanController = require("../../controller/report/banxetraAnyaprayojanController");
router.post(
  "/banxetra_anyaprayojan",
  banxetraAnyaprayojanController.getBanxetraAnyaprayojanBibaran
);

module.exports = router;
