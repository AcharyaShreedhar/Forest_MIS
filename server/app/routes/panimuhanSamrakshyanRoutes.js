const express = require("express");
const router = express.Router();
const panimuhanSamrakshyanController = require("../controller/panimuhanSamrakshyanController");
router.post(
  "/panimuhanSamrakshyanList",
  panimuhanSamrakshyanController.getAllPanimuhanSamrakshyan
);
router.get(
  "/panimuhanSamrakshyan/:panimuhanSamrakshyanId",
  panimuhanSamrakshyanController.getPanimuhanSamrakshyan
);
router.post("/panimuhanSamrakshyan", panimuhanSamrakshyanController.addPanimuhanSamrakshyan);
router.put(
  "/panimuhanSamrakshyan/:panimuhanSamrakshyanId",
  panimuhanSamrakshyanController.updatePanimuhanSamrakshyan
);
router.delete(
  "/panimuhanSamrakshyan/:panimuhanSamrakshyanId",
  panimuhanSamrakshyanController.deletePanimuhanSamrakshyan
);
module.exports = router;