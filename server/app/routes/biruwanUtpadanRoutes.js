const express = require("express");
const router = express.Router();

const biruwaUtpadanController = require("../controller/biruwaUtpadanController");
router.get("/biruwaUtpadan", biruwaUtpadanController.getAllBiruwaUtpadan);
router.get("/biruwaUtpadan/biruwaUtpadanId", biruwaUtpadanController.getBiruwaUtpadan);
router.post("/biruwaUtpadan", biruwaUtpadanController.addBiruwaUtpadan);
router.put("/biruwaUtpadan", biruwaUtpadanController.updateBiruwaUtpadan);
router.delete("/biruwaUtpadan", biruwaUtpadanController.deleteBiruwaUtpadan);
module.exports = router;