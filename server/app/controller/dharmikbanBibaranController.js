const pool = require("../db");
//Controller for Listing all DharmikbanBibaran
async function getAllDharmikbanBibaran(req, res) {
  const getAllDharmikbanBibaranQuery =
    "SELECT dharmikban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `dharmikban_bibarans` left JOIN nabikaran_karyayojanas on dharmikban_bibarans.darta_no=nabikaran_karyayojanas.darta_id";
  pool.query(getAllDharmikbanBibaranQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a DharmikbanBibaran
async function getDharmikbanBibaran(req, res) {
  const getDharmikbanBibaranQuery =
    "SELECT dharmikban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `dharmikban_bibarans` left JOIN nabikaran_karyayojanas on dharmikban_bibarans.darta_no=nabikaran_karyayojanas.darta_id where dharmikban_bibarans.dharmikban_id=1=?";
  pool.query(
    getDharmikbanBibaranQuery,
    [req.params.dharmikbanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a DharmikbanBibaran
async function addDharmikbanBibaran(req, res) {
  const addDharmikbanBibaranQuery = `INSERT INTO dharmikban_bibarans (darta_no,dharmikban_name, community_name, area, main_species, forest_type, handover_date, forest_maujdat, renewaldate, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addDharmikbanBibaranQuery,
    [
      req.body.darta_no,
      req.body.dharmikban_name,
      req.body.community_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date,
      req.body.forest_maujdat,
      req.body.renewaldate,
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

//Controller for updating a DharmikbanBibaran
async function updateDharmikbanBibaran(req, res) {
  const updateDharmikbanBibaranQuery = `UPDATE dharmikban_bibarans SET darta_no=?,dharmikban_name=?, community_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, renewaldate=?, created_by=?, updated_by=? WHERE dharmikban_id=?`;
  pool.query(
    updateDharmikbanBibaranQuery,
    [
      req.body.darta_no,
      req.body.dharmikban_name,
      req.body.community_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date,
      req.body.forest_maujdat,
      req.body.renewaldate,
      req.body.created_by,
      req.body.updated_by,
      req.params.dharmikbanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a DharmikbanBibaran
async function deleteDharmikbanBibaran(req, res) {
  const deleteDharmikbanBibaranQuery = `DELETE  FROM dharmikban_bibarans where dharmikban_id=?`;
  pool.query(
    deleteDharmikbanBibaranQuery,
    [req.params.dharmikbanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllDharmikbanBibaran,
  getDharmikbanBibaran,
  addDharmikbanBibaran,
  updateDharmikbanBibaran,
  deleteDharmikbanBibaran,
};
//** */
