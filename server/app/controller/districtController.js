const pool = require("../db");

//Controller for Listing all Districts
async function getAllDistrict(req, res) {
  const getAllDistrictQuery = `select * from districts where prov_id=?`;
  pool.query(getAllDistrictQuery, [req.params.provinceId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a District
async function getDistrict(req, res) {
  const getDistrictQuery = `select * from districts where dist_id=?`;
  pool.query(
    getDistrictQuery,
    [req.params.districtId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a District
async function addDistrict(req, res, next) {
  const addDistrictQuery = `INSERT INTO districts (dist_name_eng,dist_name_nep,prov_id,created_by,updated_by) values (?,?,?,?,?)`;
  pool.query(
    addDistrictQuery,
    [
      req.body.dist_name_eng,
      req.body.dist_name_nep,
      req.body.prov_id,
      req.body.created_by,
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a District
async function updateDistrict(req, res, next) {
  const updateDistrictQuery = `UPDATE districts SET dist_name_eng=?, dist_name_nep=?, prov_id=?,created_by=?,updated_by=? WHERE dist_id=? `;
  pool.query(
    updateDistrictQuery,
    [
      req.body.dist_name_eng,
      req.body.dist_name_nep,
      req.body.prov_id,
      req.body.created_by,
      req.body.updated_by,
      req.params.districtId,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a District
async function deleteDistrict(req, res, next) {
  const deleteDistrictQuery = `DELETE  FROM districts where dist_id=?`;
  pool.query(
    deleteDistrictQuery,
    [req.params.districtId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

module.exports = {
  getAllDistrict,
  getDistrict,
  addDistrict,
  updateDistrict,
  deleteDistrict,
};
