const express = require("express");
const router = express.Router();

const rojgariSrijanaController = require("../../controller/report/rojgariSrijanaController");
router.post("/rojgari_srijana", rojgariSrijanaController.getRojgariSrijana);

module.exports = router;
