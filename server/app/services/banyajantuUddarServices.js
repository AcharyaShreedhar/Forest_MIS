const pool = require("../db");

//Service for Listing all BanyajantuUddar
module.exports = {
  getAllBanyajantuUddar: (callBack) => {
    const getAllBanyajantuUddarQuery = `select * from banyajantu_uddar`;
    pool.query(getAllBanyajantuUddarQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a BanyajantuUddar
module.exports = {
  getBanyajantuUddar: (callBack) => {
    const getBanyajantuUddar = `select * from banyajantu_uddar where banyajantu_uddar_id=$1`;
    pool.query(
      getBanyajantuUddarQuery,
      [req.params.banyajantuUddarId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a BanyajantuUddar
module.exports = {
  addBanyajantuUddar: (callBack) => {
    const addBanyajantuUddarQuery = `INSERT INTO banyajantu_uddar (miti, sthaniya_taha, samaya, samraxit_xetra, banyajantuko_naam, banyajantuko_umer, banyajantuko_abastha, mareko_karan, banxetra_duri, anya_bibaran, remarks, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *`;
    pool.query(
      addBanyajantuUddarQuery,
      [req.body.miti, req.body.sthaniya_taha, req.body.samaya, req.body.samraxit_xetra, req.body.banyajantuko_naam, req.body.banyajantuko_umer, req.body.banyajantuko_abastha, req.body.mareko_karan, req.body.banxetra_duri, req.body.anya_bibaran, req.body.remarks, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating BanyajantuUddar
module.exports = {
  updateBanyajantuUddar: (callBack) => {
    const updateBanyajantuUddarQuery = `UPDATE banyajantu_uddar SET miti=$1, sthaniya_taha=$2, samaya=$3, samraxit_xetra=$4, banyajantuko_naam=$5, banyajantuko_umer=$6, banyajantuko_abastha=$7, mareko_karan=$8, banxetra_duri=$9, anya_bibaran=$10, remarks=$11, created_by=$12, updated_by=$13 WHERE banyajantu_uddar_id=$14 returning *`;
    pool.query(
      updateBanyajantuUddarQuery,
      [req.body.miti, req.body.sthaniya_taha, req.body.samaya, req.body.samraxit_xetra, req.body.banyajantuko_naam, req.body.banyajantuko_umer, req.body.banyajantuko_abastha, req.body.mareko_karan, req.body.banxetra_duri, req.body.anya_bibaran, req.body.remarks, req.body.created_by, req.body.updated_by, req.params.banyajantuUddarId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting BanyajantuUddar
module.exports = {
  deleteBanyajantuUddar: (callBack) => {
    const deleteBanyajantuUddarQuery = `DELETE  FROM banyajantu_uddar where banyajantuUddar_id=$1`;
    pool.query(
      deleteBanyajantuUddarQuery,
      [req.params.banyajantuUddarId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
