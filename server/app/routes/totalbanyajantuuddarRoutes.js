const express = require("express");
const router = express.Router();

const totalBanyajantuuddarController = require("../controller/totalBanyajantuuddarController");
router.post(
  "/totalBanyajantuuddarList",
  totalBanyajantuuddarController.getAllTotalBanyajantuuddar
);

module.exports = router;