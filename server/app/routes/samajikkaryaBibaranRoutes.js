const express = require("express");
const router = express.Router();

const samajikkaryaBibaranController = require("../controller/samajikkaryaBibaranController");
router.post("/samajikkaryaBibaranList", samajikkaryaBibaranController.getAllSamajikkaryaBibaran);
router.get("/samajikkaryaBibaran/:samajikkaryabibaranId", samajikkaryaBibaranController.getSamajikkaryaBibaran);
router.post("/samajikkaryaBibaran", samajikkaryaBibaranController.addSamajikkaryaBibaran);
router.put("/samajikkaryaBibaran/:samajikkaryabibaranId", samajikkaryaBibaranController.updateSamajikkaryaBibaran);
router.delete("/samajikkaryaBibaran/:samajikkaryabibaranId", samajikkaryaBibaranController.deleteSamajikkaryaBibaran);
module.exports = router;
