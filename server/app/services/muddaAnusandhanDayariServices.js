const pool = require("../db");

//Service for Listing all MuddaAnusandhanDayari
module.exports = {
  getAllMuddaAnusandhanDayari: (callBack) => {
    const getAllMuddaAnusandhanDayariQuery = `select * from mudda_anusandhan_dayari`;
    pool.query(getAllMuddaAnusandhanDayariQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a MuddaAnusandhanDayari
module.exports = {
  getMuddaAnusandhanDayari: (callBack) => {
    const getMuddaAnusandhanDayari = `select * from mudda_anusandhan_dayari where mudda_anusandhan_dayari_id=$1`;
    pool.query(
      getMuddaAnusandhanDayariQuery,
      [req.params.muddaAnusandhanDayariId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a MuddaAnusandhanDayari
module.exports = {
  addMuddaAnusandhanDayari: (callBack) => {
    const addMuddaAnusandhanDayariQuery = `INSERT INTO mudda_anusandhan_dayari (jaheri_partibedan_miti, kasurko_kisim, bigo_pariman, jaggako_area, jaggako_thegana, abhiyog_miti, abhiyog_nikaya, abhiyog_jariwana, kaid, bojbahak_jafat_maagdabi, pratibadi_sankhya, thunchek_dharauti, sadharan_tarekh, thuna_aadhes, faisala_miti, faisala_jariwana, faisala_kaid, bojbahak_jafat, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15.$16,$17,$18,$19,$20) returning *`;
    pool.query(
      addMuddaAnusandhanDayariQuery,
      [req.body.jaheri_partibedan_miti, req.body.kasurko_kisim, req.body.bigo_pariman, req.body.jaggako_area, req.body.jaggako_thegana, req.body.abhiyog_miti, req.body.abhiyog_nikaya, req.body.abhiyog_jariwana, req.body.kaid, req.body.bojbahak_jafat_maagdabi, req.body.pratibadi_sankhya, req.body.thunchek_dharauti, req.body.sadharan_tarekh, req.body.thuna_aadhes, req.body.faisala_miti, req.body.faisala_jariwana, req.body.faisala_kaid, req.body.bojbahak_jafat, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating MuddaAnusandhanDayari
module.exports = {
  updateMuddaAnusandhanDayari: (callBack) => {
    const updateMuddaAnusandhanDayariQuery = `UPDATE mudda_anusandhan_dayari SET jaheri_partibedan_miti=$1, kasurko_kisim=$2, bigo_pariman=$3, jaggako_area=$4, jaggako_thegana=$5, abhiyog_miti=$6, abhiyog_nikaya=$7, abhiyog_jariwana=$8, kaid=$9, bojbahak_jafat_maagdabi=$10, pratibadi_sankhya=$11, thunchek_dharauti=$12, sadharan_tarekh=$13, thuna_aadhes=$14, faisala_miti=$15, faisala_jariwana=$16, faisala_kaid=$17, bojbahak_jafat=$18, created_by=$19, updated_by=$20 WHERE mudda_anusandhan_dayari_id=$21 returning *`;
    pool.query(
      updateMuddaAnusandhanDayariQuery,
      [req.body.jaheri_partibedan_miti, req.body.kasurko_kisim, req.body.bigo_pariman, req.body.jaggako_area, req.body.jaggako_thegana, req.body.abhiyog_miti, req.body.abhiyog_nikaya, req.body.abhiyog_jariwana, req.body.kaid, req.body.bojbahak_jafat_maagdabi, req.body.pratibadi_sankhya, req.body.thunchek_dharauti, req.body.sadharan_tarekh, req.body.thuna_aadhes, req.body.faisala_miti, req.body.faisala_jariwana, req.body.faisala_kaid, req.body.bojbahak_jafat, req.body.created_by, req.body.updated_by, req.params.muddaAnusandhanDayariId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting muddaAnusandhanDayari
module.exports = {
  deleteMuddaAnusandhanDayari: (callBack) => {
    const deleteMuddaAnusandhanDayariQuery = `DELETE  FROM mudda_anusandhan_dayari where muddaAnusandhanDayari_id=$1`;
    pool.query(
      deleteMuddaAnusandhanDayariQuery,
      [req.params.muddaAnusandhanDayariId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
