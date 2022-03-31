const express = require('express')
const router = express.Router()

const budgetBarsikController = require('../controller/budgetBarsikController')
router.post('/budgetbarsikList', budgetBarsikController.getAllBudgetBarsik)
router.get(
  '/budgetbarsik/:budgetBarsikId',
  budgetBarsikController.getBudgetBarsik
)
router.post(
  '/budgetBarsikLakshay',
  budgetBarsikController.getBudgetBarsikLakshay
)
router.post(
  '/budgetChaumasikLakshay',
  budgetBarsikController.getBudgetChaumasikLakshay
)
router.post('/budgetbarsik', budgetBarsikController.addBudgetBarsik)
router.put(
  '/budgetbarsik/:budgetBarsikId',
  budgetBarsikController.updateBudgetBarsik
)
router.delete(
  '/budgetbarsik/:budgetBarsikId',
  budgetBarsikController.deleteBudgetBarsik
)
module.exports = router
