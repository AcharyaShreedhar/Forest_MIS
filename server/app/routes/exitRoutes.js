const express = require("express");
const router = express.Router();

const exitController = require("../controller/exitController");
router.get("/exit", exitController.getAllExit);
router.get("/exit/:exitId", exitController.getExit);
router.post("/exit", exitController.addExit);
router.put("/exit/:exitId", exitController.updateExit);
router.delete("/exit/:exitId", exitController.deleteExit);
module.exports = router;