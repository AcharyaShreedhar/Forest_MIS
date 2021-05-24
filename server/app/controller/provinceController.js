const pool = require("../db");

// controller for getting all Province
async function getAllProvince(req, res) {
  const getAllProvinceQuery = `select * from provinces`;
  pool.query(getAllProvinceQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

// controller for getting a Province
async function getProvince(req, res) {
  const getProvinceQuery = "select * from provinces where prov_id=?";
  await pool.query(
    getProvinceQuery,
    [req.params.provinceId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Service for adding a Province

async function addProvince(req, res) {
  const addProvinceQuery = `INSERT INTO provinces (prov_name_eng,prov_name_nep) values (?,?)`;
  await pool.query(
    addProvinceQuery,
    [req.body.prov_name_eng, req.body.prov_name_nep],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a Province

async function updateProvince(req, res) {
  console.log("dfadfadkj");
  const updateProvinceQuery = `UPDATE provinces SET prov_name_eng=?, prov_name_nep=? WHERE prov_id=?`;
  await pool.query(
    updateProvinceQuery,
    [req.body.prov_name_eng, req.body.prov_name_nep, req.params.provinceId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Province

async function deleteProvince(req, res) {
  const deleteProvinceQuery = `DELETE  FROM provinces where prov_id=?`;
  pool.query(
    deleteProvinceQuery,
    [req.params.provinceId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllProvince,
  getProvince,
  addProvince,
  updateProvince,
  deleteProvince,
};
