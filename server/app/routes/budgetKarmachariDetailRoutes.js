const express = require('express')
const router = express.Router()

const budgetKarmacharidetailController = require('../controller/budgetKarmachariDetailController')
router.post(
  '/budgetkarmacharidetailList',
  budgetKarmacharidetailController.getAllBudgetKarmacharidetail
)
router.get(
  '/budgetkarmacharidetail/:budgetkarmacharidetailId',
  budgetKarmacharidetailController.getBudgetKarmacharidetail
)
router.post(
  '/budgetkarmacharidetail',
  budgetKarmacharidetailController.addBudgetKarmacharidetail
)
router.put(
  '/budgetkarmacharidetail/:budgetkarmacharidetailId',
  budgetKarmacharidetailController.updateBudgetKarmacharidetail
)
router.delete(
  '/budgetkarmacharidetail/:budgetkarmacharidetailId',
  budgetKarmacharidetailController.deleteBudgetKarmacharidetail
)
module.exports = router
