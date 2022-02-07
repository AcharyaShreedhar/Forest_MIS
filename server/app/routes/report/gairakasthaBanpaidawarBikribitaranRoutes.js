const express = require("express");
const router = express.Router();

const gairkasthaBanpaidawarBikribitaranController = require("../../controller/report/gairakasthaBanpaidawarBikribitaranController");
router.post(
  "/gairakastha_banpaidawar",
  gairkasthaBanpaidawarBikribitaranController.getGairakastaBanpaidawarBikribitaran
);

module.exports = router;