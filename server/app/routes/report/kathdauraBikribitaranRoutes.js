const express = require("express");
const router = express.Router();

const kathdauraBikribitaranController = require("../../controller/report/kathdauraBikribitaranController");
router.post(
  "/kathdaura_bikribitaran",
  kathdauraBikribitaranController.getKathdauraBikribitaran
);

module.exports = router;
