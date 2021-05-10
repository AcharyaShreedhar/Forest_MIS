const express = require("express");
const router = express.Router();

const municipalityController = require("../controller/municipalityController");
router.get("/municipality", municipalityController.getAllMunicipality);
router.get(
  "/municipality/municipalityId",
  municipalityController.getMunicipality
);
router.post("/municipality", municipalityController.addMunicipality);
router.put("/municipality", municipalityController.updateMunicipality);
router.delete("/municipality", municipalityController.deleteMunicipality);
module.exports = router;
