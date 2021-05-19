const pool = require("../db");

//Service for Listing all samudayikbanBibaran
module.exports = {
  getAllSamudayikbanBibaran: (callBack) => {
    const getAllSamudayikbanBibaranQuery = `select * from samudayikban_bibaran`;
    pool.query(getAllSamudayikbanBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing samudayikbanBibaran
module.exports = {
  getSamudayikbanBibaran: (callBack) => {
    const getSamudayikbanBibaranQuery = `select * from samudayikban_bibaran where samudayikban_bibaran_id=$1`;
    pool.query(
      getSamudayikbanBibaranQuery,
      [req.params.samudayikbanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding samudayikbanBibaran
module.exports = {
  addSamudayikbanBibaran: (callBack) => {
    const addSamudayikbanBibaranQuery = `INSERT INTO samudayikban_bibaran (samudayikban_name, area, main_species, forest_type, handover_date, renewal_first_date, renewal_first_period, renewal_second_date, renewal_second_period, renewal_third_date, renewal_third_period, renewal_fourth_date, renewal_fourth_period, renewal_fifth_date, renewal_fifth_period, renewal_sixth_date, renewal_sixth_period, forest_maujdat, annual_nikasi_amount_timber, annual_nikasi_wood,renewal_fy,created_by,updated_by) values ($1,$2,$3.$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22) returning *`;
    pool.query(
      addSamudayikbanBibaranQuery,
      [req.body.samudayikban_name, req.body.area, req.body.main_species, req.body.forest_type, req.body.handover_date, req.body.renewal_first_date, req.body.renewal_first_period, req.body.renewal_second_date, req.body.renewal_second_period, req.body.renewal_third_date, req.body.renewal_third_period, req.body.renewal_fourth_date, req.body.renewal_fourth_period, req.body.renewal_fifth_date, req.body.renewal_fifth_period, req.body.renewal_sixth_date, req.body.renewal_sixth_period, req.body.forest_maujdat, req.body.annual_nikasi_amount_timber, req.body.annual_nikasi_wood, req.body.renewal_fy, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a samudayikbanBibaran
module.exports = {
  updateSamudayikbanBibaran: (callBack) => {
    const updateSamudayikbanBibaranQuery = `UPDATE  SET samudayikban_name=$1, area=$2, main_species=$3, forest_type=$4, handover_date=$5, renewal_first_date=$6, renewal_first_period=$7, renewal_second_date=$8, renewal_second_period=$9, renewal_third_date=$10, renewal_third_period=$11, renewal_fourth_date=$12, renewal_fourth_period=$13, renewal_fifth_date=$14, renewal_fifth_period=$15, renewal_sixth_date=$16, renewal_sixth_period=$17, forest_maujdat=$18, annual_nikasi_amount_timber=$19, annual_nikasi_wood=$19,renewal_fy=$20, created_by=$21, updated_by=$22 WHERE samudayikban_id=$23 returning *`;
    pool.query(
      updateSamudayikbanBibaranQuery,
      [req.body.samudayikban_name, req.body.area, req.body.main_species, req.body.forest_type, req.body.handover_date, req.body.renewal_first_date, req.body.renewal_first_period, req.body.renewal_second_date, req.body.renewal_second_period, req.body.renewal_third_date, req.body.renewal_third_period, req.body.renewal_fourth_date, req.body.renewal_fourth_period, req.body.renewal_fifth_date, req.body.renewal_fifth_period, req.body.renewal_sixth_date, req.body.renewal_sixth_period, req.body.forest_maujdat, req.body.annual_nikasi_amount_timber, req.body.annual_nikasi_wood, req.body.renewal_fy, req.body.created_by, req.body.updated_by, req.params.samudayikbanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a samudayikbanBibaran
module.exports = {
  deleteSamudayikbanBibaran: (callBack) => {
    const deleteSamudayikbanBibaranQuery = `DELETE  FROM samudayikban_bibaran where samudayikban_bibaran_id=$1`;
    pool.query(
      deletesamudayikbanBibaranQuery,
      [req.params.samudayikbanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
