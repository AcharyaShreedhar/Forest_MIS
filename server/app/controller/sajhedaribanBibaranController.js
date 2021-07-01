const pool = require("../db");
//Controller for Listing all SajhedaribanBibaran
async function getAllSajhedaribanBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from sajhedariban_bibarans as s where s.handover_date BETWEEN ? and ? and s.dist_id like ?";
  const getAllSajhedaribanBibaranQuery =
    "SELECT s.*,n.renewal_date,n.renewed_date,n.nabikaran_abadhi FROM `sajhedariban_bibarans` as s left JOIN nabikaran_karyayojanas as n on s.darta_no=n.darta_id HAVING s.handover_date BETWEEN ? and ? and s.dist_id like ? ORDER BY ? DESC LIMIT ?,?";
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
  const getSajhedaribanBibaranQuery =
    "SELECT sajhedariban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `sajhedariban_bibarans` left JOIN nabikaran_karyayojanas on sajhedariban_bibarans.darta_no=nabikaran_karyayojanas.darta_id where sajhedariban_bibarans.sajhedariban_id=?";
  pool.query(
    getSajhedaribanBibaranQuery,
    [req.params.SajhedaribanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SajhedaribanBibaran
async function addSajhedaribanBibaran(req, res) {
  const addSajhedaribanBibaranQuery = `INSERT INTO sajhedariban_bibarans (darta_no, dist_id, sajhedariban_name, area, main_species, forest_type, handover_date, forest_maujdat, nikasi_timber, nikasi_wood, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSajhedaribanBibaranQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.sajhedariban_name,
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
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a SajhedaribanBibaran
async function updateSajhedaribanBibaran(req, res) {
  const updateSajhedaribanBibaranQuery = `UPDATE sajhedariban_bibarans SET darta_no=?, dist_id=?, sajhedariban_name=?, area=?, main_species=?, forest_type=?, handover_date=?, forest_maujdat=?, nikasi_timber=?, nikasi_wood=?, created_by=?, updated_by=? WHERE sajhedariban_id=?`;
  pool.query(
    updateSajhedaribanBibaranQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.sajhedariban_name,
      req.body.area,
      req.body.main_species,
      req.body.forest_type,
      req.body.handover_date,
      req.body.forest_maujdat,
      req.body.nikasi_timber,
      req.body.nikasi_wood,
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
  const deleteSajhedaribanBibaranQuery = `DELETE  FROM sajhedariban_bibarans where sajhedariban_id=?`;
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

//** */
