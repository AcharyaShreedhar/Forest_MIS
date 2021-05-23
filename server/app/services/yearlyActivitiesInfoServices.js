const pool = require("../db");

//Service for Listing all YearlyActivitiesInfo
module.exports = {
  getAllYearlyActivitiesInfo: (callBack) => {
    const getAllYearlyActivitiesInfoQuery = `select * from yearly_activities_info`;
    pool.query(getAllYearlyActivitiesInfoQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a YearlyActivitiesInfo
module.exports = {
  getYearlyActivitiesInfo: (callBack) => {
    const getYearlyActivitiesInfoQuery = `select * from yearly_activities_info where yearly_activities_info_id=$1`;
    pool.query(
      getYearlyActivitiesInfoQuery,
      [req.params.YearlyActivitiesInfoId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a YearlyActivitiesInfo
module.exports = {
  addYearlyActivitiesInfo: (callBack) => {
    const addYearlyActivitiesInfoQuery = `INSERT INTO yearly_activities_info (FY, community_forest_name, area, production_from_conservation_timber, production_from_conservation_wood, employment_generated_workingday, distribution_withingroup_timber, distribution_withingroup_wood, distribution_outsidegroup_timber, distribution_outsidegroup_timber, distribution_outsidegroup_wood, distribution_maujdat_timber, distribution_maujdat_wood, amdani_kharcha_bibaran_annual_income, amdani_kharcha_bibaran_annual_expenditure, amdani_kharcha_bibaran_nett_annual_saving, niyamit_rojgar_count, community_udhyam_bibaran, annual_bibaran_bujhayeko_nabujhayeko, lekha_parikshyan_garaiyeko_nagariyeko,created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22) returning *`;
    pool.query(
      addYearlyActivitiesInfoQuery,
      [req.body.FY, req.body.community_forest_name, req.body.area, req.body.production_from_conservation_timber, req.body.production_from_conservation_wood, req.body.employment_generated_workingday, req.body.distribution_withingroup_timber, req.body.distribution_withingroup_wood, req.body.distribution_outsidegroup_timber, req.body.distribution_outsidegroup_timber, req.body.distribution_outsidegroup_wood, req.body.distribution_maujdat_timber, req.body.distribution_maujdat_wood, req.body.amdani_kharcha_bibaran_annual_income, req.body.amdani_kharcha_bibaran_annual_expenditure, req.body.amdani_kharcha_bibaran_nett_annual_saving, req.body.niyamit_rojgar_count, req.body.community_udhyam_bibaran, req.body.annual_bibaran_bujhayeko_nabujhayeko, req.body.lekha_parikshyan_garaiyeko_nagariyeko,req.body.created_by, updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a YearlyActivitiesInfo
module.exports = {
  updateYearlyActivitiesInfo: (callBack) => {
    const updateYearlyActivitiesInfoQuery = `UPDATE YearlyActivitiesInfo SET FY=$1, community_forest_name=$2, area=$3, production_from_conservation_timber=$4, production_from_conservation_wood=$5, employment_generated_workingday=$6, distribution_withingroup_timber=$7, distribution_withingroup_wood=$8, distribution_outsidegroup_timber=$9, distribution_outsidegroup_timber=$10, distribution_outsidegroup_wood=$11, distribution_maujdat_timber=$12, distribution_maujdat_wood=$13, amdani_kharcha_bibaran_annual_income=$14, amdani_kharcha_bibaran_annual_expenditure=$15, amdani_kharcha_bibaran_nett_annual_saving=$16, niyamit_rojgar_count=$17, community_udhyam_bibaran=$18, annual_bibaran_bujhayeko_nabujhayeko=$19, lekha_parikshyan_garaiyeko_nagariyeko=$20,created_by=$21, updated_by=$22 WHERE YearlyActivitiesInfo_id=$23 returning *`;
    pool.query(
      updateYearlyActivitiesInfoQuery,
      [req.body.FY, req.body.community_forest_name, req.body.area, req.body.production_from_conservation_timber, req.body.production_from_conservation_wood, req.body.employment_generated_workingday, req.body.distribution_withingroup_timber, req.body.distribution_withingroup_wood, req.body.distribution_outsidegroup_timber, req.body.distribution_outsidegroup_timber, req.body.distribution_outsidegroup_wood, req.body.distribution_maujdat_timber, req.body.distribution_maujdat_wood, req.body.amdani_kharcha_bibaran_annual_income, req.body.amdani_kharcha_bibaran_annual_expenditure, req.body.amdani_kharcha_bibaran_nett_annual_saving, req.body.niyamit_rojgar_count, req.body.community_udhyam_bibaran, req.body.annual_bibaran_bujhayeko_nabujhayeko, req.body.lekha_parikshyan_garaiyeko_nagariyeko,req.body.created_by, updated_by, req.params.YearlyActivitiesInfoId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a YearlyActivitiesInfo
module.exports = {
  deleteYearlyActivitiesInfo: (callBack) => {
    const deleteYearlyActivitiesInfoQuery = `DELETE  FROM yearly_activities_info where yearly_activities_info_id=$1`;
    pool.query(
      deleteYearlyActivitiesInfoQuery,
      [req.params.YearlyActivitiesInfoId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
