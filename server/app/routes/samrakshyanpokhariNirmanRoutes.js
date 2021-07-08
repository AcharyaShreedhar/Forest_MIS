const express = require("express");
const router = express.Router();
const samrakshyanpokhariNirmanController = require("../controller/SamrakshyanpokhariNirmanController");
router.post(
  "/samrakshyanpokhariNirmanList",
  samrakshyanpokhariNirmanController.getAllSamrakshyanpokhariNirman
);
router.get(
  "/samrakshyanpokhariNirman/:samrakshyanpokhariNirmanId",
  samrakshyanpokhariNirmanController.getSamrakshyanpokhariNirman
);
router.post("/samrakshyanpokhariNirman", samrakshyanpokhariNirmanController.addSamrakshyanpokhariNirman);
router.put(
  "/samrakshyanpokhariNirman/:samrakshyanpokhariNirmanId",
  samrakshyanpokhariNirmanController.updateSamrakshyanpokhariNirman
);
router.delete(
  "/samrakshyanpokhariNirman/:samrakshyanpokhariNirmanId",
  samrakshyanpokhariNirmanController.deleteSamrakshyanpokhariNirman
);
module.exports = router;