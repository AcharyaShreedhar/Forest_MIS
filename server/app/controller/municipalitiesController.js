const pool = require("../db");

//Controller for Listing all Municipalities
async function getAllMunicipalities(req, res) {
  const getAllMunicipalitiesQuery = `select * from municipalities`;
  pool.query(getAllMunicipalitiesQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Municipality
async function getMunicipalities(req, res) {
  const getMunicipalitiesQuery = `select * from municipalities where mun_id=?`;
  pool.query(getMunicipalitiesQuery, [req.params.munId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Municipality
async function addMunicipalities(req, res) {
  const addMunicipalitiesQuery = `INSERT INTO municipalities (mun_name_nep,mun_name_eng,dist_id,created_by,updated_by) values (?,?,?,?,?)`;
  pool.query(
    addMunicipalitiesQuery,
    [
        req.body.mun_name_nep,
        req.body.mun_name_eng,
        req.body.dist_id,
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

//Controller for updating a Municapility
async function updateMunicipalities(req, res) {
  const updateMunicipalitiesQuery = `UPDATE municipalities SET mun_name_nep=?, mun_name_eng=?, dist_id=?, created_by=?,updated_by=? WHERE mun_id=?`;
  pool.query(
    updateMunicipalitiesQuery,
    [
        req.body.mun_name_nep,
        req.body.mun_name_eng,
        req.body.dist_id,
        req.body.created_by,
        req.body.updated_by,
        req.params.munId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Municipality
async function deleteMunicipalities(req, res) {
  const deleteMunicipalitiesQuery = `DELETE  FROM municipalities where mun_id=?`;
  pool.query(
    deleteMunicipalitiesQuery,
    [req.params.munId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllMunicipalities,
  getMunicipalities,
  addMunicipalities,
  updateMunicipalities,
  deleteMunicipalities,
};
