const pool = require("../db");

//Controller for Listing all rastriyabanBibaran
async function getAllRastriyabanBibaran(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "r.office_id like ?"
  if(office_length > 1){
    office_cond = "r.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "r.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "r.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from rastriyabanbibarans as r where r.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllRastriyabanBibaranQuery = `select * from rastriyabanbibarans as r where r.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllRastriyabanBibaranQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.officeId,
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
async function addRastriyabanBibaran(req, res, next) {
  const addRastriyabanBibaranQuery = `INSERT INTO rastriyabanbibarans (rastriyaban_naam, darta_no, darta_miti,  address,dist_id,office_id, main_species, area, dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addRastriyabanBibaranQuery,
    [
      req.body.rastriyaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.address,
      req.body.dist_id,
      req.body.office_id,
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
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a RastriyabanBibaran
async function updateRastriyabanBibaran(req, res, next) {
  const updateRastriyabanBibaranQuery = `UPDATE rastriyabanbibarans SET rastriyaban_naam=?, darta_no=?, darta_miti=?, address=?, dist_id=?, office_id=?, main_species=?, area=?,dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateRastriyabanBibaranQuery,
    [
      req.body.rastriyaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.address,
      req.body.dist_id,
      req.body.office_id,
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
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a RastriyabanBibaran
async function deleteRastriyabanBibaran(req, res, next) {
  const deleteRastriyabanBibaranQuery = `DELETE  FROM rastriyabanbibarans where darta_no=?`;
  pool.query(
    deleteRastriyabanBibaranQuery,
    [req.params.rastriyabanBibaranId],
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
  getAllRastriyabanBibaran,
  getRastriyabanBibaran,
  addRastriyabanBibaran,
  updateRastriyabanBibaran,
  deleteRastriyabanBibaran,
};
