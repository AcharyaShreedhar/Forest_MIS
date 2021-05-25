const pool = require("../db");

//Controller for Listing all Level
async function getAllLevel(req, res) {
  const getAllLevelQuery = `select * from levels`;
  pool.query(getAllLevelQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Level
async function getLevel(req, res) {
  const getLevelQuery = `select * from levels where level_id=?`;
  pool.query(getLevelQuery, [req.params.levelId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Level
async function addLevel(req, res) {
  const addLevelQuery = `INSERT INTO levels (level_name_eng,level_name_nep,created_by,updated_by) values (?,?,?,?)`;
  pool.query(
    addLevelQuery,
    [
      req.body.level_name_eng,
      req.body.level_name_nep,
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

//Controller for updating a Level
async function updateLevel(req, res) {
  const updateLevelQuery = `UPDATE levels SET level_name_eng=?, level_name_nep=?,created_by=?,updated_by=? WHERE level_id=$3`;
  pool.query(
    updateLevelQuery,
    [
      req.body.level_name_eng,
      req.body.level_name_nep,
      req.body.created_by,
      req.body.updated_by,
      req.params.levelId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Level
async function deleteLevel(req, res) {
  const deleteLevelQuery = `DELETE  FROM levels where level_id=?`;
  pool.query(
    deleteLevelQuery,
    [req.params.levelId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllLevel,
  getLevel,
  addLevel,
  updateLevel,
  deleteLevel,
};
