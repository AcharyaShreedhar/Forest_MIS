const pool = require("../db")
//Controller for Listing all SamudayikbanBibaran
async function getAllSamudayikbanBibaran(req, res) {
    const getAllSamudayikbanBibaranQuery = `select * from samudayikban_bibarans`;
    pool.query(getAllSamudayikbanBibaranQuery, [], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for Listing a SamudayikbanBibaran
  async function getSamudayikbanBibaran(req, res) {
    const getSamudayikbanBibaranQuery = `select * from samudayikban_bibarans where samudayikban_id=?`;
    pool.query(getSamudayikbanBibaranQuery, [req.params.samudayikbanBibaranId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a SamudayikbanBibaran
  async function addSamudayikbanBibaran(req, res) {
    const addSamudayikbanBibaranQuery = `INSERT INTO samudayikban_bibarans (samudayikban_name, area, main_species, forest_type, handover_date, renewal_first_date, renewal_first_period, renewal_second_date, renewal_second_period, renewal_third_date, renewal_third_period, renewal_fourth_date, renewal_fourth_period, renewal_fifth_date, renewal_fifth_period, renewal_sixth_date, renewal_sixth_period, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      addSamudayikbanBibaranQuery,
      [
        req.body.samudayikban_name,
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
    const updateSamudayikbanBibaranQuery = `UPDATE samudayikban_bibarans SET samudayikban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, renewal_first_date=?, renewal_first_period=?, renewal_second_date=?, renewal_second_period=?, renewal_third_date=?, renewal_third_period=?, renewal_fourth_date=?, renewal_fourth_period=?, renewal_fifth_date=?, renewal_fifth_period=?, renewal_sixth_date=?, renewal_sixth_period=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE samudayikban_id=?`;
    pool.query(
      updateSamudayikbanBibaranQuery,
      [
        req.body.samudayikban_name,
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
  
  