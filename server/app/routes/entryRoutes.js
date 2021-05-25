const express = require("express");
const router = express.Router();

const entryController = require("../controller/entryController");
router.get("/entry", entryController.getAllEntry);
router.get("/entry/:entryId", entryController.getEntry);
router.post("/entry", entryController.addEntry);
router.put("/entry/:entryId", entryController.updateEntry);
router.delete("/entry/:entryId", entryController.deleteEntry);
module.exports = router;