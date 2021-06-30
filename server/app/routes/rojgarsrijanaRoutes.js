const express = require("express");
const router = express.Router();

const rojgarsrijanaController = require("../controller/rojgarsrijanaController");
router.post("/rojgarsrijanaList", rojgarsrijanaController.getAllRojgarSrijana);
router.get("/rojgarsrijana/:rojgarsrijanaId", rojgarsrijanaController.getRojgarSrijana);
router.post("/rojgarsrijana", rojgarsrijanaController.addRojgarSrijana);
router.put("/rojgarsrijana/:rojgarsrijanaId", rojgarsrijanaController.updateRojgarSrijana);
router.delete("/rojgarsrijana/:rojgarsrijanaId", rojgarsrijanaController.deleteRojgarSrijana);
module.exports = router;
