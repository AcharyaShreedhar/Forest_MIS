const express = require("express");
const router = express.Router();

const muddaAnusandhandayariController = require("../../controller/report/muddaAnusandhandayariController");
router.post(
  "/mudda_anusandhan_dayari",
  muddaAnusandhandayariController.getMuddaAnusandhandayariBibaran
);

module.exports = router;
