const express = require("express");
const router = express.Router();

const biruwaUtpadanController = require("../controller/biruwaUtpadanController");
router.get("/biruwaUtpadans", biruwaUtpadanController.getAllBiruwaUtpadans);
router.get("/biruwaUtpadans/:biruwaUtpadanId", biruwaUtpadanController.getBiruwaUtpadans);
router.post("/biruwaUtpadans", biruwaUtpadanController.addBiruwaUtpadans);
router.put("/biruwaUtpadans/:biruwaUtpadanId", biruwaUtpadanController.updateBiruwaUtpadans);
router.delete("/biruwaUtpadans/:biruwaUtpadanId", biruwaUtpadanController.deleteBiruwaUtpadans);
module.exports = router;