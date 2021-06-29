const pool = require("../db");

//Controller for Listing all activities_infos
async function getAllSajhedaribanBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from sajhedariban_bibarans";
  const getAllSajhedaribanBibaranQuery = `select * from sajhedariban_bibarans ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllSajhedaribanBibaranQuery,
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

//Controller for Listing a Sajhedariban_Bibabran
async function getSajhedaribanBibaran(req, res) {
  const getSajhedaribanBibaranQuery = `select * from sajhedariban_bibarans where sajhedariban_bibaran_id=?`;
  pool.query(
    getSajhedaribanBibaranQuery,
    [req.params.sajhedaribanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SajhedaribanBibaran
async function addSajhedaribanBibaran(req, res) {
  const addSajhedaribanBibaranQuery = `INSERT INTO sajhedariban_bibarans (darta_no, sajhedariban_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSajhedaribanBibaranQuery,
    [
      req.body.darta_no,
      req.body.sajhedariban_name,
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

//Controller for updating a SajhedaribanBibaran
async function updateSajhedaribanBibaran(req, res) {
  const updateSajhedaribanBibaranQuery = `UPDATE sajhedariban_bibarans SET darta_no=?, sajhedariban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE sajhedariban_bibaran_id=? `;
  pool.query(
    updateSajhedaribanBibaranQuery,
    [
      req.body.darta_no,
      req.body.sajhedariban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date, 
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
      req.body.created_by, 
      req.body.updated_by,
      req.params.sajhedaribanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a SajhedaribanBibaran
async function deleteSajhedaribanBibaran(req, res) {
  const deleteSajhedaribanBibaranQuery = `DELETE  FROM sajhedariban_bibarans where sajhedariban_bibaran_id=?`;
  pool.query(
    deleteSajhedaribanBibaranQuery,
    [req.params.sajhedaribanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllSajhedaribanBibaran,
  getSajhedaribanBibaran,
  addSajhedaribanBibaran,
  updateSajhedaribanBibaran,
  deleteSajhedaribanBibaran,
};
