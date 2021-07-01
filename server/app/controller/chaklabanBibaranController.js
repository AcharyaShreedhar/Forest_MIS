const pool = require("../db");

//Controller for Listing all activities_infos
async function getAllChaklabanBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from chaklaban_bibarans";
  const getAllChaklabanBibaranQuery = `select * from chaklaban_bibarans ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllChaklabanBibaranQuery,
      [req.body.name, req.body.page, req.body.perPage],
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

//Controller for Listing a Chaklaban_Bibabran
async function getChaklabanBibaran(req, res) {
  const getChaklabanBibaranQuery = `select * from chaklaban_bibarans where chaklaban_bibaran_id=?`;
  pool.query(
    getChaklabanBibaranQuery,
    [req.params.chaklabanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a ChaklabanBibaran
async function addChaklabanBibaran(req, res) {
  const addChaklabanBibaranQuery = `INSERT INTO chaklaban_bibarans (darta_no, dist_id, chaklaban_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addChaklabanBibaranQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.chaklaban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date, 
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
      req.body.created_by, 
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a ChaklabanBibaran
async function updateChaklabanBibaran(req, res) {
  const updateChaklabanBibaranQuery = `UPDATE chaklaban_bibarans SET darta_no=?, dist_id=?, chaklaban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE chaklaban_bibaran_id=? `;
  pool.query(
    updateChaklabanBibaranQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.chaklaban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date, 
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
      req.body.created_by, 
      req.body.updated_by,
      req.params.chaklabanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a ChaklabanBibaran
async function deleteChaklabanBibaran(req, res) {
  const deleteChaklabanBibaranQuery = `DELETE  FROM chaklaban_bibarans where chaklaban_bibaran_id=?`;
  pool.query(
    deleteChaklabanBibaranQuery,
    [req.params.chaklabanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllChaklabanBibaran,
  getChaklabanBibaran,
  addChaklabanBibaran,
  updateChaklabanBibaran,
  deleteChaklabanBibaran,
};
