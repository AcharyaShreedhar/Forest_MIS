const pool = require('../db')

//Controller for Listing all budget_sirshak
async function getAllBudgetSirshak(req, res) {
  const getTotalQuery = `SELECT count(*) as total from budget_sirshaks where dist_id like ? and office_id like ?`
  const getAllBudgetSirshakQuery = `select * from budget_sirshaks where dist_id like ? and office_id like ? ORDER BY ? ASC LIMIT ?, ?`

  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error
      pool.query(
        getAllBudgetSirshakQuery,
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

//Controller for Listing a budget_sirshak
async function getBudgetSirshak(req, res) {
  const getBudgetSirshakQuery = `select * from budget_sirshaks where sirshak_id = ?`
  pool.query(
    getBudgetSirshakQuery,
    [req.params.budgetShirshakId],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for budget_sirshak dropdown
async function getBudgetSirshakDropdown(req, res) {
  const getBudgetSirshakDropdownQuery = `select sirshak_id as id, sirshak_no, sirshak_name as value from budget_sirshaks where dist_id = ? and office_id = ?`
  pool.query(
    getBudgetSirshakDropdownQuery,
    [req.body.dist_id, req.body.office_id],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for adding a budget_sirshak
async function addBudgetSirshak(req, res, next) {
  const addBudgetSirshakQuery = `INSERT INTO budget_sirshaks ( dist_id, office_id, user_id, sirshak_name, sirshak_no, created_by,updated_by) values (?,?,?,?,?,?,?)`
  pool.query(
    addBudgetSirshakQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.sirshak_name,
      req.body.sirshak_no,
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

//Controller for updating a budget_sirshak
async function updateBudgetSirshak(req, res, next) {
  const updateBudgetSirshakQuery = `UPDATE budget_sirshaks SET dist_id=?, office_id=?, user_id=?, sirshak_name=?, sirshak_no=?, created_by=?,updated_by=? WHERE sirshak_id=?`
  pool.query(
    updateBudgetSirshakQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.sirshak_name,
      req.body.sirshak_no,
      req.body.created_by,
      req.body.updated_by,
      req.params.sirshakId,
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

//Controller for deleting a BudgetSirshak
async function deleteBudgetSirshak(req, res, next) {
  const deleteBudgetSirshakQuery = `DELETE  FROM budget_sirshaks where sirshak_id=?`
  pool.query(
    deleteBudgetSirshakQuery,
    [req.params.sirshakId],
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
  getAllBudgetSirshak,
  getBudgetSirshak,
  addBudgetSirshak,
  updateBudgetSirshak,
  deleteBudgetSirshak,
  getBudgetSirshakDropdown,
}
