const express = require("express");
const router = express.Router();

const rojgarsrijanaController = require("../controller/rojgarsrijanaController");
router.post("/rogjarsrijanaList", rojgarsrijanaController.getAllRojgarSrijana);
router.get("/rogjarsrijana/:rojgarsrijanaId", rojgarsrijanaController.getRojgarSrijana);
router.post("/rogjarsrijana", rojgarsrijanaController.addRojgarSrijana);
router.put("/rogjarsrijana/:rojgarsrijanaId", rojgarsrijanaController.updateRojgarSrijan);
router.delete("/rogjarsrijana/:rojgarsrijanaId", rojgarsrijanaController.deleteRojgarSrijana);
module.exports = router;
