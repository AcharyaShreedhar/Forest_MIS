const express = require("express");
const router = express.Router();

const entryController = require("../controller/entryController");
router.post("/entryList", entryController.getAllEntry);
router.get("/entry/:entryId", entryController.getEntry);
router.post("/entry", entryController.addEntry);
router.put("/entry/:entryId", entryController.updateEntry);
router.delete("/entry/:entryId", entryController.deleteEntry);
module.exports = router;