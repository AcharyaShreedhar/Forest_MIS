const pool = require("../db");

//Service for Listing all BaramaditChijbastu
module.exports = {
  getAllBaramaditChijbastu: (callBack) => {
    const getAllBaramaditChijbastuQuery = `select * from baramadit_chijbastu`;
    pool.query(getAllBaramaditChijbastuQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a BaramaditChijbastu
module.exports = {
  getBaramaditChijbastu: (callBack) => {
    const getBaramaditChijbastu = `select * from baramadit_chijbastu where baramadit_chijbastu_id=$1`;
    pool.query(
      getBaramaditChijbastuQuery,
      [req.params.baramaditChijbastuId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a BaramaditChijbastu
module.exports = {
  addBaramaditChijbastu: (callBack) => {
    const addBaramaditChijbastuQuery = `INSERT INTO baramadit_chijbastu (kath, daura, aankhetopahar, dhunga, bojbahak, mudda_anusandhan_dayari_id, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *`;
    pool.query(
      addBaramaditChijbastuQuery,
      [req.body.kath, req.body.daura, req.body.aankhetopahar, req.body.dhunga, req.body.bojbahak, req.body.mudda_anusandhan_dayari_id, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating BaramaditChijbastu
module.exports = {
  updateBaramaditChijbastu: (callBack) => {
    const updateBaramaditChijbastuQuery = `UPDATE baramadit_chijbastu SET kath=$1, daura=$2, aankhetopahar=$3, dhunga=$4, bojbahak=$5, mudda_anusandhan_dayari_id=$6, created_by=$7, updated_by=$8 WHERE baramadit_chijbastu_id=$9 returning *`;
    pool.query(
      updateBaramaditChijbastuQuery,
      [req.body.kath, req.body.daura, req.body.aankhetopahar, req.body.dhunga, req.body.bojbahak, req.body.mudda_anusandhan_dayari_id, req.body.created_by, req.body.updated_by, req.params.baramaditChijbastuId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting BaramaditChijbastu
module.exports = {
  deleteBaramaditChijbastu: (callBack) => {
    const deleteBaramaditChijbastuQuery = `DELETE  FROM baramadit_chijbastu where baramaditChijbastu_id=$1`;
    pool.query(
      deleteBaramaditChijbastuQuery,
      [req.params.baramaditChijbastuId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
