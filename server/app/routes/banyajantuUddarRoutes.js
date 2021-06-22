const express = require("express");
const router = express.Router();

const banyajantuUddarController = require("../controller/banyajantuUddarController");
router.post("/banyajantuUddarsList", banyajantuUddarController.getAllBanyajantuUddars);
router.get("/banyajantuUddars/:banyajantuUddarId", banyajantuUddarController.getBanyajantuUddars);
router.post("/banyajantuUddars", banyajantuUddarController.addBanyajantuUddars);
router.put("/banyajantuUddars/:banyajantuUddarId", banyajantuUddarController.updateBanyajantuUddars);
router.delete("/banyajantuUddars/:banyajantuUddarId", banyajantuUddarController.deleteBanyajantuUddars);
module.exports = router;