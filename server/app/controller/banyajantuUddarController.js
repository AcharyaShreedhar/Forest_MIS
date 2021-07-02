const pool = require("../db");

//Controller for Listing all Banyajantu Uddars
async function getAllBanyajantuUddars(req, res) {
  const getTotalQuery = "SELECT count(*) as total from banyajantu_uddars";
  const getAllBanyajantuUddarsQuery = `select * from banyajantu_uddars ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllBanyajantuUddarsQuery,
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

//Controller for Listing a Banyajantu Uddar
async function getBanyajantuUddars(req, res) {
  const getBanyajantuUddarsQuery = `select * from banyajantu_uddars where banyajantu_uddar_id=?`;
  pool.query(
    getBanyajantuUddarsQuery,
    [req.params.banyajantuUddarId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Banyajantu Uddar
async function addBanyajantuUddars(req, res) {
  const addBanyajantuUddarsQuery = `INSERT INTO banyajantu_uddars (dist_id, miti,sthaniya_taha,samaya,samraxit_xetra,banyajantuko_naam,banyajantuko_umer,banyajantuko_abastha,mareko_karan,banxetra_duri,anya_bibaran,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanyajantuUddarsQuery,
    [
      req.body.dist_id,
      req.body.miti,
      req.body.sthaniya_taha,
      req.body.samaya,
      req.body.samraxit_xetra,
      req.body.banyajantuko_naam,
      req.body.banyajantuko_umer,
      req.body.banyajantuko_abastha,
      req.body.mareko_karan,
      req.body.banxetra_duri,
      req.body.anya_bibaran,
      req.body.remarks,
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

//Controller for updating a Banyajantu Uddar
async function updateBanyajantuUddars(req, res) {
  const updateBanyajantuUddarsQuery = `UPDATE banyajantu_uddars SET dist_id=?, miti=?,sthaniya_taha=?,samaya=?,samraxit_xetra=?,banyajantuko_naam=?,banyajantuko_umer=?,banyajantuko_abastha=?,mareko_karan=?,banxetra_duri=?,anya_bibaran=?,remarks=?,created_by=?,updated_by=? WHERE banyajantu_uddar_id=?`;
  pool.query(
    updateBanyajantuUddarsQuery,
    [
      req.body.dist_id,
      req.body.miti,
      req.body.sthaniya_taha,
      req.body.samaya,
      req.body.samraxit_xetra,
      req.body.banyajantuko_naam,
      req.body.banyajantuko_umer,
      req.body.banyajantuko_abastha,
      req.body.mareko_karan,
      req.body.banxetra_duri,
      req.body.anya_bibaran,
      req.body.remarks,
      req.body.created_by,
      req.body.updated_by,
      req.params.banyajantuUddarId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Banyajantu Uddar
async function deleteBanyajantuUddars(req, res) {
  const deleteBanyajantuUddarsQuery = `DELETE  FROM banyajantu_uddars WHERE banyajantu_uddar_id=?`;
  pool.query(
    deleteBanyajantuUddarsQuery,
    [req.params.banyajantuUddarId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanyajantuUddars,
  getBanyajantuUddars,
  addBanyajantuUddars,
  updateBanyajantuUddars,
  deleteBanyajantuUddars,
};
