const pool = require("../db");

//Controller for Listing all activities_infos
async function getAllRastriyabanBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from rastriyaban_bibarans";
  const getAllRastriyabanBibaranQuery = `select * from rastriyaban_bibarans ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllRastriyabanBibaranQuery,
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

//Controller for Listing a Rastriyaban_Bibabran
async function getRastriyabanBibaran(req, res) {
  const getRastriyabanBibaranQuery = `select * from rastriyaban_bibarans where rastriyaban_bibaran_id=?`;
  pool.query(
    getRastriyabanBibaranQuery,
    [req.params.rastriyabanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a RastriyabanBibaran
async function addRastriyabanBibaran(req, res) {
  const addRastriyabanBibaranQuery = `INSERT INTO rastriyaban_bibarans (darta_no, rastriyaban_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addRastriyabanBibaranQuery,
    [
      req.body.darta_no,
      req.body.rastriyaban_name,
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

//Controller for updating a RastriyabanBibaran
async function updateRastriyabanBibaran(req, res) {
  const updateRastriyabanBibaranQuery = `UPDATE rastriyaban_bibarans SET darta_no=?, rastriyaban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE rastriyaban_bibaran_id=? `;
  pool.query(
    updateRastriyabanBibaranQuery,
    [
      req.body.darta_no,
      req.body.rastriyaban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date, 
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
      req.body.created_by, 
      req.body.updated_by,
      req.params.rastriyabanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a RastriyabanBibaran
async function deleteRastriyabanBibaran(req, res) {
  const deleteRastriyabanBibaranQuery = `DELETE  FROM rastriyaban_bibarans where rastriyaban_bibaran_id=?`;
  pool.query(
    deleteRastriyabanBibaranQuery,
    [req.params.rastriyabanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllRastriyabanBibaran,
  getRastriyabanBibaran,
  addRastriyabanBibaran,
  updateRastriyabanBibaran,
  deleteRastriyabanBibaran,
};
