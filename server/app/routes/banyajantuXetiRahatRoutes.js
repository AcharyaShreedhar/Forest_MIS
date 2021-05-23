const express = require("express");
const router = express.Router();

const banyajantuXetiRahatController = require("../controller/banyajantuXetiRahatController");
router.get("/banyajantuXetiRahat", banyajantuXetiRahatController.getAllBanyajantuXetiRahat);
router.get("/banyajantuXetiRahat/banyajantuXetiRahatId", banyajantuXetiRahatController.getBanyajantuXetiRahat);
router.post("/banyajantuXetiRahat", banyajantuXetiRahatController.addBanyajantuXetiRahat);
router.put("/banyajantuXetiRahat", banyajantuXetiRahatController.updateBanyajantuXetiRahat);
router.delete("/banyajantuXetiRahat", banyajantuXetiRahatController.deleteBanyajantuXetiRahat);
module.exports = router;
