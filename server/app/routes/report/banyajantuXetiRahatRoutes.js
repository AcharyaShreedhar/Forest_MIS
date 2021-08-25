const express = require("express");
const router = express.Router();

const banyajantuXetiRahatController = require("../../controller/report/banyajantuXetiRahatController");
router.post(
  "/banyajantu_xeti_rahat",
  banyajantuXetiRahatController.getBanyajantuXetiRahatBibaran
);

module.exports = router;
