const pool = require("../db");

//Controller for Listing all rastriyabanBibaran
async function getAllRastriyabanBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from rastriyabanbibarans as r where r.darta_miti BETWEEN ? and ? and r.dist_id like ?";
  const getAllRastriyabanBibaranQuery = `select * from rastriyabanbibarans as r where r.darta_miti BETWEEN ? and ? and r.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllRastriyabanBibaranQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
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
    }
  );
}

//Controller for Listing a RastriyabanBibaran
async function getRastriyabanBibaran(req, res) {
  const getRastriyabanBibaranQuery = `select * from Rastriyabanbibarans where Rastriyabanbibaran_id=?`;
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
  const addRastriyabanBibaranQuery = `INSERT INTO rastriyabanbibarans (rastriyaban_naam, darta_no, darta_miti,  address,dist_id, main_species, area, dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addRastriyabanBibaranQuery,
    [
      req.body.rastriyaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.address,
      req.body.dist_id,
      req.body.main_species,
      req.body.area,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
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

//Controller for updating a RastriyabanBibaran
async function updateRastriyabanBibaran(req, res) {
  const updateRastriyabanBibaranQuery = `UPDATE rastriyabanbibarans SET rastriyaban_naam=?, darta_no=?, darta_miti=?, address=?, dist_id=?, main_species=?, area=?,dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateRastriyabanBibaranQuery,
    [
      req.body.rastriyaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.address,
      req.body.dist_id,
      req.body.main_species,
      req.body.area,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
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
  const deleteRastriyabanBibaranQuery = `DELETE  FROM rastriyabanbibarans where darta_no=?`;
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
