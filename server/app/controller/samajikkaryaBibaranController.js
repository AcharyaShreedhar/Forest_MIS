const pool = require("../db");

//Controller for Listing all samajikkaryaBibaran
async function getAllSamajikkaryaBibaran(req, res) {
 const getTotalQuery = "SELECT count(*) as total from  samajik_karyabibarans";
  const getAllSamajikkaryaBibaranQuery = `select * from samajik_karyabibarans ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllSamajikkaryaBibaranQuery,
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
            

//Controller for Listing a SamajikkaryaBibaran
async function getSamajikkaryaBibaran(req, res) {
  const getSamajikkaryaBibaranQuery = `select * from samajik_karyabibarans where samajik_karyabibaran_id=?`;
  pool.query(getSamajikkaryaBibaranQuery, [req.params.samajikkaryabibaranId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a SamajikkaryaBibaran
async function addSamajikkaryaBibaran(req, res) {
  const addSamajikkaryaBibaranQuery = `INSERT INTO samajik_karyabibarans(samajik_karyabibaran,samajik_ekai,samajik_parinam,samajik_bajetkharcha,ban_type,created_by,updated_by) values (?,?,?,?,?,?,?)`;
  pool.query(
    addSamajikkaryaBibaranQuery,
    [
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a samajikkaryaBibaran
async function updateSamajikkaryaBibaran(req, res) {
  const updateSamajikkaryaBibaranQuery = `UPDATE samajik_karyabibarans SET samajik_karyabibaran=?,samajik_ekai=?,samajik_parinam=?,samajik_bajetkharcha=?,ban_type=?,created_by=?,updated_by=? WHERE samajik_karyabibaran_id=?`;
  pool.query(
    updateSamajikkaryaBibaranQuery,
    [
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
