const express = require('express')
const router = express.Router()

const budgetKarmacharidetailController = require('../controller/budgetKarmachariDetailController')
router.post(
  '/budgetkarmacharidetailList',
  budgetKarmacharidetailController.getAllBudgetKarmacharidetail
)
router.get(
  '/budgetkarmacharidetail/:karmacharidetailId',
  budgetKarmacharidetailController.getBudgetKarmacharidetail
)
router.post(
  '/budgetkarmacharidetail',
  budgetKarmacharidetailController.addBudgetKarmacharidetail
)
router.put(
  '/budgetkarmacharidetail/:karmacharidetailId',
  budgetKarmacharidetailController.updateBudgetKarmacharidetail
)
router.delete(
  '/budgetkarmacharidetail/:karmacharidetailId',
  budgetKarmacharidetailController.deleteBudgetKarmacharidetail
)
module.exports = router
