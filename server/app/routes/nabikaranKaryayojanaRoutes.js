const express = require("express");
const router = express.Router();

const nabikaranKaryayojanaController = require("../controller/nabikaranKaryayojanaController");
router.get("/nabikaranKaryayojana", nabikaranKaryayojanaController.getAllNabikaranKaryayojana);
router.get("/nabikaranKaryayojana/:nabikaranKaryayojanaId", nabikaranKaryayojanaController.getNabikaranKaryayojana);
router.post("/nabikaranKaryayojana", nabikaranKaryayojanaController.addNabikaranKaryayojana);
router.put("/nabikaranKaryayojana/:nabikaranKaryayojanaId", nabikaranKaryayojanaController.updateNabikaranKaryayojana);
router.delete("/nabikaranKaryayojana/:nabikaranKaryayojanaId", nabikaranKaryayojanaController.deleteNabikaranKaryayojana);
module.exports = router;
