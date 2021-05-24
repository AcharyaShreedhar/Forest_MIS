const pool = require("../db");

//Service for Listing all NabikaranKaryayojana
module.exports = {
  getAllNabikaranKaryayojana: (callBack) => {
    const getAllNabikaranKaryayojanaQuery = `select * from nabikaran_karyayojana`;
    pool.query(getAllNabikaranKaryayojanaQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a NabikaranKaryayojana
module.exports = {
  getNabikaranKaryayojana: (callBack) => {
    const getNabikaranKaryayojana = `select * from nabikaran_karyayojana where nabikaran_karyayojana_id=$1`;
    pool.query(
      getNabikaranKaryayojanaQuery,
      [req.params.nabikaranKaryayojanaId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a NabikaranKaryayojana
module.exports = {
  addNabikaranKaryayojana: (callBack) => {
    const addNabikaranKaryayojanaQuery = `INSERT INTO nabikaran_karyayojana(valid_miti, nabikaran_miti, nabikaran_abadi, darta_id, created_by, updated_by) values ($1,$2,$3,$4,$5,$6) returning *`;
    pool.query(
      addNabikaranKaryayojanaQuery,
      [req.body.valid_miti, req.body.nabikaran_miti, req.body.nabikaran_abadi, req.body.darta_id, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating NabikaranKaryayojana
module.exports = {
  updateNabikaranKaryayojana: (callBack) => {
    const updateNabikaranKaryayojanaQuery = `UPDATE nabikaran_karyayojana SET valid_miti=$1, nabikaran_miti=$2, nabikaran_abadi=$3, darta_id=$4, created_by=$5, updated_by=$6 WHERE nabikaran_karyayojana_id=$7 returning *`;
    pool.query(
      updateNabikaranKaryayojanaQuery,
      [req.body.ban_id, req.body.arthik_barsa, req.body.mahina, req.body.kaath, req.body.daura, req.body.lavgrahi_sankhya, req.body.mulyaabhibridi_kar, req.body.created_by, req.body.updated_by, req.params.nabikaranKaryayojanaId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting NabikaranKaryayojana
module.exports = {
  deleteNabikaranKaryayojana: (callBack) => {
    const deleteNabikaranKaryayojanaQuery = `DELETE  FROM nabikaran_karyayojana where nabikaran_karyayojana_id=$1`;
    pool.query(
      deleteNabikaranKaryayojanaQuery,
      [req.params.nabikaranKaryayojanaId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
