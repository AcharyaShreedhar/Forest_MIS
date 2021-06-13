const express = require("express");
const router = express.Router();

const muddaAnusandhanDayariController = require("../controller/muddaAnusandhanDayariController");
router.get("/muddaAnusandhanDayaris", muddaAnusandhanDayariController.getAllMuddaAnusandhanDayaris);
router.get("/muddaAnusandhanDayaris/:muddaAnusandhanDayariId", muddaAnusandhanDayariController.getMuddaAnusandhanDayaris);
router.post("/muddaAnusandhanDayaris", muddaAnusandhanDayariController.addMuddaAnusandhanDayaris);
router.put("/muddaAnusandhanDayaris/:muddaAnusandhanDayariId", muddaAnusandhanDayariController.updateMuddaAnusandhanDayaris);
router.delete("/muddaAnusandhanDayaris/:muddaAnusandhanDayariId", muddaAnusandhanDayariController.deleteMuddaAnusandhanDayaris);
module.exports = router;