const pool = require("../db");

//Service for Listing all upavoktasamujaBibaran
module.exports = {
  getAllUpavoktasamuhaBibaran: (callBack) => {
    const getAllUpavoktasamuhaBibaranQuery = `select * from upavoktasamuha_bibaran`;
    pool.query(getAllUpavoktasamuhaBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a upavoktasamuhaBibaran
module.exports = {
  getUpavoktasamuhaBibaran: (callBack) => {
    const getUpavoktasamuhaBibaranQuery = `select * from upavoktasamuha_bibaran where upavokta_samuha_id=$1`;
    pool.query(
      getUpavoktasamuhaBibaranQuery,
      [req.params.upavoktasamuhaBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a upavoktasamuhaBibaran
module.exports = {
  addUpavoktasamuhaBibaran: (callBack) => {
    const addUpavoktasamuhaBibaranQuery = `INSERT INTO upavoktasamuha_bibaran (registration_date, upavoktasamuha_name, addr_perm, addr_curr, ghardhuri_dalit, ghardhuri_janajati, ghardhuri_anya, ghardhuri_jamma, population_female, population_male, population_jamma, sampannata_sampanna, sampannata_madhyam, sampannata_bipanna, karyasamitima_representation_dalit, karyasamitima_representation_janajati, karyasamitima_representation_anya, keypost_adhakshya_female, keypost_adhakshya_male, keypost_sachib_female, keypost_sachib_male, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23) returning *`;
    pool.query(
      addUpavoktasamuhaBibaranQuery,
      [req.body.registration_date, req.body.upavoktasamuha_name, req.body.addr_perm, req.body.addr_curr, req.body.ghardhuri_dalit, req.body.ghardhuri_janajati, req.body.ghardhuri_anya, req.body.ghardhuri_jamma, req.body.population_female, req.body.population_male, req.body.population_jamma, req.body.sampannata_sampanna, req.body.sampannata_madhyam, req.body.sampannata_bipanna, req.body.karyasamitima_representation_dalit, req.body.karyasamitima_representation_janajati, req.body.karyasamitima_representation_anya, req.body.keypost_adhakshya_female, req.body.keypost_adhakshya_male, req.body.keypost_sachib_female, req.body.keypost_sachib_male, req.body.created_by, updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating upavoktasamuhaBibaran
module.exports = {
  updateUpavoktasamuhaBibaran: (callBack) => {
    const updateUpavoktasamuhaBibaranQuery = `UPDATE upavoktasamuha_bibaran SET registration_date=$1, upavoktasamuha_name=$2, addr_perm=$3, addr_curr=$4, ghardhuri_dalit=$5, ghardhuri_janajati=$6, ghardhuri_anya=$7, ghardhuri_jamma=$8, population_female=$9, population_male=$10, population_jamma=$11, sampannata_sampanna=$12, sampannata_madhyam=$13, sampannata_bipanna=$14, karyasamitima_representation_dalit=$15, karyasamitima_representation_janajati=$16, karyasamitima_representation_anya=$17, keypost_adhakshya_female=$18, keypost_adhakshya_male=$19, keypost_sachib_female=$20, keypost_sachib_male=$21, created_by=$22, updated_by=$23 WHERE upavoktasamuha_bibaran_id=$24 returning *`;
    pool.query(
      updateUpavoktasamuhaBibaranQuery,
      [req.body.registration_date, req.body.upavoktasamuha_name, req.body.addr_perm, req.body.addr_curr, req.body.ghardhuri_dalit, req.body.ghardhuri_janajati, req.body.ghardhuri_anya, req.body.ghardhuri_jamma, req.body.population_female, req.body.population_male, req.body.population_jamma, req.body.sampannata_sampanna, req.body.sampannata_madhyam, req.body.sampannata_bipanna, req.body.karyasamitima_representation_dalit, req.body.karyasamitima_representation_janajati, req.body.karyasamitima_representation_anya, req.body.keypost_adhakshya_female, req.body.keypost_adhakshya_male, req.body.keypost_sachib_female, req.body.keypost_sachib_male, req.body.created_by, updated_by, req.params.upavoktasamuhaBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting upavoktasamuhaBibaran
module.exports = {
  deleteUpavoktasamuhaBibaran: (callBack) => {
    const deleteUpavoktasamuhaBibaranQuery = `DELETE  FROM upavoktasamuha_bibaran where upavoktasamuha_bibaran_id=$1`;
    pool.query(
      deleteUpavoktasamuhaBibaranQuery,
      [req.params.upavoktasamuhaBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
