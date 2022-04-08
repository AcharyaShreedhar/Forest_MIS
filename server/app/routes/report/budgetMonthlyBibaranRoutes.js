const express = require('express')
const router = express.Router()

const budgetMonthlyController = require('../../controller/report/budgetMonthlyController')
router.post('/budget_monthly', budgetMonthlyController.getBudgetMonthly)

module.exports = router
