const pool = require("../db");
//Controller for Listing all DharmikbanBibaran
async function getAllDharmikbanBibaran(req, res) {
  const getAllDharmikbanBibaranQuery = `select * from dharmikban_bibarans`;
  pool.query(getAllDharmikbanBibaranQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a DharmikbanBibaran
async function getDharmikbanBibaran(req, res) {
  const getDharmikbanBibaranQuery = `select * from dharmikban_bibarans where dharmikban_id=?`;
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
  const addDharmikbanBibaranQuery = `INSERT INTO dharmikban_bibarans (dharmikban_name, community_name, area, main_species, forest_type, handover_date, renewal_first_date, renewal_first_period, renewal_second_date, renewal_second_period, renewal_third_date, renewal_third_period, renewal_fourth_date, renewal_fourth_period, renewal_fifth_date, renewal_fifth_period, renewal_sixth_date, renewal_sixth_period, forest_maujdat, renewaldate, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addDharmikbanBibaranQuery,
    [
      req.body.dharmikban_name,
      req.body.community_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date,
      req.body.renewal_first_date,
      req.body.renewal_first_period,
      req.body.renewal_second_date,
      req.body.renewal_second_period,
      req.body.renewal_third_date,
      req.body.renewal_third_period,
      req.body.renewal_fourth_date,
      req.body.renewal_fourth_period,
      req.body.renewal_fifth_date,
      req.body.renewal_fifth_period,
      req.body.renewal_sixth_date,
      req.body.renewal_sixth_period,
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
  const updateDharmikbanBibaranQuery = `UPDATE dharmikban_bibarans SET dharmikban_name=?, community_name=?, area=?, main_species=?, forest_type=?, handover_date=?, renewal_first_date=?, renewal_first_period=?, renewal_second_date=?, renewal_second_period=?, renewal_third_date=?, renewal_third_period=?, renewal_fourth_date=?, renewal_fourth_period=?, renewal_fifth_date=?, renewal_fifth_period=?, renewal_sixth_date=?, renewal_sixth_period=?, forest_maujdat=?, renewaldate=?, created_by=?, updated_by=? WHERE dharmikban_id=?`;
  pool.query(
    updateDharmikbanBibaranQuery,
    [
      req.body.dharmikban_name,
      req.body.community_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date,
      req.body.renewal_first_date,
      req.body.renewal_first_period,
      req.body.renewal_second_date,
      req.body.renewal_second_period,
      req.body.renewal_third_date,
      req.body.renewal_third_period,
      req.body.renewal_fourth_date,
      req.body.renewal_fourth_period,
      req.body.renewal_fifth_date,
      req.body.renewal_fifth_period,
      req.body.renewal_sixth_date,
      req.body.renewal_sixth_period,
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
