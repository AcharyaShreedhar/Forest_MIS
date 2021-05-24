const express = require("express");
const router = express.Router();

const employeeController = require("../controller/employeeController");
router.get("/employee", employeeController.getAllEmployee);
router.get("/employee/employeeId", employeeController.getEmployee);
router.post("/employee", employeeController.addEmployee);
router.put("/employee", employeeController.updateEmployee);
router.delete("/employee", employeeController.deleteEmployee);
module.exports = router;

