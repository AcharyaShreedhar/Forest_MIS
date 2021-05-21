const pool = require("../db");

//Service for Listing all biruwaUtpadan
module.exports = {
  getAllBiruwaUtpadan: (callBack) => {
    const getAllBiruwaUtpadanQuery = `select * from biruwautpadan`;
    pool.query(getAllBiruwaUtpadanQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing biruwaUtpadan
module.exports = {
  getBiruwaUtpadan: (callBack) => {
    const getBiruwaUtpadanQuery = `select * from biruwautpadan where biruwautpadan_id=$1`;
    pool.query(
      getBiruwaUtpadanQuery,
      [req.params.biruwaUtpadanId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding BiruwaUtpadan
module.exports = {
  addBiruwaUtpadan: (callBack) => {
    const addBiruwaUtpadanQuery = `INSERT INTO biruwautpadan (arthik_barsa, narsari_sankhya, barga, laxya, pragati, brixyaropan, remarks, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
    pool.query(
      addBiruwaUtpadanQuery,
      [req.body.arthik_barsa, req.body.narsari_sankhya, req.body.barga, req.body.laxya, req.body.pragati, req.body.brixyaropan, req.body.remarks, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a biruwaUtpadan
module.exports = {
  updateBiruwaUtpadan: (callBack) => {
    const updateBiruwaUtpadanQuery = `UPDATE biruwautpadan SET arthik_barsa=$1, narsari_sankhya=$2, barga=$3, laxya=$4, pragati=$5, brixyaropan=$6, remarks=$7, created_by=$8, updated_by=$9 WHERE biruwautpadan_id=$10 returning *`;
    pool.query(
      updateBiruwaUtpadanQuery,
      [req.body.arthik_barsa, req.body.narsari_sankhya, req.body.barga, req.body.laxya, req.body.pragati, req.body.brixyaropan, req.body.remarks, req.body.created_by, req.body.updated_by, req.params.biruwaUtpadanId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a biruwaUtpadan
module.exports = {
  deleteBiruwaUtpadan: (callBack) => {
    const deleteBiruwaUtpadanQuery = `DELETE  FROM biruwautpadan where biruwautpadan_id=$1`;
    pool.query(
      deleteBiruwaUtpadanQuery,
      [req.params.biruwaUtpadanId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
