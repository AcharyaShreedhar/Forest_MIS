const express = require("express");
const router = express.Router();

const barshikSwikritKaryakramController = require("../controller/barshikSwikritKaryakramController");
router.get("/barshikSwikritKaryakram", barshikSwikritKaryakramController.getAllBarshikSwikritKaryakram);
router.get("/barshikSwikritKaryakram/barshikSwikritKaryakramId", barshikSwikritKaryakramController.getBarshikSwikritKaryakram);
router.post("/barshikSwikritKaryakram", barshikSwikritKaryakramController.addBarshikSwikritKaryakram);
router.put("/barshikSwikritKaryakram", barshikSwikritKaryakramController.updateBarshikSwikritKaryakram);
router.delete("/barshikSwikritKaryakram", barshikSwikritKaryakramController.deleteBarshikSwikritKaryakram);
module.exports = router;