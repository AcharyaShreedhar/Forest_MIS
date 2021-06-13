const pool = require("../db");

//Controller for Listing all Banxetra Atikramans
async function getAllBanxetraAtikramans(req, res) {
  const getAllBanxetraAtikramansQuery = `select * from banxetra_atikramans`;
  pool.query(getAllBanxetraAtikramansQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Banxetra Atikraman
async function getBanxetraAtikramans(req, res) {
  const getBanxetraAtikramansQuery = `select * from banxetra_atikramans where banxetra_atikraman_id=?`;
  pool.query(getBanxetraAtikramansQuery, [req.params.banxetraAtikramanId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Banxetra Atikraman
async function addBanxetraAtikramans(req, res) {
  const addBanxetraAtikramansQuery = `INSERT INTO banxetra_atikramans (atikramit_area,atikraman_kisim,samalagna_ghardhuri,atikraman_prayojan,samrachana_bibaran,atikraman_abastha,created_by,updated_by) values (?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanxetraAtikramansQuery,
    [
      req.body.atikramit_area,
      req.body.atikraman_kisim,
      req.body.samalagna_ghardhuri,
      req.body.atikraman_prayojan,
      req.body.samrachana_bibaran,
      req.body.atikraman_abastha,
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

//Controller for updating a Banxetra Atikraman
async function updateBanxetraAtikramans(req, res) {
  const updateBanxetraAtikramansQuery = `UPDATE banxetra_atikramans SET atikramit_area=?,atikraman_kisim=?,samalagna_ghardhuri=?,atikraman_prayojan=?,samrachana_bibaran=?,atikraman_abastha=?,created_by=?,updated_by=? WHERE banxetra_atikraman_id=?`;
  pool.query(
    updateBanxetraAtikramansQuery,
    [
      req.body.atikramit_area,
      req.body.atikraman_kisim,
      req.body.samalagna_ghardhuri,
      req.body.atikraman_prayojan,
      req.body.samrachana_bibaran,
      req.body.atikraman_abastha,
      req.body.created_by,
      req.body.updated_by,
      req.params.banxetraAtikramanId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Banxetra Atikraman
async function deleteBanxetraAtikramans(req, res) {
  const deleteBanxetraAtikramansQuery = `DELETE  FROM banxetra_atikramans WHERE banxetra_atikraman_id=?`;
  pool.query(
    deleteBanxetraAtikramansQuery,
    [req.params.banxetraAtikramanId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanxetraAtikramans,
  getBanxetraAtikramans,
  addBanxetraAtikramans,
  updateBanxetraAtikramans,
  deleteBanxetraAtikramans,
};