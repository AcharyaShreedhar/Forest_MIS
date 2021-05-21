const express = require("express");
const router = express.Router();

const bandadeloBibaranController = require("../controller/bandadeloBibaranController");
router.get("/bandadeloBibaran", bandadeloBibaranController.getAllBandadeloBibaran);
router.get("/bandadeloBibaran/bandadeloBibaranId", bandadeloBibaranController.getBandadeloBibaran);
router.post("/bandadeloBibaran", bandadeloBibaranController.addBandadeloBibaran);
router.put("/bandadeloBibaran", bandadeloBibaranController.updateBandadeloBibaran);
router.delete("/bandadeloBibaran", bandadeloBibaranController.deleteBandadeloBibaran);
module.exports = router;
