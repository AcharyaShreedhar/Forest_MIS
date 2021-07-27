const express = require("express");
const router = express.Router();

const totalBantypesController = require("../controller/totalBantypesController");
router.post(
  "/totalBantypesList",
  totalBantypesController.getAllTotalBantypes
);

module.exports = router;