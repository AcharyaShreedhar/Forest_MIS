const pool = require("../db");

//Controller for Listing all samajikkaryaBibaran
async function getAllSamajikkaryaBibaran(req, res) {

  let office_cond = "s.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "s.office_id in (?)"
  }

  let dist_cond = "s.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "s.dist_id in (?)"
  }

  const getTotalQuery = `SELECT count(*) as total from  samajik_karyabibarans as s where ${dist_cond} and ${office_cond}`;
  const getAllSamajikkaryaBibaranQuery = `select * from samajik_karyabibarans as s where ${dist_cond} and ${office_cond} ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [req.body.distId, req.body.officeId], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllSamajikkaryaBibaranQuery,
      [req.body.distId, req.body.officeId, req.body.name, req.body.page, req.body.perPage],
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

//Controller for Listing a SamajikkaryaBibaran
async function getSamajikkaryaBibaran(req, res) {
  const getSamajikkaryaBibaranQuery = `select * from samajik_karyabibarans where samajik_karyabibaran_id=?`;
  pool.query(
    getSamajikkaryaBibaranQuery,
    [req.params.samajikkaryabibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SamajikkaryaBibaran
async function addSamajikkaryaBibaran(req, res) {
  const addSamajikkaryaBibaranQuery = `INSERT INTO samajik_karyabibarans(dist_id,office_id,samajik_karyabibaran,samajik_ekai,samajik_parinam,samajik_bajetkharcha,ban_type,created_by,updated_by) values (?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSamajikkaryaBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.samajik_karyabibaran,
      req.body.samajik_ekai,
      req.body.samajik_parinam,
      req.body.samajik_bajetkharcha,
      req.body.ban_type,
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

//Controller for updating a samajikkaryaBibaran
async function updateSamajikkaryaBibaran(req, res) {
  const updateSamajikkaryaBibaranQuery = `UPDATE samajik_karyabibarans SET dist_id=?,office_id=?,samajik_karyabibaran=?,samajik_ekai=?,samajik_parinam=?,samajik_bajetkharcha=?,ban_type=?,created_by=?,updated_by=? WHERE samajik_karyabibaran_id=?`;
  pool.query(
    updateSamajikkaryaBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.samajik_karyabibaran,
      req.body.samajik_ekai,
      req.body.samajik_parinam,
      req.body.samajik_bajetkharcha,
      req.body.ban_type,
      req.body.created_by,
      req.body.updated_by,
      req.params.samajikkaryabibaranId,
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

//Controller for deleting a Samajikkaryabibaran
async function deleteSamajikkaryaBibaran(req, res) {
  const deleteSamajikkaryaBibaranQuery = `DELETE  FROM samajik_karyabibarans where samajik_karyabibaran_id=?`;
  pool.query(
    deleteSamajikkaryaBibaranQuery,
    [req.params.samajikkaryabibaranId],
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
  getAllSamajikkaryaBibaran,
  getSamajikkaryaBibaran,
  addSamajikkaryaBibaran,
  updateSamajikkaryaBibaran,
  deleteSamajikkaryaBibaran,
};
