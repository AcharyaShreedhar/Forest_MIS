const pool = require("../db");
//Controller for Listing all Banbikas karyabibaran
async function getAllBanbikasKaryabibaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from banbikas_karyabibarans as b where b.dist_id like ? and b.office_id like ?";
  const getAllBanbikasKaryabibaranQuery = `select * from banbikas_karyabibarans as b where  b.dist_id like ? and b.office_id like ? ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [req.body.distId], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllBanbikasKaryabibaranQuery,
      [req.body.distId,req.body.officeId,req.body.name, req.body.page, req.body.perPage, req.body.officeId],
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

//Controller for Listing a banbikas karyabibaran
async function getBanbikasKaryabibaran(req, res) {
  const getBanbikasKaryabibaranQuery = `select * from banbikas_karyabibarans where banbikas_karyabibaran_id=?`;
  pool.query(
    getBanbikasKaryabibaranQuery,
    [req.params.banbikasKaryabibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Banbikas karyabibaran
async function addBanbikasKaryabibaran(req, res) {
  const addBanbikasKaryabibaranQuery = `INSERT INTO banbikas_karyabibarans (dist_id, office_id, banbikas_karyabibaran, banbikas_ikai, banbikas_parinam, banbikas_bajetkharcha, ban_type, created_by, updated_by) values (?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanbikasKaryabibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.banbikas_karyabibaran,
      req.body.banbikas_ikai,
      req.body.banbikas_parinam,
      req.body.banbikas_bajetkharcha,
      req.body.ban_type,
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

//Controller for updating a Banbikas karyabibaran
async function updateBanbikasKaryabibaran(req, res) {
  const updateBanbikasKaryabibaranQuery = `UPDATE banbikas_karyabibarans SET dist_id=?, office_id=?, banbikas_karyabibaran=?, banbikas_ikai=?, banbikas_parinam=?, banbikas_bajetkharcha=?, ban_type=?, created_by=?, updated_by=? WHERE banbikas_karyabibaran_id=?`;
  pool.query(
    updateBanbikasKaryabibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.banbikas_karyabibaran,
      req.body.banbikas_ikai,
      req.body.banbikas_parinam,
      req.body.banbikas_bajetkharcha,
      req.body.ban_type,
      req.body.created_by,
      req.body.updated_by,
      req.params.banbikasKaryabibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Banbikas Karyabibaran
async function deleteBanbikasKaryabibaran(req, res) {
  const deleteBanbikasKaryabibaranQuery = `DELETE  FROM banbikas_karyabibarans where banbikas_karyabibaran_id=?`;
  pool.query(
    deleteBanbikasKaryabibaranQuery,
    [req.params.banbikasKaryabibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanbikasKaryabibaran,
  getBanbikasKaryabibaran,
  addBanbikasKaryabibaran,
  updateBanbikasKaryabibaran,
  deleteBanbikasKaryabibaran,
};
