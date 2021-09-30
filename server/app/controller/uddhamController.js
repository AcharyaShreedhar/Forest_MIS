const pool = require("../db");

//Controller for Listing all UddhamBibaran
async function getAllUddhamBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from  uddhams as u where u.darta_miti BETWEEN ? and ? and u.dist_id like ?";
  const getAllUddhamBibaranQuery = `select * from uddhams as u where u.darta_miti BETWEEN ? and ? and u.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllUddhamBibaranQuery,
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

//Controller for Listing a UddhamBibaran
async function getUddhamBibaran(req, res) {
  const getUddhamBibaranQuery = `select * from uddhams where uddham_id=?`;
  pool.query(
    getUddhamBibaranQuery,
    [req.params.uddhamId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a UddhamBibaran
async function addUddhamBibaran(req, res) {
  const addUddhamBibaranQuery = `INSERT INTO uddhams(dist_id,name,address,uddham_type,darta_miti,rojgar_sankhya,created_by,updated_by) values (?,?,?,?,?,?,?,?)`;
  pool.query(
    addUddhamBibaranQuery,
    [
      req.body.dist_id,
      req.body.name,
      req.body.address,
      req.body.uddham_type,
      req.body.darta_miti,
      req.body.rojgar_sankhya,
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

//Controller for updating a UddhamBibaran
async function updateUddhamBibaran(req, res) {
  const updateUddhamBibaranQuery = `UPDATE uddhams SET dist_id=?, name=?,address=?,uddham_type=?,darta_miti=?,rojgar_sankhya=?,created_by=?,updated_by=? WHERE uddham_id=?`;
  pool.query(
    updateUddhamBibaranQuery,
    [
      req.body.dist_id,
      req.body.name,
      req.body.address,
      req.body.uddham_type,
      req.body.darta_miti,
      req.body.rojgar_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.uddhamId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Post
async function deleteUddhamBibaran(req, res) {
  const deleteUddhamBibaranQuery = `DELETE  FROM uddhams where uddham_id=?`;
  pool.query(
    deleteUddhamBibaranQuery,
    [req.params.uddhamId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllUddhamBibaran,
  getUddhamBibaran,
  addUddhamBibaran,
  updateUddhamBibaran,
  deleteUddhamBibaran,
};
