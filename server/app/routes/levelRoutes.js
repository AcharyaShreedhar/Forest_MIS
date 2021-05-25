const express = require("express");
const router = express.Router();

const levelController = require("../controller/levelController");
router.get("/level", levelController.getAllLevel);
router.get("/level/:levelId", levelController.getLevel);
router.post("/level", levelController.addLevel);
router.put("/level/:levelId", levelController.updateLevel);
router.delete("/level/:levelId", levelController.deleteLevel);
module.exports = router;
