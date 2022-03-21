const express = require('express')
const router = express.Router()

const budgetSirshakController = require('../controller/budgetSirshakController')
router.post('/budgetsirshakList', budgetSirshakController.getAllBudgetSirshak)
router.get(
  '/budgetsirshak/:sirshakId',
  budgetSirshakController.getBudgetSirshak
)
router.post('/budgetsirshak', budgetSirshakController.addBudgetSirshak)
router.post(
  '/budgetsirshakDropdownList',
  budgetSirshakController.getBudgetSirshakDropdown
)
router.put(
  '/budgetsirshak/:sirshakId',
  budgetSirshakController.updateBudgetSirshak
)
router.delete(
  '/budgetsirshak/:sirshakId',
  budgetSirshakController.deleteBudgetSirshak
)
module.exports = router
