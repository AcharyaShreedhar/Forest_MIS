const pool = require('../db')

//Controller for Listing all budget_barsiks
async function getAllBudgetBarshik(req, res) {
  const getTotalQuery = `SELECT count(*) as total from budget_barsiks where dist_id like ? and office_id like ?`
  const getAllBudgetBarshikQuery = `select * from budget_barsiks where dist_id like ? and office_id like ? ORDER BY ? ASC LIMIT ?, ?`

  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error
      pool.query(
        getAllBudgetBarshikQuery,
        [
          req.body.distId,
          req.body.officeId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
        (error, results, fields) => {
          if (error) throw error
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                total: countresults[0].total,
                list: results,
              },
            })
          )
        }
      )
    }
  )
}

//Controller for Listing a budget_barsiks
async function getBudgetBarshik(req, res) {
  const getBudgetBarshikQuery = `select * from budget_barsiks where budget_barsik_id = ?`
  pool.query(
    getBudgetBarshikQuery,
    [req.params.budgetBarsikId],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for adding a budget_barsiks
async function addBudgetBarshik(req, res, next) {
  const addBudgetBarshikQuery = `INSERT INTO budget_barsiks (sirshak_id, karyakram_sirshak_id, dist_id, office_id, user_id, fiscal_year, pratham_chaumasik_amount, doshro_chaumasik_amount, teshro_chaumasik_amount,	barsik_lakshay_amount, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`
  pool.query(
    addBudgetBarshikQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.fiscal_year,
      req.body.pratham_chaumasik_amount,
      req.body.doshro_chaumasik_amount,
      req.body.teshro_chaumasik_amount,
      req.body.barsik_lakshay_amount,
      req.body.created_by,
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        next(error)
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }))
    }
  )
}

//Controller for updating a budget_barsiks
async function updateBudgetBarshik(req, res, next) {
  const updateBudgetBarshikQuery = `UPDATE budget_barsiks SET sirshak_id=?, karyakram_sirshak_id=?, dist_id=?, office_id=?, user_id=?, fiscal_year=?, pratham_chaumasik_amount=?, doshro_chaumasik_amount=?, teshro_chaumasik_amount=?,	barsik_lakshay_amount=?, created_by=?, updated_by=? WHERE budget_barsik_id=?`
  pool.query(
    updateBudgetBarshikQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.fiscal_year,
      req.body.pratham_chaumasik_amount,
      req.body.doshro_chaumasik_amount,
      req.body.teshro_chaumasik_amount,
      req.body.barsik_lakshay_amount,
      req.body.created_by,
      req.body.updated_by,
      req.params.budgetBarsikId,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        next(error)
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }))
    }
  )
}

//Controller for deleting a BudgetBarshik
async function deleteBudgetBarshik(req, res, next) {
  const deleteBudgetBarshikQuery = `DELETE  FROM budget_barsiks where budget_barsik_id=?`
  pool.query(
    deleteBudgetBarshikQuery,
    [req.params.budgetBarsikId],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        next(error)
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }))
    }
  )
}

module.exports = {
  getAllBudgetBarshik,
  getBudgetBarshik,
  addBudgetBarshik,
  updateBudgetBarshik,
  deleteBudgetBarshik,
}
