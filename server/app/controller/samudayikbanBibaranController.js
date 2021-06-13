const pool = require("../db");
//Controller for Listing all SamudayikbanBibaran
async function getAllSamudayikbanBibaran(req, res) {
  const getAllSamudayikbanBibaranQuery =
    "SELECT samudayikban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `samudayikban_bibarans` left JOIN nabikaran_karyayojanas on samudayikban_bibarans.darta_no=nabikaran_karyayojanas.darta_id";
  pool.query(getAllSamudayikbanBibaranQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a SamudayikbanBibaran
async function getSamudayikbanBibaran(req, res) {
  const getSamudayikbanBibaranQuery =
    "SELECT samudayikban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `samudayikban_bibarans` left JOIN nabikaran_karyayojanas on samudayikban_bibarans.darta_no=nabikaran_karyayojanas.darta_id where samudayikban_bibarans.samudayikban_id=1=?";
  pool.query(
    getSamudayikbanBibaranQuery,
    [req.params.samudayikbanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SamudayikbanBibaran
async function addSamudayikbanBibaran(req, res) {
  const addSamudayikbanBibaranQuery = `INSERT INTO samudayikban_bibarans (darta_no, samudayikban_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSamudayikbanBibaranQuery,
    [
      req.body.darta_no,
      req.body.samudayikban_name,
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

//Controller for updating a SamudayikbanBibaran
async function updateSamudayikbanBibaran(req, res) {
  const updateSamudayikbanBibaranQuery = `UPDATE samudayikban_bibarans SET darta_no=?,samudayikban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE samudayikban_id=?`;
  pool.query(
    updateSamudayikbanBibaranQuery,
    [
      req.body.darta_no,
      req.body.samudayikban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date,
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
      req.body.created_by,
      req.body.updated_by,
      req.params.samudayikbanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a SamudayikbanBibaran
async function deleteSamudayikbanBibaran(req, res) {
  const deleteSamudayikbanBibaranQuery = `DELETE  FROM samudayikban_bibarans where samudayikban_id=?`;
  pool.query(
    deleteSamudayikbanBibaranQuery,
    [req.params.samudayikbanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllSamudayikbanBibaran,
  getSamudayikbanBibaran,
  addSamudayikbanBibaran,
  updateSamudayikbanBibaran,
  deleteSamudayikbanBibaran,
};

//** */
