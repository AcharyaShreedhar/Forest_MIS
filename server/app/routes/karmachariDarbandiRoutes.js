const express = require("express");
const router = express.Router();

const karmachariDarbandiController = require("../controller/karmachariDarbandiController");
router.get("/karmachariDarbandi", karmachariDarbandiController.getAllKarmachariDarbandi);
router.get("/karmachariDarbandi/:karmachariDarbandiId", karmachariDarbandiController.getKarmachariDarbandi);
router.post("/karmachariDarbandi", karmachariDarbandiController.addKarmachariDarbandi);
router.put("/karmachariDarbandi/:karmachariDarbandiId", karmachariDarbandiController.updateKarmachariDarbandi);
router.delete("/karmachariDarbandi/:karmachariDarbandiId", karmachariDarbandiController.deleteKarmachariDarbandi);
module.exports = router;
