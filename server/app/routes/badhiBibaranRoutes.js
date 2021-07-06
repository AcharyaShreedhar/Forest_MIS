const express = require("express");
const router = express.Router();

const badhiBibaranController = require("../controller/badhiBibaranController");
router.post("/badhiBibaranList", badhiBibaranController.getAllBadhiBibaran);
router.get(
  "/badhiBibaran/:badhiBibaranId",
  badhiBibaranController.getBadhiBibaran
);
router.post("/badhiBibaran", badhiBibaranController.addBadhiBibaran);
router.put(
  "/badhiBibaran/:badhiBibaranId",
  badhiBibaranController.updateBadhiBibaran
);
router.delete(
  "/badhiBibaran/:badhiBibaranId",
  badhiBibaranController.deleteBadhiBibaran
);
module.exports = router;
