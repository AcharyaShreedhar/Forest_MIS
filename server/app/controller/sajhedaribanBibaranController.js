const pool = require("../db");
//Controller for Listing all SajhedaribanBibaran
async function getAllSajhedaribanBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from sajhedariban_bibarans as s where s.darta_miti BETWEEN ? and ? and s.dist_id like ?";
  const getAllSajhedaribanBibaranQuery = `select * from sajhedariban_bibarans as s where s.darta_miti BETWEEN ? and ? and s.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllSajhedaribanBibaranQuery,
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

//Controller for Listing a SajhedaribanBibaran
async function getSajhedaribanBibaran(req, res) {
  const getSajhedaribanBibaranQuery = `select * from sajhedariban_bibarans where sajhedariban_id=?`;
  pool.query(
    getSajhedaribanBibaranQuery,
    [req.params.sajhedaribanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SajhedaribanBibaran
async function addSajhedaribanBibaran(req, res) {
  const addSajhedaribanBibaranQuery = `INSERT INTO sajhedariban_bibarans (darta_no, darta_miti, dist_id, sajhedariban_naam, address, area, main_species, dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSajhedaribanBibaranQuery,
    [
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.sajhedariban_naam,
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

//Controller for updating a SajhedaribanBibaran
async function updateSajhedaribanBibaran(req, res) {
  const updateSajhedaribanBibaranQuery = `UPDATE sajhedariban_bibarans SET darta_no=?, darta_miti=?, dist_id=?, sajhedariban_naam=?, address=?, area=?, main_species=?, dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateSajhedaribanBibaranQuery,
    [
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.sajhedariban_naam,
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
      req.params.sajhedaribanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a SajhedaribanBibaran
async function deleteSajhedaribanBibaran(req, res) {
  const deleteSajhedaribanBibaranQuery = `DELETE  FROM sajhedariban_bibarans where darta_no=?`;
  pool.query(
    deleteSajhedaribanBibaranQuery,
    [req.params.sajhedaribanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllSajhedaribanBibaran,
  getSajhedaribanBibaran,
  addSajhedaribanBibaran,
  updateSajhedaribanBibaran,
  deleteSajhedaribanBibaran,
};
