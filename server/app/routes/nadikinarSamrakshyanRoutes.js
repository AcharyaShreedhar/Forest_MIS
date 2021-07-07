const express = require("express");
const router = express.Router();
const nadikinarSamrakshyanController = require("../controller/nadikinarSamrakshyanController");
router.post(
  "/nadikinarSamrakshyanList",
  nadikinarSamrakshyanController.getAllNadikinarSamrakshyan
);
router.get(
  "/nadikinarSamrakshyan/:nadikinarSamrakshyanId",
  nadikinarSamrakshyanController.getNadikinarSamrakshyan
);
router.post("/nadikinarSamrakshyan", nadikinarSamrakshyanController.addNadikinarSamrakshyan);
router.put(
  "/nadikinarSamrakshyan/:nadikinarSamrakshyanId",
  nadikinarSamrakshyanController.updateNadikinarSamrakshyan
);
router.delete(
  "/nadikinarSamrakshyan/:nadikinarSamrakshyanId",
  nadikinarSamrakshyanController.deleteNadikinarSamrakshyan
);
module.exports = router;