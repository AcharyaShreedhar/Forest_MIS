const pool = require("../db");

//Service for Listing all banpaidawar
module.exports = {
  getAllBanpaidawar: (callBack) => {
    const getAllBanpaidawarQuery = `select * from ban_paidawar`;
    pool.query(getAllBanpaidawarQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a banpaidawar
module.exports = {
  getBanpaidawar: (callBack) => {
    const getBanpaidawar = `select * from ban_paidawar where ban_paidawar_id=$1`;
    pool.query(
      getBanpaidawarQuery,
      [req.params.banpaidawarId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a banpaidawar
module.exports = {
  addBanpaidawar: (callBack) => {
    const addBanpaidawarQuery = `INSERT INTO ban_paidawar (ban_id, arthik_barsa, mahina, kaath, daura, lavgrahi_sankhya, mulyaabhibridi_kar, created_by, updated_by) values ($1,$2,$3,$4,$5,$^,$7,$8,$9) returning *`;
    pool.query(
      addBanpaidawarQuery,
      [req.body.ban_id, req.body.arthik_barsa, req.body.mahina, req.body.kaath, req.body.daura, req.body.lavgrahi_sankhya, req.body.mulyaabhibridi_kar, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating banpaidawar
module.exports = {
  updateBanpaidawar: (callBack) => {
    const updateBanpaidawarQuery = `UPDATE ban_paidawar SET ban_id=$1, arthik_barsa=$2, mahina=$3, kaath=$4, daura=$5, lavgrahi_sankhya=$6, mulyaabhibridi_kar=$7, created_by=$8, updated_by=$9 WHERE ban_paidawar_id=$10 returning *`;
    pool.query(
      updateBanpaidawarQuery,
      [req.body.ban_id, req.body.arthik_barsa, req.body.mahina, req.body.kaath, req.body.daura, req.body.lavgrahi_sankhya, req.body.mulyaabhibridi_kar, req.body.created_by, req.body.updated_by, req.params.banpaidawarId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting banpaidawar
module.exports = {
  deleteBanpaidawar: (callBack) => {
    const deleteBanpaidawarQuery = `DELETE  FROM ban_paidawar where banpaidawar_id=$1`;
    pool.query(
      deletebanpaidawarQuery,
      [req.params.banpaidawarId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
