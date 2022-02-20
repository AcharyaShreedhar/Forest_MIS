const pool = require("../db");
//Controller for Listing all Jadibutis
async function getAllJadibuti(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "j.office_id like ?"
  if(office_length > 1){
    office_cond = "j.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "j.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "j.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from jadibutis as j where ${dist_cond} and ${office_cond}`;
  const getAllJadibutiQuery = `select * from jadibutis as j where ${dist_cond} and ${office_cond} ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllJadibutiQuery,
        [
          req.body.distId,
          req.body.officeId,
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

//Controller for Listing a Jadibuti
async function getJadibuti(req, res) {
  const getJadibutiQuery = `select * from jadibutis where jadibuti_id=?`;
  pool.query(
    getJadibutiQuery,
    [req.params.jadibutiId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Jadibuti
async function addJadibuti(req, res, next) {
  const addJadibutiQuery = `INSERT INTO jadibutis (dist_id, office_id, jadibuti_thegana, jadibuti_kisim, jadibuti_prajati, jadibuti_laxya, jadibuti_pragati, jadibuti_sankhya, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addJadibutiQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.jadibuti_thegana,
      req.body.jadibuti_kisim,
      req.body.jadibuti_prajati,
      req.body.jadibuti_laxya,
      req.body.jadibuti_pragati,
      req.body.jadibuti_sankhya,
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

//Controller for updating a Jadibuti
async function updateJadibuti(req, res, next) {
  const updateJadibutiQuery = `UPDATE jadibutis SET dist_id=?, office_id=?, jadibuti_thegana=?, jadibuti_kisim=?, jadibuti_prajati=?, jadibuti_laxya=?, jadibuti_pragati=?, jadibuti_sankhya=?, created_by=?, updated_by=? WHERE jadibuti_id=?`;
  pool.query(
    updateJadibutiQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.jadibuti_thegana,
      req.body.jadibuti_kisim,
      req.body.jadibuti_prajati,
      req.body.jadibuti_laxya,
      req.body.jadibuti_pragati,
      req.body.jadibuti_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.jadibutiId,
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

//Controller for deleting a Jadibuti
async function deleteJadibuti(req, res, next) {
  const deleteJadibutiQuery = `DELETE  FROM jadibutis where jadibuti_id=?`;
  pool.query(
    deleteJadibutiQuery,
    [req.params.jadibutiId],
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
  getAllJadibuti,
  getJadibuti,
  addJadibuti,
  updateJadibuti,
  deleteJadibuti,
};
