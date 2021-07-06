const pool = require("../db");
//Controller for Listing all badhiBibaran
async function getAllBadhiBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from badhi_bibarans as b where b.badhi_aayeko_miti BETWEEN ? and ? and b.dist_id like ?";
  const getAllBadhiBibaranQuery = `select * from badhi_bibarans as b where b.badhi_aayeko_miti BETWEEN ? and ? and b.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBadhiBibaranQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
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

//Controller for Listing a BadhiBibaran
async function getBadhiBibaran(req, res) {
  const getBadhiBibaranQuery = `select * from badhi_bibarans where badhi_bibaran_id=?`;
  pool.query(
    getBadhiBibaranQuery,
    [req.params.badhiBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a BadhiBibaran
async function addBadhiBibaran(req, res) {
  const addBadhiBibaranQuery = `INSERT INTO badhi_bibarans (badhi_aayeko_sthan, dist_id, manab_ghaite, manab_mareko, uddar_sankhya, badhi_aayeko_miti, xeti_sankhya, created_by, updated_by) values (?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBadhiBibaranQuery,
    [
      req.body.badhi_aayeko_sthan,
      req.body.dist_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.badhi_aayeko_miti,
      req.body.xeti_sankhya,
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

//Controller for updating a BadhiBibaran
async function updateBadhiBibaran(req, res) {
  const updateBadhiBibaranQuery = `UPDATE badhi_bibarans SET badhi_aayeko_sthan=?, dist_id=?,  manab_ghaite=?, manab_mareko=?, uddar_sankhya=?, badhi_aayeko_miti=?, xeti_sankhya=?, created_by=?, updated_by=? WHERE badhi_bibaran_id=?`;
  pool.query(
    updateBadhiBibaranQuery,
    [
      req.body.badhi_aayeko_sthan,
      req.body.dist_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.badhi_aayeko_miti,
      req.body.xeti_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.badhiBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a BadhiBibaran
async function deleteBadhiBibaran(req, res) {
  const deleteBadhiBibaranQuery = `DELETE  FROM badhi_bibarans where badhi_bibaran_id=?`;
  pool.query(
    deleteBadhiBibaranQuery,
    [req.params.badhiBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBadhiBibaran,
  getBadhiBibaran,
  addBadhiBibaran,
  updateBadhiBibaran,
  deleteBadhiBibaran,
};
