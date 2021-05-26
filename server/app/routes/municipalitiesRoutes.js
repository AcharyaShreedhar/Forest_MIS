const express = require("express");
const router = express.Router();

const municipalitiesController = require("../controller/municipalitiesController");
router.get("/municipalities", municipalitiesController.getAllMunicipalities);
router.get("/municipalities/:munId", municipalitiesController.getMunicipalities);
router.post("/municipalities", municipalitiesController.addMunicipalities);
router.put("/municipalities/:munId", municipalitiesController.updateMunicipalities);
router.delete("/municipalities/:munId", municipalitiesController.deleteMunicipalities);
module.exports = router;