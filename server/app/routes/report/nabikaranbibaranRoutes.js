const express = require("express");
const router = express.Router();

const nabikaranBibaranController = require("../../controller/report/nabikaranbibaranController");
router.post(
  "/nabikaranBibaran",
  nabikaranBibaranController.getNabikaranBibaran
);

module.exports = router;