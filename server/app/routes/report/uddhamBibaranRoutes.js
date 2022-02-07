const express = require("express");
const router = express.Router();

const uddhamBibaranController = require("../../controller/report/uddhamBibaranController");
router.post("/banpaidawar_uddham", uddhamBibaranController.getUddhamBibaran);

module.exports = router;
