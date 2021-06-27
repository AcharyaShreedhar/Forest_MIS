const pool = require("../db");

//Controller for Listing all UddhyamBibaran
async function getAllUddhyamBibaran(req, res) {
 const getTotalQuery = "SELECT count(*) as total from  uddhyam_bibarans";
  const getAllUddhyamBibaranQuery = `select * from uddhyam_bibarans ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllUddhyamBibaranQuery,
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
            

//Controller for Listing a UddhyamBibaran
async function getUddhyamBibaran(req, res) {
  const getUddhyamBibaranQuery = `select * from uddhyam_bibarans where uddhyam_id=?`;
  pool.query(getUddhyamBibaranQuery, [req.params.uddhyamId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a UddhyamBibaran
async function addUddhyamBibaran(req, res) {
  const addUddhyamBibaranQuery = `INSERT INTO udhhyam_bibarans(niji_uddhyam_sankhya,niji_rojgari_sankhya,samudayik_uddhyam_sankhya,samudayik_rojgari_sankhya,sahakari_uddhyam_sankhya,sahakari_rojgari_sankhya,created_by,updated_by) values (?,?,?,?,?,?,?,?)`;
  pool.query(
    addUddhyamBibaranQuery,
    [
        req.body.niji_uddhyam_sankhya,
        req.body.niji_rojgari_sankhya,
        req.body.samudayik_uddhyam_sankhya,
        req.body.samudayik_rojgari_sankhya,
        req.body.sahakari_uddhyam_sankhya,
        req.body.sahakari_rojgari_sankhya,
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

//Controller for updating a UddhyamBibaran
async function updateUddhyamBibaran(req, res) {
  const updateUddhyamBibaranQuery = `UPDATE uddhyam_bibarans SET niji_uddhyam_sankhya=?,niji_rojgari_sankhya=?,samudayik_uddhyam_sankhya=?,samudayik_rojgari_sankhya=?,sahakari_uddhyam_sankhya=?,sahakari_rojgari_sankhya=?,created_by=?,updated_by=? WHERE uddhyam_id=?`;
  pool.query(
    updateUddhyamBibaranQuery,
    [
        req.body.niji_uddhyam_sankhya,
        req.body.niji_rojgari_sankhya,
        req.body.samudayik_uddhyam_sankhya,
        req.body.samudayik_rojgari_sankhya,
        req.body.sahakari_uddhyam_sankhya,
        req.body.sahakari_rojgari_sankhya,
        req.body.created_by, 
        req.body.updated_by,  
        req.params.uddhyamId,
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
async function deleteUddhyamBibaran(req, res) {
  const deleteUddhyamBibaranQuery = `DELETE  FROM uddhyam_bibarans where uddhyam_id=?`;
  pool.query(
    deleteUddhyamBibaranQuery,
    [req.params.uddhyamId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllUddhyamBibaran,
  getUddhyamBibaran,
  addUddhyamBibaran,
  updateUddhyamBibaran,
  deleteUddhyamBibaran,
};
