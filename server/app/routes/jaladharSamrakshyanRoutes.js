const express = require("express");
const router = express.Router();
const jaladharSamrakshyanController = require("../controller/jaladharSamrakshyanController");
router.post(
  "/jaladharSamrakshyanList",
  jaladharSamrakshyanController.getAllJaladharSamrakshyan
);
router.get(
  "/jaladharSamrakshyan/:jaladharsamrakshyanId",
  jaladharSamrakshyanController.getJaladharSamrakshyan
);
router.post(
  "/jaladharSamrakshyan",
  jaladharSamrakshyanController.addJaladharSamrakshyan
);
router.put(
  "/jaladharSamrakshyan/:jaladharsamrakshyanId",
  jaladharSamrakshyanController.updateJaladharSamrakshyan
);
router.delete(
  "/jaladharSamrakshyan/:jaladharsamrakshyanId",
  jaladharSamrakshyanController.deleteJaladharSamrakshyan
);
module.exports = router;
