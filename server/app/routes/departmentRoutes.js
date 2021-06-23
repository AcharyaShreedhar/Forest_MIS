const express = require("express");
const router = express.Router();

const departmentController = require("../controller/departmentController");
router.post("/departmentList", departmentController.getAllDepartment);
router.get("/department/:deptId", departmentController.getDepartment);
router.post("/department", departmentController.addDepartment);
router.put("/department/:deptId", departmentController.updateDepartment);
router.delete("/department/:deptId", departmentController.deleteDepartment);
module.exports = router;