const pool = require("../db");
//Controller for Listing all NijibanBibaran
async function getAllNijibanBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from nijiban_bibarans as n where n.swikrit_miti BETWEEN ? and ? and n.dist_id like ?";
  const getAllNijibanBibaranQuery = `select * from nijiban_bibarans as n where n.swikrit_miti BETWEEN ? and ? and n.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllNijibanBibaranQuery,
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

//Controller for Listing a NijibanBibaran
async function getNijibanBibaran(req, res) {
  const getNijibanBibaranQuery = `select * from nijiban_bibarans where nijiban_bibaran_id=?`;
  pool.query(
    getNijibanBibaranQuery,
    [req.params.nijibanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a NijibanBibaran
async function addNijibanBibaran(req, res) {
  const addNijibanBibaranQuery = `INSERT INTO nijiban_bibarans (dist_id, darta_no,swikrit_miti, nijiban_dhaniko_naam, perm_addr, curr_addr, area, main_species, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addNijibanBibaranQuery,
    [
      req.body.dist_id,
      req.body.darta_no,
      req.body.swikrit_miti,
      req.body.nijiban_dhaniko_naam,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.area,
      req.body.main_species,
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

//Controller for updating a NijibanBibaran
async function updateNijibanBibaran(req, res) {
  const updateNijibanBibaranQuery = `UPDATE nijiban_bibarans SET dist_id=?, darta_no=?, swikrit_miti=?, nijiban_dhaniko_naam=?, perm_addr=?, curr_addr=?, area=?, main_species=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateNijibanBibaranQuery,
    [
      req.body.dist_id,
      req.body.darta_no,
      req.body.swikrit_miti,
      req.body.nijiban_dhaniko_naam,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.area,
      req.body.main_species,
      req.body.created_by,
      req.body.updated_by,
      req.params.nijibanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a NijibanBibaran
async function deleteNijibanBibaran(req, res) {
  const deleteNijibanBibaranQuery = `DELETE  FROM nijiban_bibarans where darta_no=?`;
  pool.query(
    deleteNijibanBibaranQuery,
    [req.params.nijibanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllNijibanBibaran,
  getNijibanBibaran,
  addNijibanBibaran,
  updateNijibanBibaran,
  deleteNijibanBibaran,
};
