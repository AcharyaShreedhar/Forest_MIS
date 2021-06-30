const pool = require("../db");

// controller for getting all Rojgar srijana
async function getAllRojgarSrijana(req, res) {
    const getTotalQuery = "SELECT count(*) as total from  rojgar_srijanas";
    const getAllRojgarSrijanaQuery = `select * from rojgar_srijanas ORDER BY ? ASC LIMIT ?, ?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllRojgarSrijanaQuery,
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

// controller for getting a rojgar srijana
async function getRojgarSrijana(req, res) {
  const getRojgarSrijanaQuery = "select * from rojgar_srijanas where rojgar_srijana_id=?";
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

async function addRojgarSrijana(req, res) {
  const addRojgarSrijanaQuery = `INSERT INTO rojgar_srijanas (karyaharu,ekai,banka_prakar,mahila,purus,jamma,kaifiyat,created_by,updated_by) values (?,?,?,?,?,?,?,?,?)`;
  await pool.query(
    addRojgarSrijanaQuery,
    [
      req.body.karyaharu,
      req.body.ekai,
      req.body.banka_prakar,
      req.body.mahila,
      req.body.purus,
      req.body.jamma,
      req.body.kaifiyat,
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

//Controller for updating a rojgar srijana

async function updateRojgarSrijana(req, res) {
  const updateRojgarSrijanaQuery = `UPDATE rojgar_srijanas SET karyaharu=?, ekai=?, banka_prakar=?, mahila=?, purus=?, jamma=?, kaifiyat=?,created_by=?,updated_by=? WHERE rojgar_srijana_id=?`;
  await pool.query(
    updateRojgarSrijanaQuery,
    [
      req.body.karyaharu,
      req.body.ekai,
      req.body.banka_prakar,
      req.body.mahila,
      req.body.purus,
      req.body.jamma,
      req.body.kaifiyat,
      req.body.created_by,
      req.body.updated_by,
      req.params.rojgarsrijanaId
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a rojgarsrijana

async function deleteRojgarSrijana(req, res) {
  const deleteRojgarSrijanaQuery = `DELETE  FROM rojgar_srijanas where rojgar_srijana_id=?`;
  pool.query(
    deleteRojgarSrijanaQuery,
    [req.params.rojgarsrijanaId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
    getAllRojgarSrijana,
    getRojgarSrijana,
    addRojgarSrijana,
    updateRojgarSrijana,
    deleteRojgarSrijana
};
