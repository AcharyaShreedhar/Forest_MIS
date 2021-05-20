const express = require("express");
const router = express.Router();

const upavoktasamuhaBibaranController = require("../controller/upavoktasamuhaBibaranController");
router.get("/upavoktasamuhaBibaran", upavoktasamuhaBibaranController.getAllUpavoktasamuhaBibaran);
router.get("/upavoktasamuhaBibaran/upavoktasamuhaBibaranId", upavoktasamuhaBibaranController.getUpavoktasamuhaBibaran);
router.post("/upavoktasamuhaBibaran", upavoktasamuhaBibaranController.addUpavoktasamuhaBibaran);
router.put("/upavoktasamuhaBibaran", upavoktasamuhaBibaranController.updateUpavoktasamuhaBibaran);
router.delete("/upavoktasamuhaBibaran", upavoktasamuhaBibaranController.deleteUpavoktasamuhaBibaran);
module.exports = router;