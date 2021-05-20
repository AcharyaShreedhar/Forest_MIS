// Service for Listing allDharmikbanBibaran
module.exports = {
    getAllDharmikbanBibaranQuery: (callBack) => {
      const getAllDharmikbanBibaran = `select * from dharmikban_bibaran`;
      pool.query(getAllDharmikbanBibaranQuery, [], (error, results, fields) => {
        if (error) {
          callBack(error);
        }
  
        return callBack(null, results);
      });
    },
  };
  
  //Service for Listing dharmikbanBibaran
  module.exports = {
    getDharmikbanBibaranQuery: (callBack) => {
      const getDharmikbanBibaranQuery = `select * from dharmikban_bibaran where dharmikban_bibaran_id=$1`;
      pool.query(
        getDharmikbanBibaranQuery,
        [req.params.dharmikbanBibaranId],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
  
  //Service for adding dharmikbanBibaran
  module.exports = {
    addDharmikbanQuery: (callBack) => {
      const addDharmikbanBibaranQuery = `INSERT INTO dharmikban_bibaran (dharmikban_name, community_name, area, main_species, forest_type, handover_date, renewal_first_date, renewal_first_period, renewal_second_period, renewal_third_period, renewal_fourth_period, renewal_fifth_period, renewal_sixth_period, forest_maujdat, renewal_date, created_by, updated_by ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) returning *`;
      pool.query(
        addDharmikbanBibaranQuery,
        [req.body.dharmikban_name, req.body.community_name, req.body.area, req.body.main_species, req.body.forest_type, req.body.handover_date, req.body.renewal_first_date, req.body.renewal_first_period, req.body.renewal_second_period, req.body.renewal_third_period, req.body.renewal_fourth_period, req.body.renewal_fifth_period, req.body.renewal_sixth_period, req.body.forest_maujdat, req.body.renewal_date, req.body.created_by, req.body.updated_by],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
  
  //Service for updating a dharmikbanBibaran
  module.exports = {
    updateDharmikbanBibaranQuery: (callBack) => {
      const updateDharmikbanBibaran = `UPDATE dharmikban_bibaran SET dharmikban_name=$1, community_name=$2, area=$3, main_species=$4, forest_type=$5, handover_date=$6, renewal_first_date=$7, renewal_first_period=$8, renewal_second_period=$9, renewal_third_period=$10, renewal_fourth_period=$11, renewal_fifth_period=$12, renewal_sixth_period=$13, forest_maujdat=$14, renewal_date=$15, created_by=$16, updated_by=$17 WHERE dharmikban_id=$18 returning *`;
      pool.query(
        updateDharmikbanBibaranQuery,
        [req.body.dharmikban_name, req.body.community_name, req.body.area, req.body.main_species, req.body.forest_type, req.body.handover_date, req.body.renewal_first_date, req.body.renewal_first_period, req.body.renewal_second_period, req.body.renewal_third_period, req.body.renewal_fourth_period, req.body.renewal_fifth_period, req.body.renewal_sixth_period, req.body.forest_maujdat, req.body.renewal_date,req.body.created_by, req.body.updated_by, req.params.dharmikbanBibaranId],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
  
  //Service for deleting a dharmikbanBibaran
  module.exports = {
    deleteDharmikbanBibaran: (callBack) => {
      const deleteDharmikbanBibaranQuery = `DELETE  FROM dharmikban_bibaran where dharmikban_bibaran_id=$1`;
      pool.query(
        deleteDharmikbanBibaranQuery,
        [req.params.dharmikbanBibaranId],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
