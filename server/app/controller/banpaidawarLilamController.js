const pool = require("../db");
//Controller for Listing all activities_infos
async function getAllBanpaidawarLilam(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from banpaidawar_lilams as b where b.lilam_date BETWEEN ? and ? and b.dist_id like ? and b.office_id like ?";
  const getAllBanpaidawarLilamQuery = `select * from banpaidawar_lilams as b where b.lilam_date BETWEEN ? and ? and b.dist_id like ? and b.office_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBanpaidawarLilamQuery,
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

//Controller for Listing a BanpaidawarLilam
async function getBanpaidawarLilam(req, res) {
  const getBanpaidawarLilamQuery = `select * from banpaidawar_lilams where lilam_id=?`;
  pool.query(
    getBanpaidawarLilamQuery,
    [req.params.banpaidawarLilamId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a BanpaidawarLilam
async function addBanpaidawarLilam(req, res) {
  const addBanpaidawarLilamQuery = `INSERT INTO banpaidawar_lilams (dist_id, office_id, lilam_id, lilam_date, banpaidawar_type, unit, quantity, minimum_price, sakaar_price, remarks, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanpaidawarLilamQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.lilam_id,
      req.body.lilam_date,
      req.body.banpaidawar_type,
      req.body.unit,
      req.body.quantity,
      req.body.minimum_price,
      req.body.sakaar_price,
      req.body.remarks,
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

//Controller for updating a BanpaidawarLilam
async function updateBanpaidawarLilam(req, res) {
  const updateBanpaidawarLilamQuery = `UPDATE banpaidawar_lilams SET dist_id=?, office_id=?, lilam_date=?, banpaidawar_type=?, unit=?, quantity=?, minimum_price=?, sakaar_price=?, remarks=?, created_by=?, updated_by=? WHERE lilam_id=?`;
  pool.query(
    updateBanpaidawarLilamQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.lilam_date,
      req.body.banpaidawar_type,
      req.body.unit,
      req.body.quantity,
      req.body.minimum_price,
      req.body.sakaar_price,
      req.body.remarks,
      req.body.created_by,
      req.body.updated_by,
      req.params.banpaidawarLilamId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a BanpaidawarLilam
async function deleteBanpaidawarLilam(req, res) {
  const deleteBanpaidawarLilamQuery = `DELETE  FROM banpaidawar_lilams where lilam_id=?`;
  pool.query(
    deleteBanpaidawarLilamQuery,
    [req.params.banpaidawarLilamId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanpaidawarLilam,
  getBanpaidawarLilam,
  addBanpaidawarLilam,
  updateBanpaidawarLilam,
  deleteBanpaidawarLilam,
};
