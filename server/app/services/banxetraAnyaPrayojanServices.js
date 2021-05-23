const pool = require("../db");

//Service for Listing all BanxetraAnyaPrayojan
module.exports = {
  getAllBanxetraAnyaPrayojan: (callBack) => {
    const getAllBanxetraAnyaPrayojanQuery = `select * from banxetra_anyaprayojan`;
    pool.query(getAllBanxetraAnyaPrayojanQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a BanxetraAnyaPrayojan
module.exports = {
  getBanxetraAnyaPrayojan: (callBack) => {
    const getBanxetraAnyaPrayojan = `select * from banxetra_anyaprayojan where banxetra_anyaprayojan_id=$1`;
    pool.query(
      getBanxetraAnyaPrayojanQuery,
      [req.params.banxetraAnyaPrayojanId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a BanxetraAnyaPrayojan
module.exports = {
  addBanxetraAnyaPrayojan: (callBack) => {
    const addBanxetraAnyaPrayojanQuery = `INSERT INTO banxetra_anyaprayojan (arthik_barsa, uplabdakarta_naam, upalabdha_address, xetrafal_temp, xetrafal_perm, samayaabadhi, rukh_hataunuparne, rukh_hatayeko, sattajagga_area, xetipurti_brixyaropan, sattajagga_brixyaropan, leejrakam_adhyabadhik, barsik_pratibedan, prapta_rajaswo, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) returning *`;
    pool.query(
      addBanxetraAnyaPrayojanQuery,
      [req.body.arthik_barsa, req.body.uplabdakarta_naam, req.body.upalabdha_address, req.body.xetrafal_temp, req.body.xetrafal_perm, req.body.samayaabadhi, req.body.rukh_hataunuparne, req.body.rukh_hatayeko, req.body.sattajagga_area, req.body.xetipurti_brixyaropan, req.body.sattajagga_brixyaropan, req.body.leejrakam_adhyabadhik, req.body.barsik_pratibedan, req.body.prapta_rajaswo, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating BanxetraAnyaPrayojan
module.exports = {
  updateBanxetraAnyaPrayojan: (callBack) => {
    const updateBanxetraAnyaPrayojanQuery = `UPDATE banxetra_anyaprayojan SET arthik_barsa=$1, uplabdakarta_naam=$2, upalabdha_address=$3, xetrafal_temp=$4, xetrafal_perm=$5, samayaabadhi=$6, rukh_hataunuparne=$7, rukh_hatayeko=$8, sattajagga_area=$9, xetipurti_brixyaropan=$10, sattajagga_brixyaropan=$11, leejrakam_adhyabadhik=$12, barsik_pratibedan=$13, prapta_rajaswo=$14, created_by=$15, updated_by=$16 WHERE banxetra_anyaprayojan_id=$17 returning *`;
    pool.query(
      updateBanxetraAnyaPrayojanQuery,
      [req.body.arthik_barsa, req.body.uplabdakarta_naam, req.body.upalabdha_address, req.body.xetrafal_temp, req.body.xetrafal_perm, req.body.samayaabadhi, req.body.rukh_hataunuparne, req.body.rukh_hatayeko, req.body.sattajagga_area, req.body.xetipurti_brixyaropan, req.body.sattajagga_brixyaropan, req.body.leejrakam_adhyabadhik, req.body.barsik_pratibedan, req.body.prapta_rajaswo, req.body.created_by, req.body.updated_by, req.params.BanxetraAnyaPrayojanId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting BanxetraAnyaPrayojan
module.exports = {
  deleteBanxetraAnyaPrayojan: (callBack) => {
    const deleteBanxetraAnyaPrayojanQuery = `DELETE  FROM banxetra_anyaprayojan where banxetraAnyaPrayojan_id=$1`;
    pool.query(
      deleteBanxetraAnyaPrayojanQuery,
      [req.params.BanxetraAnyaPrayojanId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
