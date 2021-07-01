const pool = require("../db");
//Controller for Listing all ChaklabanBibaran
async function getAllChaklabanBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from chaklaban_bibarans as n where n.darta_miti BETWEEN ? and ? and n.dist_id like ?";
  const getAllChaklabanBibaranQuery = `select * from chaklaban_bibarans as n where n.darta_miti BETWEEN ? and ? and n.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllChaklabanBibaranQuery,
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
//Controller for Listing allchaklabanBibaran
async function getAllChaklabanBibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from Chaklaban_bibarans";
  const getAllChaklabanBibaranQuery = `select * from chaklaban_bibarans ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllChaklabanBibaranQuery,
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

//Controller for Listing a ChaklabanBibaran
async function getChaklabanBibaran(req, res) {
  const getChaklabanBibaranQuery = `select * from chaklaban_bibarans where chaklaban_bibaran_id=?`;
  pool.query(
    getChaklabanBibaranQuery,
    [req.params.chaklabanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a ChaklabanBibaran
async function addChaklabanBibaran(req, res) {
  const addChaklabanBibaranQuery = `INSERT INTO chaklaban_bibarans (chaklaban_naam, darta_no, darta_miti, dist_id, address, main_species, area, ghardhuri, lav_jana, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addChaklabanBibaranQuery,
    [
      req.body.chaklaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.address,
      req.body.main_species,
      req.body.area,
      req.body.ghardhuri,
      req.body.lav_jana,
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

//Controller for updating a ChaklabanBibaran
async function updateChaklabanBibaran(req, res) {
  const updateChaklabanBibaranQuery = `UPDATE Chaklaban_bibarans SET chaklaban_naam=?, darta_no=?, darta_miti=?, dist_id=?, address=?, main_species=?, area=?, ghardhuri=?, lav_jana=?, created_by=?, updated_by=? WHERE chaklaban_bibaran_id=?`;
  pool.query(
    updateChaklabanBibaranQuery,
    [
      req.body.chaklaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.address,
      req.body.main_species,
      req.body.area,
      req.body.ghardhuri,
      req.body.lav_jana,
      req.body.created_by,
      req.body.updated_by,
      req.params.chaklabanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a ChaklabanBibaran
async function deleteChaklabanBibaran(req, res) {
  const deleteChaklabanBibaranQuery = `DELETE  FROM chaklaban_bibarans where chaklaban_bibaran_id=?`;
  pool.query(
    deleteChaklabanBibaranQuery,
    [req.params.ChaklabanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllChaklabanBibaran,
  getChaklabanBibaran,
  addChaklabanBibaran,
  updateChaklabanBibaran,
  deleteChaklabanBibaran,
};
