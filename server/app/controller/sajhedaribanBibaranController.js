const pool = require("../db");
//Controller for Listing all SajhedariBibaran
async function getAllSajhedariBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from sajhedari_bibarans";
  const getAllSajhedariBibaranQuery = `select * from sajhedari_bibarans ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllSajhedariBibaranQuery,
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

//Controller for Listing a SajhedariBibaran
async function getSajhedariBibaran(req, res) {
  const getSajhedariBibaranQuery = `select * from sajhedari_bibarans where sajhedari_bibaran_id=?`;
  pool.query(
    getSajhedariBibaranQuery,
    [req.params.sajhedariBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SajhedariBibaran
async function addSajhedariBibaran(req, res) {
  const addSajhedariBibaranQuery = `INSERT INTO sajhedari_bibarans (dist_id, darta_no, sajhedari_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSajhedariBibaranQuery,
    [
      req.body.dist_id,
      req.body.darta_no, 
      req.body.sajhedari_name,
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
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a SajhedariBibaran
async function updateSajhedariBibaran(req, res) {
  const updateSajhedariBibaranQuery = `UPDATE sajhedari_bibarans SET dist_id=?, darta_no=?, sajhedari_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE sajhedari_bibaran_id=?`;
  pool.query(
    updateSajhedariBibaranQuery,
    [
      req.body.dist_id,
      req.body.darta_no, 
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
      req.params.sajhedariBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a SajhedariBibaran
async function deleteSajhedariBibaran(req, res) {
  const deleteSajhedariBibaranQuery = `DELETE  FROM sajhedari_bibarans where sajhedari_bibaran_id=?`;
  pool.query(
    deleteSajhedariBibaranQuery,
    [req.params.sajhedariBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllSajhedariBibaran,
  getSajhedariBibaran,
  addSajhedariBibaran,
  updateSajhedariBibaran,
  deleteSajhedariBibaran,
};
