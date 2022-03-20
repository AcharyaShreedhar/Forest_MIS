const pool = require('../db');

//Controller for Listing all months
async function getAllMonths(req, res) {
  const getTotalQuery = `SELECT count(*) as total from months`;
  const getAllMonthsQuery = `select * from months ORDER BY ? ASC LIMIT ?, ?`;

  pool.query(getTotalQuery, (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllMonthsQuery,
      [req.body.month_id, req.body.page, req.body.perPage],
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

//Controller for Listing a months
async function getMonths(req, res) {
  const getMonthsQuery = `select * from months where month_id = ?`;
  pool.query(
    getMonthsQuery,
    [req.params.monthsId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a months
async function addMonths(req, res, next) {
  const addMonthsQuery = `INSERT INTO months (month_name, month_quater) values (?,?)`;
  pool.query(
    addMonthsQuery,
    [req.body.month_name, req.body.month_quater],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a months
async function updateMonths(req, res, next) {
  const updateMonthsQuery = `UPDATE months SET months month_name=?, month_quater=? WHERE month_id=?`;
  pool.query(
    updateMonthsQuery,
    [req.body.month_id, req.body.month_name, req.body.month_quater],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a Months
async function deleteMonths(req, res, next) {
  const deleteMonthsQuery = `DELETE  FROM months where month_id=?`;
  pool.query(
    deleteMonthsQuery,
    [req.params.monthsId],
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
  getAllMonths,
  getMonths,
  addMonths,
  updateMonths,
  deleteMonths,
};
