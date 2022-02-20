const pool = require("../db");

// controller for getting all Rojgar srijana
async function getAllRojgarSrijana(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "r.office_id like ?"
  if(office_length > 1){
    office_cond = "r.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "r.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "r.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from  rojgar_srijanas as r where  ${dist_cond} and ${office_cond}`;
  const getAllRojgarSrijanaQuery = `select * from rojgar_srijanas as r where  ${dist_cond} and ${office_cond} ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllRojgarSrijanaQuery,
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
    }
  );
}

// controller for getting a rojgar srijana
async function getRojgarSrijana(req, res) {
  const getRojgarSrijanaQuery =
    "select * from rojgar_srijanas where rojgar_srijana_id=?";
  await pool.query(
    getRojgarSrijanaQuery,
    [req.params.rojgarsrijanaId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Service for adding a rojgar srijana

async function addRojgarSrijana(req, res, next) {
  const addRojgarSrijanaQuery = `INSERT INTO rojgar_srijanas (dist_id, office_id, karya,miti,ekai,banka_prakar,mahila,purus,kaifiyat,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  await pool.query(
    addRojgarSrijanaQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.karya,
      req.body.miti,
      req.body.ekai,
      req.body.banka_prakar,
      req.body.mahila,
      req.body.purus,
      req.body.kaifiyat,
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

//Controller for updating a rojgar srijana

async function updateRojgarSrijana(req, res, next) {
  const updateRojgarSrijanaQuery = `UPDATE rojgar_srijanas SET dist_id=?, office_id=?, karya=?,miti=?, ekai=?, banka_prakar=?, mahila=?, purus=?, kaifiyat=?,created_by=?,updated_by=? WHERE rojgar_srijana_id=?`;
  await pool.query(
    updateRojgarSrijanaQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.karya,
      req.body.miti,
      req.body.ekai,
      req.body.banka_prakar,
      req.body.mahila,
      req.body.purus,
      req.body.kaifiyat,
      req.body.created_by,
      req.body.updated_by,
      req.params.rojgarsrijanaId,
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

//Controller for deleting a rojgarsrijana

async function deleteRojgarSrijana(req, res, next) {
  const deleteRojgarSrijanaQuery = `DELETE  FROM rojgar_srijanas where rojgar_srijana_id=?`;
  pool.query(
    deleteRojgarSrijanaQuery,
    [req.params.rojgarsrijanaId],
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
  getAllRojgarSrijana,
  getRojgarSrijana,
  addRojgarSrijana,
  updateRojgarSrijana,
  deleteRojgarSrijana,
};
