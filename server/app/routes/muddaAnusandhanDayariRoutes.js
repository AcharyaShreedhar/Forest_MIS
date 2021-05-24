const router = express.Router();

const muddaAnusandhanDayariController = require("../controller/muddaAnusandhanDayariController");
router.get("/muddaAnusandhanDayari", muddaAnusandhanDayariController.getAllMuddaAnusandhanDayari);
router.get("/muddaAnusandhanDayari/muddaAnusandhanDayariId", muddaAnusandhanDayariController.getMuddaAnusandhanDayari);
router.post("/muddaAnusandhanDayari", muddaAnusandhanDayariController.addMuddaAnusandhanDayari);
router.put("/muddaAnusandhanDayari", muddaAnusandhanDayariController.updateMuddaAnusandhanDayari);
router.delete("/muddaAnusandhanDayari", muddaAnusandhanDayariController.deleteMuddaAnusandhanDayari);
module.exports = router;