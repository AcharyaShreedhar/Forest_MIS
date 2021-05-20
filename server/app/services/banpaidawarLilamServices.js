const pool = require("../db");

//Service for Listing all banpaidawarLilam
module.exports = {
  getAllBanpaidawarLilam: (callBack) => {
    const getAllBanpaidawarLilamQuery = `select * from banpaidawar_lilam`;
    pool.query(getAllBanpaidawarLilamQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a banpaidawarLilam
module.exports = {
  getBanpaidawarLilam: (callBack) => {
    const getBanpaidawarLilamQuery = `select * from banpaidawar_lilam where banpaidawar_lilam_id=$1`;
    pool.query(
      getBanpaidawarLilamQuery,
      [req.params.banpaidawarlilamId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a banpaidawarLilam
module.exports = {
  addBanpaidawarLilam: (callBack) => {
    const addBanpaidawarLilamQuery = `INSERT INTO banpaidawar_lilam (lilam_date, banpaidawar_type, unit, quantity, minimum_price, sakaar_price,remarks,created_by,updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
    pool.query(
      addBanpaidawarLilamQuery,
      [req.body.lilam_date, req.body.banpaidawar_type, req.body.unit, req.body.quantity, req.body.minimum_price,req.body.sakaar_price, req.body.remarks, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating banpaidawarLilam
module.exports = {
  updateBanpaidawarLilam: (callBack) => {
    const updateBanpaidawarLilamQuery = `UPDATE banpaidawar_lilam SET lilam_date=$1, banpaidawar_type=$2, unit=$3, quantity=$4, minimum_price=$5, sakaar_price=$6, remarks=$7, created_by=$8, updated_by=$9 WHERE lilam_id=$10 returning *`;
    pool.query(
      updateBanpaidawarLilamQuery,
      [req.body.lilam_date, req.body.banpaidawar_type, req.body.unit, req.body.quantity, req.body.minimum_price,req.body.sakaar_price, req.body.remarks, req.body.created_by, req.body.updated_by, req.params.banpaidawarlilamId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting banpaidawarLilam
module.exports = {
  deleteBanpaidawarLilam: (callBack) => {
    const deleteBanpaidawarLilamQuery = `DELETE  FROM banpaidawar_lilam where banpaidawar_lilam_id=$1`;
    pool.query(
      deleteBanpaidawarLilamQuery,
      [req.params.banpaidawarlilamId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
