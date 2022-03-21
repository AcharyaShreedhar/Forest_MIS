const express = require('express')
const router = express.Router()

const budgetBarsikController = require('../controller/budgetBarsikController')
router.post('/budgetbarsikList', budgetBarsikController.getAllBudgetBarshik)
router.get(
  '/budgetbarsik/:budgetBarsikId',
  budgetBarsikController.getBudgetBarshik
)
router.post('/budgetbarsik', budgetBarsikController.addBudgetBarshik)
router.put(
  '/budgetbarsik/:budgetBarsikId',
  budgetBarsikController.updateBudgetBarshik
)
router.delete(
  '/budgetbarsik/:budgetBarsikId',
  budgetBarsikController.deleteBudgetBarshik
)
module.exports = router
