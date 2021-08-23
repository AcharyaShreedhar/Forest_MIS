const express = require("express");
const router = express.Router();

const banpaidawarBikriSamuhaController = require("../../controller/report/banpaidawarBikriSamuhaController");
router.post(
  "/banpaidawarbikri_samuha",
  banpaidawarBikriSamuhaController.getBanpaidawarbikriSamuhaBhitra
);

module.exports = router;
