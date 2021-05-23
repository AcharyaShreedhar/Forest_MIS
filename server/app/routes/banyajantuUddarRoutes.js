const express = require("express");
const router = express.Router();

const banyajantuUddarController = require("../controller/banyajantuUddarController");
router.get("/banyajantuUddar", banyajantuUddarController.getAllBanyajantuUddar);
router.get("/banyajantuUddar/banyajantuUddarId", banyajantuUddarController.getBanyajantuUddar);
router.post("/banyajantuUddar", banyajantuUddarController.addBanyajantuUddar);
router.put("/banyajantuUddar", banyajantuUddarController.updateBanyajantuUddar);
router.delete("/banyajantuUddar", banyajantuUddarController.deleteBanyajantuUddar);
module.exports = router;
