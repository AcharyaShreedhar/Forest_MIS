const express = require("express");
const router = express.Router();

const banHastantaranBibaranController = require("../../controller/report/banHastantaranBibaranController");
router.post(
  "/banhastantaran_bibaran",
  banHastantaranBibaranController.getbanHastantaranBibaran
);

module.exports = router;
