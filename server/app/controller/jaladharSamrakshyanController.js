const pool = require("../db");
//Controller for Listing all JaladharSamrakshyan
async function getAllJaladharSamrakshyan(req, res) {
  // const getTotalQuery =
  //   "SELECT count(*) as total from jaladhar_samrakshyans as j where j.karyakram_miti BETWEEN ? and ? and j.dist_id like ? and j.office_id like ?";
  const getTotalQuery =
  "SELECT count(*) as total from jaladhar_samrakshyans as j where j.dist_id like ? and j.office_id like ?";
  // const getAllJaladharSamrakshyanQuery = `select * from jaladhar_samrakshyans as j where j.karyakram_miti BETWEEN ? and ? and j.dist_id like ? and j.office_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  const getAllJaladharSamrakshyanQuery = `select * from jaladhar_samrakshyans as j where j.dist_id like ? and j.office_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    // [req.body.fromDate, req.body.toDate, req.body.distId, , req.body.officeId],
    [req.body.distId, , req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllJaladharSamrakshyanQuery,
        [
          // req.body.fromDate,
          // req.body.toDate,
          req.body.distId,
          req.body.officeId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
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
    }
  );
}

//Controller for Listing a jaladharsamrakshyan
async function getJaladharSamrakshyan(req, res) {
  const getJaladharSamrakshyanQuery = `select * from jaladhar_samrakshyans where jaladhar_samrakshyan_id=?`;
  pool.query(
    getJaladharSamrakshyanQuery,
    [req.params.jaladharsamrakshyanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a jaladharsamrakshyan
async function addJaladharSamrakshyan(req, res) {
  const addJaladharSamrakshyanQuery = `INSERT INTO jaladhar_samrakshyans (dist_id, office_id, sthan, qty, karyakram_miti, laagat, created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
  pool.query(
    addJaladharSamrakshyanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.sthan,
      req.body.qty,
      req.body.karyakram_miti,
      req.body.laagat,
      req.body.created_by,
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a jaladharamrakshyan
async function updateJaladharSamrakshyan(req, res) {
  const updateJaladharSamrakshyanQuery = `UPDATE jaladhar_samrakshyans SET dist_id=?, office_id=?, sthan=?, qty=?, karyakram_miti=?, laagat=?, created_by=?, updated_by=? WHERE jaladhar_samrakshyan_id=?`;
  pool.query(
    updateJaladharSamrakshyanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.sthan,
      req.body.qty,
      req.body.karyakram_miti,
      req.body.laagat,
      req.body.created_by,
      req.body.updated_by,
      req.params.jaladharsamrakshyanId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a jaladharamrakshyan
async function deleteJaladharSamrakshyan(req, res) {
  const deleteJaladharSamrakshyanQuery = `DELETE  FROM jaladhar_samrakshyans where jaladhar_samrakshyan_id=?`;
  pool.query(
    deleteJaladharSamrakshyanQuery,
    [req.params.jaladharsamrakshyanId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllJaladharSamrakshyan,
  getJaladharSamrakshyan,
  addJaladharSamrakshyan,
  updateJaladharSamrakshyan,
  deleteJaladharSamrakshyan,
};
