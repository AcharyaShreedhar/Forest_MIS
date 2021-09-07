const express = require("express");
const router = express.Router();

const biruwaUtpadanKharidController = require("../../controller/report/biruwaUtpadanKharidController");
router.post(
  "/biruwautpadan_kharid",
  biruwaUtpadanKharidController.getBiruwaUtpadanKharid
);

module.exports = router;
