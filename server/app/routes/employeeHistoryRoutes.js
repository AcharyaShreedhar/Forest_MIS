const express = require("express");
const router = express.Router();

const employeeHistoryController = require("../controller/employeeHistoryController");
router.get("/employeeHistory", employeeHistoryController.getAllEmployeeHistory);
router.get("/employeeHistory/:histId", employeeHistoryController.getEmployeeHistory);
router.post("/employeeHistory", employeeHistoryController.addEmployeeHistory);
router.put("/employeeHistory/:histId", employeeHistoryController.updateEmployeeHistory);
router.delete("/employeeHistory/:histId", employeeHistoryController.deleteEmployeeHistory);
module.exports = router;