const express = require("express");
const router = express.Router();

const bandadeloBibaranController = require("../controller/bandadeloBibaranController");
router.post("/bandadeloBibaranList", bandadeloBibaranController.getAllBandadeloBibaran);
router.get("/bandadeloBibaran/:bandadeloBibaranId", bandadeloBibaranController.getBandadeloBibaran);
router.post("/bandadeloBibaran", bandadeloBibaranController.addBandadeloBibaran);
router.put("/bandadeloBibaran/:bandadeloBibaranId", bandadeloBibaranController.updateBandadeloBibaran);
router.delete("/bandadeloBibaran/:bandadeloBibaranId", bandadeloBibaranController.deleteBandadeloBibaran);
module.exports = router;
