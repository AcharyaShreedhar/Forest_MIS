const pool = require("../db");

//Service for Listing all Level
module.exports = {
  getAllLevel: (callBack) => {
    const getAllLevelQuery = `select * from level`;
    pool.query(getAllLevelQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Level
module.exports = {
  getLevel: (callBack) => {
    const getLevelQuery = `select * from level where level_id=$1`;
    pool.query(
      getLevelQuery,
      [req.params.levelId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Level
module.exports = {
  addLevel: (callBack) => {
    const addLevelQuery = `INSERT INTO level (prov_name_eng,prov_name_nep) values ($1,$2) returning *`;
    pool.query(
      addLevelQuery,
      [req.body.prov_name_eng, req.body.prov.name_nep],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Level
module.exports = {
  updateLevel: (callBack) => {
    const updateLevelQuery = `UPDATE level SET prov_name_eng=$1, prov_name_nep=$2 WHERE level_id=$3 returning *`;
    pool.query(
      updateLevelQuery,
      [req.body.prov_name_eng, req.body.prov_name_nep, req.params.levelId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Level
module.exports = {
  deleteLevel: (callBack) => {
    const deleteLevelQuery = `DELETE  FROM level where level_id=$1`;
    pool.query(
      deleteLevelQuery,
      [req.params.levelId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
