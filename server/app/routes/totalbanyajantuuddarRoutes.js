const express = require("express");
const router = express.Router();

const totalBanyajantuuddarController = require("../controller/totalbanyajantuuddarController");
router.post(
  "/totalBanyajantuuddarList",
  totalBanyajantuuddarController.getAllTotalBanyajantuuddar
);

module.exports = router;