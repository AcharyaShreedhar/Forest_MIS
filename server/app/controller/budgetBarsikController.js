const pool = require('../db')

const r = require('ramda')

//Controller for Listing all budget_barsiks
async function getAllBudgetBarsik(req, res) {
  const getTotalQuery = `SELECT count(*) as total from budget_barsiks bb where bb.dist_id like ? and bb.office_id like ?`
  const getAllBudgetBarsikQuery = `SELECT bb.budget_barsik_id, bb.sirshak_id,bs.sirshak_name, bb.karyakram_sirshak_id, ks.karyakram_name, bb.budget_office_id, bb.fiscal_year, o.office_name, bb.pratham_chaumasik_amount, bb.doshro_chaumasik_amount, bb.teshro_chaumasik_amount, bb.barsik_lakshay_amount,bb.pratham_chaumasik_pariman, bb.doshro_chaumasik_pariman, bb.teshro_chaumasik_pariman, bb.barsik_lakshay_pariman FROM budget_barsiks bb INNER JOIN budget_sirshaks bs ON bb.sirshak_id = bs.sirshak_id INNER JOIN karyakram_sirshaks ks ON bb.karyakram_sirshak_id = ks.karyakram_sirshak_id INNER JOIN offices o ON bb.budget_office_id = o.office_id where bs.dist_id like ? and bs.office_id like ? ORDER BY ? ASC LIMIT ?, ?`

  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error
      pool.query(
        getAllBudgetBarsikQuery,
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
async function getBudgetBarsik(req, res) {
  const getBudgetBarsikQuery = `select * from budget_barsiks where budget_barsik_id = ?`
  pool.query(
    getBudgetBarsikQuery,
    [req.params.budgetBarsikId],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for budget_barsik_lakshay
async function getBudgetBarsikLakshay(req, res) {
  const getBudgetBarsikQuery = `select if(count(barsik_lakshay_amount) = 0,0,barsik_lakshay_amount) barsiklakshay, if(count(barsik_lakshay_pariman) = 0,0,barsik_lakshay_pariman) barsikpariman from budget_barsiks where sirshak_id like ? and karyakram_sirshak_id like ? and fiscal_year like ? and budget_office_id like ?`

  pool.query(
    getBudgetBarsikQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.fiscal_year,
      req.body.budget_office_id,
    ],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for chaumasik_lakshay and chaumasik_remain
async function getBudgetChaumasikLakshay(req, res) {
  const chaumasik_id = await req.body.chaumasik_id
  let chaumasik_amount = 'pratham_chaumasik_amount'
  let chaumasik_pariman = 'pratham_chaumasik_pariman'
  if (r.equals(2, chaumasik_id)) {
    chaumasik_amount = 'doshro_chaumasik_amount'
    chaumasik_pariman = 'doshro_chaumasik_pariman'
  } else if (r.equals(3, chaumasik_id)) {
    chaumasik_amount = 'teshro_chaumasik_amount'
    chaumasik_pariman = 'teshro_chaumasik_pariman'
  }

  const getBudgetBarsikChaumasik = `select (${chaumasik_amount} - (select if(isNUll(sum(expense_amount)),0,sum(expense_amount)) as e from budget_karmacharidetails where chaumasik_id = ? and karyakram_sirshak_id = bb.karyakram_sirshak_id  and sirshak_id = bb.sirshak_id and fiscal_year = bb.fiscal_year and office_id=bb.budget_office_id)) as expense_remain,${chaumasik_amount} as chaumasik_amount , (select if(isNUll(sum(expense_amount)),0,sum(expense_amount)) as e from budget_karmacharidetails where chaumasik_id = ? and karyakram_sirshak_id = bb.karyakram_sirshak_id  and sirshak_id = bb.sirshak_id and fiscal_year = bb.fiscal_year and office_id=bb.budget_office_id) expense_amount,(${chaumasik_pariman} - (select if(isNUll(sum(expense_pariman)),0,sum(expense_pariman)) as e from budget_karmacharidetails where chaumasik_id = ? and karyakram_sirshak_id = bb.karyakram_sirshak_id  and sirshak_id = bb.sirshak_id and fiscal_year = bb.fiscal_year and office_id=bb.budget_office_id)) as expense_pariman_remain,${chaumasik_pariman} as chaumasik_pariman , (select if(isNUll(sum(expense_pariman)),0,sum(expense_pariman)) as e from budget_karmacharidetails where chaumasik_id = ? and karyakram_sirshak_id = bb.karyakram_sirshak_id  and sirshak_id = bb.sirshak_id and fiscal_year = bb.fiscal_year and office_id=bb.budget_office_id) expense_pariman from budget_barsiks bb where bb.sirshak_id like ? and bb.karyakram_sirshak_id like ? and bb.fiscal_year like ? and bb.budget_office_id like ?`

  pool.query(
    getBudgetBarsikChaumasik,
    [
      chaumasik_id,
      chaumasik_id,
      chaumasik_id,
      chaumasik_id,
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.fiscal_year,
      req.body.budget_office_id,
    ],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for adding a budget_barsiks
async function addBudgetBarsik(req, res, next) {
  const addBudgetBarsikQuery = `INSERT INTO budget_barsiks (sirshak_id, karyakram_sirshak_id, dist_id, office_id, user_id, fiscal_year, budget_office_id, pratham_chaumasik_amount, doshro_chaumasik_amount, teshro_chaumasik_amount,	barsik_lakshay_amount, pratham_chaumasik_pariman, doshro_chaumasik_pariman, teshro_chaumasik_pariman,	barsik_lakshay_pariman, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  pool.query(
    addBudgetBarsikQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.fiscal_year,
      req.body.budget_office_id,
      req.body.pratham_chaumasik_amount,
      req.body.doshro_chaumasik_amount,
      req.body.teshro_chaumasik_amount,
      req.body.barsik_lakshay_amount,
      req.body.pratham_chaumasik_pariman,
      req.body.doshro_chaumasik_pariman,
      req.body.teshro_chaumasik_pariman,
      req.body.barsik_lakshay_pariman,
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
async function updateBudgetBarsik(req, res, next) {
  const updateBudgetBarsikQuery = `UPDATE budget_barsiks SET sirshak_id=?, karyakram_sirshak_id=?, dist_id=?, office_id=?, user_id=?, fiscal_year=?, budget_office_id = ?, pratham_chaumasik_amount=?, doshro_chaumasik_amount=?, teshro_chaumasik_amount=?,	barsik_lakshay_amount=?, pratham_chaumasik_pariman=?, doshro_chaumasik_pariman=?, teshro_chaumasik_pariman=?,	barsik_lakshay_pariman=?, created_by=?, updated_by=? WHERE budget_barsik_id=?`
  pool.query(
    updateBudgetBarsikQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.fiscal_year,
      req.body.budget_office_id,
      req.body.pratham_chaumasik_amount,
      req.body.doshro_chaumasik_amount,
      req.body.teshro_chaumasik_amount,
      req.body.barsik_lakshay_amount,
      req.body.pratham_chaumasik_pariman,
      req.body.doshro_chaumasik_pariman,
      req.body.teshro_chaumasik_pariman,
      req.body.barsik_lakshay_pariman,
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

//Controller for deleting a BudgetBarsik
async function deleteBudgetBarsik(req, res, next) {
  const deleteBudgetBarsikQuery = `DELETE  FROM budget_barsiks where budget_barsik_id=?`
  pool.query(
    deleteBudgetBarsikQuery,
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
  getAllBudgetBarsik,
  getBudgetBarsik,
  getBudgetBarsikLakshay,
  getBudgetChaumasikLakshay,
  addBudgetBarsik,
  updateBudgetBarsik,
  deleteBudgetBarsik,
}
