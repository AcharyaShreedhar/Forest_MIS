const pool = require("../db");
//Controller for Listing all pahiroBibaran
async function getAllPaheroBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from pahiro_bibarans as p where p.pahero_gayeko_miti BETWEEN ? and ? and p.dist_id like ?";
  const getAllPaheroBibaranQuery = `select * from pahiro_bibarans as p where p.pahero_gayeko_miti BETWEEN ? and ? and p.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllPaheroBibaranQuery,
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

//Controller for Listing a PaheroBibaran
async function getPaheroBibaran(req, res) {
  const getPaheroBibaranQuery = `select * from pahiro_bibarans where pahiro_bibaran_id=?`;
  pool.query(
    getPaheroBibaranQuery,
    [req.params.paheroBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a PaheroBibaran
async function addPaheroBibaran(req, res) {
  const addPaheroBibaranQuery = `INSERT INTO pahiro_bibarans (pahiro_gayeko_sthan, dist_id, manab_ghaite, manab_mareko, uddar_sankhya, pahero_gayeko_miti, xeti_bibaran, banyajantu_mareko, botbiruwa_xeti, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addPaheroBibaranQuery,
    [
      req.body.pahiro_gayeko_sthan,
      req.body.dist_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.pahero_gayeko_miti,
      req.body.xeti_bibaran,
      req.body.banyajantu_mareko,
      req.body.botbiruwa_xeti,
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

//Controller for updating a PaheroBibaran
async function updatePaheroBibaran(req, res) {
  const updatePaheroBibaranQuery = `UPDATE pahiro_bibarans SET pahiro_gayeko_sthan=?, dist_id=?,  manab_ghaite=?, manab_mareko=?, uddar_sankhya=?, pahero_gayeko_miti=?, xeti_bibaran=?, banyajantu_mareko=?, botbiruwa_xeti=?, created_by=?, updated_by=? WHERE pahiro_bibaran_id=?`;
  pool.query(
    updatePaheroBibaranQuery,
    [
      req.body.pahiro_gayeko_sthan,
      req.body.dist_id,
      req.body.manab_ghaite,
      req.body.manab_mareko,
      req.body.uddar_sankhya,
      req.body.pahero_gayeko_miti,
      req.body.xeti_bibaran,
      req.body.banyajantu_mareko,
      req.body.botbiruwa_xeti,
      req.body.created_by,
      req.body.updated_by,
      req.params.paheroBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a PaheroBibaran
async function deletePaheroBibaran(req, res) {
  const deletePaheroBibaranQuery = `DELETE  FROM pahiro_bibarans where pahiro_bibaran_id=?`;
  pool.query(
    deletePaheroBibaranQuery,
    [req.params.paheroBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllPaheroBibaran,
  getPaheroBibaran,
  addPaheroBibaran,
  updatePaheroBibaran,
  deletePaheroBibaran,
};
