const express = require("express");
const router = express.Router();

const departmentController = require("../controller/departmentController");
router.get("/department", departmentController.getAllDepartment);
router.get("/department/departmentId", departmentController.getDepartment);
router.post("/department", departmentController.addDepartment);
router.put("/department", departmentController.updateDepartment);
router.delete("/department", departmentController.deleteDepartment);
module.exports = router;