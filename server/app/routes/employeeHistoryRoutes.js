const express = require("express");
const router = express.Router();

const employeeHistoryController = require("../controller/employeeHistoryController");
router.get("/employeeHistory", employeeHistoryController.getAllEmployeeHistory);
router.get("/employeeHistory/historyId", employeeHistoryController.getEmployeeHistory);
router.post("/employeeHistory", employeeHistoryController.addEmployeeHistory);
router.put("/employeeHistory", employeeHistoryController.updateEmployeeHistory);
router.delete("/employeeHistory", employeeHistoryController.deleteEmployeeHistory);

module.exports = router;
