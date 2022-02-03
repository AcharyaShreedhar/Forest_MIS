const pool = require("../db");
//Controller for Listing all Banpaidawar
async function getAllBanpaidawar(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from ban_paidawars as b where b.arthik_barsa BETWEEN ? and ? and b.dist_id like ? and b.office_id like ?";
  const getAllBanpaidawarQuery = `select * from ban_paidawars as b where b.arthik_barsa BETWEEN ? and ? and b.dist_id like ? and b.office_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBanpaidawarQuery,
        [
          req.body.fromDate,
          req.body.toDate,
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
//Controller for Listing a Banpaidawar
async function getBanpaidawar(req, res) {
  const getBanpaidawarQuery = `select * from ban_paidawars where paidawar_id=?`;
  pool.query(
    getBanpaidawarQuery,
    [req.params.banpaidawarId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Banpaidawar
async function addBanpaidawar(req, res) {
  const addBanpaidawarQuery = `INSERT INTO ban_paidawars (ban_id, dist_id, office_id, arthik_barsa, kaath, daura, lavgrahi_sankhya, mulyaabhibridi_kar, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanpaidawarQuery,
    [
      req.body.ban_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.arthik_barsa,
      req.body.kaath,
      req.body.daura,
      req.body.lavgrahi_sankhya,
      req.body.mulyaabhibridi_kar,
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

//Controller for updating a Banpaidawar
async function updateBanpaidawar(req, res) {
  const updateBanpaidawarQuery = `UPDATE ban_paidawars SET ban_id=?, dist_id=?, office_id=?, arthik_barsa=?, kaath=?, daura=?, lavgrahi_sankhya=?, mulyaabhibridi_kar=?, created_by=?, updated_by=? WHERE paidawar_id=?`;
  pool.query(
    updateBanpaidawarQuery,
    [
      req.body.ban_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.arthik_barsa,
      req.body.kaath,
      req.body.daura,
      req.body.lavgrahi_sankhya,
      req.body.mulyaabhibridi_kar,
      req.body.created_by,
      req.body.updated_by,
      req.params.banpaidawarId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Banpaidawar
async function deleteBanpaidawar(req, res) {
  const deleteBanpaidawarQuery = `DELETE  FROM ban_paidawars where paidawar_id=?`;
  pool.query(
    deleteBanpaidawarQuery,
    [req.params.banpaidawarId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanpaidawar,
  getBanpaidawar,
  addBanpaidawar,
  updateBanpaidawar,
  deleteBanpaidawar,
};
