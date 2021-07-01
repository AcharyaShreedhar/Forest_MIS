const pool = require("../db");

//Controller for Listing allCommercialkabuliyatibanBibaran
async function getAllCommercialkabuliyatibanBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from commercialkabuliyatiban_bibarans";
  const getAllCommercialkabuliyatibanBibaranQuery = `select * from commercialkabuliyatiban_bibarans ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllCommercialkabuliyatibanBibaranQuery,
      [req.body.name, req.body.page, req.body.perPage],
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
  });
}

//Controller for Listing a Commercialkabuliyatiban_Bibabran
async function getCommercialkabuliyatibanBibaran(req, res) {
  const getCommercialkabuliyatibanBibaranQuery = `select * from commercialkabuliyatiban_bibarans where commercialkabuliyatiban_bibaran_id=?`;
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
  const addCommercialkabuliyatibanBibaranQuery = `INSERT INTO commercialkabuliyatiban_bibarans (darta_no, commercialkabuliyatiban_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addCommercialkabuliyatibanBibaranQuery,
    [
      req.body.darta_no,
      req.body.commercialkabuliyatiban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date, 
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
      req.body.created_by, 
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a CommercialkabuliyatibanBibaran
async function updateCommercialkabuliyatibanBibaran(req, res) {
  const updateCommercialkabuliyatibanBibaranQuery = `UPDATE commercialkabuliyatiban_bibarans SET darta_no=?, commercialkabuliyatiban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE commercialkabuliyatiban_bibaran_id=? `;
  pool.query(
    updateCommercialkabuliyatibanBibaranQuery,
    [
      req.body.darta_no,
      req.body.commercialkabuliyatiban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date, 
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
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
  const deleteCommercialkabuliyatibanBibaranQuery = `DELETE  FROM commercialkabuliyatiban_bibarans where commercialkabuliyatiban_bibaran_id=?`;
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
