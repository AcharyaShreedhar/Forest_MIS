const pool = require("../db");

//Service for Listing all kabuliyatibanBibaran
module.exports = {
  getAllKabuliyatibanBibaran: (callBack) => {
    const getAllKabuliyatibanBibaranQuery = `select * from kabuliyatiban_Bibaran`;
    pool.query(getAllKabuliyatibanBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing all kabuliyatibanBibaran
module.exports = {
  getKabuliyatibanBibaran: (callBack) => {
    const getkabuliyatibanBibaranQuery = `select * from kabuliyatiban_bibaran where kabuliyatiban_bibaran_id=$1`;
    pool.query(
      getkabuliyatibanBibaranQuery,
      [req.params.kabuliyatibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding all kabuliyatibanBibaran
module.exports = {
  addKabuliyatibanBibaran: (callBack) => {
    const addkabuliyatibanBibaranQuery = `INSERT INTO kabuliyatiban_bibaran (entry_date, sa_ba_u_sa_name, perm_add, curr_add, ghardhuri_dalit, ghardhuri_janjati, ghardhuri_anya, ghardhuri_total, population_female, population_male, population_total, sampannata_starikaran_sampanna, sampannata_starikaran_madhyam, sampannata_starikaran_bipanna, karyasamiti_representation_dalit, karyasamiti_representation_janajati, karyasamiti_representation_anya, keypostrepresentation_adhyakshya_male, keypostrepresentation_adhyakshya_female, keypostrepresentation_sachib_male, keypostrepresentation_sachib_female, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23) returning *`;
    pool.query(
      addKabuliyatibanBibaranQuery,
      [req.body.entry_date, req.body.sa_ba_u_sa_name, req.body.perm_add, req.body.curr_add, req.body.ghardhuri_dalit, req.body.ghardhuri_janjati, req.body.ghardhuri_anya, req.body.ghardhuri_total, req.body.population_female, req.body.population_male, req.body.population_total, req.body.sampannata_starikaran_sampanna, req.body.sampannata_starikaran_madhyam, req.body.sampannata_starikaran_bipanna, req.body.karyasamiti_representation_dalit, req.body.karyasamiti_representation_janajati, req.body.karyasamiti_representation_anya, req.body.keypostrepresentation_adhyakshya_male, req.body.keypostrepresentation_adhyakshya_female, req.body.keypostrepresentation_sachib_male, req.body.keypostrepresentation_sachib_female, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating all kabuliyatibanBibaran
module.exports = {
  updatekabuliyatibanBibaran: (callBack) => {
    const updatekabuliyatibanBibaranQuery = `UPDATE kabuliyatiban_bibaran SET entry_date=$1, sa_ba_u_sa_name=$2, perm_add=$3, curr_add=$4, ghardhuri_dalit=$5, ghardhuri_janjati=$6, ghardhuri_anya=$7, ghardhuri_total=$8, population_female=$9, population_male=$10, population_total=$11, sampannata_starikaran_sampanna=$12, sampannata_starikaran_madhyam=$13, sampannata_starikaran_bipanna=$14, karyasamiti_representation_dalit=$15, karyasamiti_representation_janajati=$16, karyasamiti_representation_anya=$17, keypostrepresentation_adhyakshya_male=$18, keypostrepresentation_adhyakshya_female=$19, keypostrepresentation_sachib_male=$20, keypostrepresentation_sachib_female=$21, created_by=$22, updated_by=$23 WHERE kabuliyatiban_bibaran_id=$24 returning *`;
    pool.query(
      updateKabuliyatibanBibaranQuery,
      [req.body.entry_date, req.body.sa_ba_u_sa_name, req.body.perm_add, req.body.curr_add, req.body.ghardhuri_dalit, req.body.ghardhuri_janjati, req.body.ghardhuri_anya, req.body.ghardhuri_total, req.body.population_female, req.body.population_male, req.body.population_total, req.body.sampannata_starikaran_sampanna, req.body.sampannata_starikaran_madhyam, req.body.sampannata_starikaran_bipanna, req.body.karyasamiti_representation_dalit, req.body.karyasamiti_representation_janajati, req.body.karyasamiti_representation_anya, req.body.keypostrepresentation_adhyakshya_male, req.body.keypostrepresentation_adhyakshya_female, req.body.keypostrepresentation_sachib_male, req.body.keypostrepresentation_sachib_female, req.body.created_by, req.body.updated_by, req.params.kabuliyatibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting all kabuliyatibanBibaran
module.exports = {
  deleteKabuliyatibanBibaran: (callBack) => {
    const deleteKabuliyatibanBibaranQuery = `DELETE  FROM kabuliyatiban_bibaran where kabuliyatiban_bibaran_id=$1`;
    pool.query(
      deleteKabuliyatibanBibaranQuery,
      [req.params.kabuliyatibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
