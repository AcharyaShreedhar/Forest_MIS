const express = require("express");
const router = express.Router();

const banxetraAtikramanController = require("../controller/banxetraAtikramanController");
router.post("/banxetraAtikramansList", banxetraAtikramanController.getAllBanxetraAtikramans);
router.get("/banxetraAtikramans/:banxetraAtikramanId", banxetraAtikramanController.getBanxetraAtikramans);
router.post("/banxetraAtikramans", banxetraAtikramanController.addBanxetraAtikramans);
router.put("/banxetraAtikramans/:banxetraAtikramanId", banxetraAtikramanController.updateBanxetraAtikramans);
router.delete("/banxetraAtikramans/:banxetraAtikramanId", banxetraAtikramanController.deleteBanxetraAtikramans);
module.exports = router;