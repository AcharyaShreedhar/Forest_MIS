const pool = require("../db");
//Controller for Listing all CommercialkabuliyatibanBibaran
async function getAllCommercialkabuliyatibanBibaran(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "c.office_id like ?"
  if(office_length > 1){
    office_cond = "c.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "c.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "c.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from commercialkabuliyatiban_bibarans as c where c.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllCommercialkabuliyatibanBibaranQuery = `select * from commercialkabuliyatiban_bibarans as c where c.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllCommercialkabuliyatibanBibaranQuery,
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

//Controller for Listing a CommercialkabuliyatibanBibaran
async function getCommercialkabuliyatibanBibaran(req, res) {
  const getCommercialkabuliyatibanBibaranQuery = `select * from commercialkabuliyatiban_bibarans where darta_no=?`;
  pool.query(
    getCommercialkabuliyatibanBibaranQuery,
    [req.params.commercialkabuliyatibanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a CommercialkabuliyatibanBibaran
async function addCommercialkabuliyatibanBibaran(req, res) {
  const addCommercialkabuliyatibanBibaranQuery = `INSERT INTO commercialkabuliyatiban_bibarans (darta_no, darta_miti, dist_id, office_id, commercialkabuliyatiban_naam, address, area, main_species, dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addCommercialkabuliyatibanBibaranQuery,
    [
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.office_id,
      req.body.commercialkabuliyatiban_naam,
      req.body.address,
      req.body.area,
      req.body.main_species,
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

//Controller for updating a CommercialkabuliyatibanBibaran
async function updateCommercialkabuliyatibanBibaran(req, res) {
  const updateCommercialkabuliyatibanBibaranQuery = `UPDATE commercialkabuliyatiban_bibarans SET darta_no=?, darta_miti=?, dist_id=?, office_id=?,commercialkabuliyatiban_naam=?, address=?, area=?, main_species=?, dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateCommercialkabuliyatibanBibaranQuery,
    [
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.office_id,
      req.body.commercialkabuliyatiban_naam,
      req.body.address,
      req.body.area,
      req.body.main_species,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.created_by,
      req.body.updated_by,
      req.params.commercialkabuliyatibanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a CommercialkabuliyatibanBibaran
async function deleteCommercialkabuliyatibanBibaran(req, res) {
  const deleteCommercialkabuliyatibanBibaranQuery = `DELETE  FROM commercialkabuliyatiban_bibarans where darta_no=?`;
  pool.query(
    deleteCommercialkabuliyatibanBibaranQuery,
    [req.params.commercialkabuliyatibanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllCommercialkabuliyatibanBibaran,
  getCommercialkabuliyatibanBibaran,
  addCommercialkabuliyatibanBibaran,
  updateCommercialkabuliyatibanBibaran,
  deleteCommercialkabuliyatibanBibaran,
};
