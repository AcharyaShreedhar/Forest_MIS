
const express = require("express");
const router = express.Router();

const employeesController = require("../controller/employeesController");
router.get("/employees", employeesController.getAllEmployees);
router.get("/employees/:employeesId", employeesController.getEmployees);
router.post("/employees", employeesController.addEmployees);
router.put("/employees/:employeesId", employeesController.updateEmployees);
router.delete("/employees/:employeesId", employeesController.deleteEmployees);
module.exports = router;