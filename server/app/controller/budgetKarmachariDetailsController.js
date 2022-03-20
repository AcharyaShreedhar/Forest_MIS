const pool = require('../db');

//Controller for Listing all budget_karmacharidetails
async function getAllBudgetKarmacharidetail(req, res) {
  const getTotalQuery = `SELECT count(*) as total from budget_karmacharidetails`;
  const getAllBudgetKarmacharidetailQuery = `select * from budget_karmacharidetails ORDER BY ? ASC LIMIT ?, ?`;

  pool.query(getTotalQuery, (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllBudgetKarmacharidetailQuery,
      [req.body.budget_karmacharidetail_id, req.body.page, req.body.perPage],
      (error, results, fields) => {
        if (error) throw error;
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            data: {
              total: countresults[0].total,
              list: results,
            },
          })
        );
      }
    );
  });
}

//Controller for Listing a budget_karmacharidetails
async function getBudgetKarmacharidetail(req, res) {
  const getBudgetKarmacharidetailQuery = `select * from budget_karmacharidetails where budget_karmacharidetail_id = ?`;
  pool.query(
    getBudgetKarmacharidetailQuery,
    [req.params.budgetKarmacharidetailId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a budget_karmacharidetails
async function addBudgetKarmacharidetail(req, res, next) {
  const addBudgetKarmacharidetailQuery = `INSERT INTO budget_karmacharidetails (sirshak_id, karyakram_sirshak_id, dist_id, office_id, user_id, fiscal_year, expense_month, expense_year, expense_amount, created_by, updated_by, createdAt, updatedAt) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBudgetKarmacharidetailQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.fiscal_year,
      req.body.expense_month,
      req.body.expense_year,
      req.body.expense_amount,
      req.body.created_by,
      req.body.updated_by,
      req.body.createdAt,
      req.body.updatedAt,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a budget_karmacharidetails
async function updateBudgetKarmacharidetail(req, res, next) {
  const updateBudgetKarmacharidetailQuery = `UPDATE budget_karmacharidetails SET budget_karmacharidetails (sirshak_id=?, karyakram_sirshak_id=?, dist_id=?, office_id=?, user_id=?, fiscal_year=?, expense_month=?, expense_year=?, expense_amount=?, created_by=?, updated_by=?, createdAt=?, updatedAt=? WHERE budget_karmacharidetail_id=?`;
  pool.query(
    updateBudgetKarmacharidetailQuery,
    [
      req.body.sirshak_id,
      req.body.karyakram_sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.fiscal_year,
      req.body.expense_month,
      req.body.expense_year,
      req.body.expense_amount,
      req.body.created_by,
      req.body.updated_by,
      req.body.createdAt,
      req.body.updatedAt,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a BudgetKarmacharidetail
async function deleteBudgetKarmacharidetail(req, res, next) {
  const deleteBudgetKarmacharidetailQuery = `DELETE  FROM budget_karmacharidetails where budget_karmacharidetail_id=?`;
  pool.query(
    deleteBudgetKarmacharidetailQuery,
    [req.params.budgetKarmacharidetailId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

module.exports = {
  getAllBudgetKarmacharidetail,
  getBudgetKarmacharidetail,
  addBudgetKarmacharidetail,
  updateBudgetKarmacharidetail,
  deleteBudgetKarmacharidetail,
};
