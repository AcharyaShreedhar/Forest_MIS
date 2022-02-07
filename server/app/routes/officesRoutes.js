const express = require("express");
const router = express.Router();

const officesController = require("../controller/officesController");
router.post("/officesList", officesController.getAllOffices);
router.post("/officesDropdownList", officesController.getOfficesDropdownList);  //O-DDL
router.get("/offices/:officeId", officesController.getOffices);
router.post("/offices", officesController.addOffices);
router.put("/offices/:officeId", officesController.updateOffices);
router.delete("/offices/:officeId", officesController.deleteOffices);
module.exports = router;
