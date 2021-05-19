// Service for Listing allreligiousForestBibaran
module.exports = {
    getAllreligiousForestBibaranQuery: (callBack) => {
      const getAllNijibanBibaran = `select * from religiousforestbibaran`;
      pool.query(getAllreligiousForestBibaranQuery, [], (error, results, fields) => {
        if (error) {
          callBack(error);
        }
  
        return callBack(null, results);
      });
    },
  };
  
  //Service for Listing religiousForestBibaran
  module.exports = {
    getreligiousForestBibaranQuery: (callBack) => {
      const getreligiousForestBibaranQuery = `select * from religiousforestbibaran where religiousforestbibaran_id=$1`;
      pool.query(
        getreligiousForestBibaranQuery,
        [req.params.religiousForestBibaranId],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
  
  //Service for adding religiousForestBibaran
  module.exports = {
    addreligiousForestBibaranQuery: (callBack) => {
      const addreligiousForestBibaranQuery = `INSERT INTO religiousforestbibaran (rel_forest_name, community_name, area, main_species, forest_type, handover_date, renewal_first_date, renewal_first_period, renewal_second_period, renewal_third_period, renewal_fourth_period, renewal_fifth_period, renewal_sixth_period, forest_maujdat, renewal_date ) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *`;
      pool.query(
        addreligiousForestBibaranQuery,
        [req.body.rel_forest_name, req.body.community_name, req.body.area, req.body.main_species, req.body.forest_type, req.body.handover_date, req.body.renewal_first_date, req.body.renewal_first_period, req.body.renewal_second_period, req.body.renewal_third_period, req.body.renewal_fourth_period, req.body.renewal_fifth_period, req.body.renewal_sixth_period, req.body.forest_maujdat, req.body.renewal_date],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
  
  //Service for updating a religiousForestBibaran
  module.exports = {
    updatereligiousForestBibaraQuery: (callBack) => {
      const updatereligiousForestBibaran = `UPDATE religiousforestbibaran SET rel_forest_name=$1, community_name=$2, area=$3, main_species=$4, forest_type=$5, handover_date=$6, renewal_first_date=$7, renewal_first_period=$8, renewal_second_period=$9, renewal_third_period=$10, renewal_fourth_period=$11, renewal_fifth_period=$12, renewal_sixth_period=$13, forest_maujdat=$14, renewal_date=$15 returning *`;
      pool.query(
        updatereligiousForestBibaranQuery,
        [req.body.rel_forest_name, req.body.community_name, req.body.area, req.body.main_species, req.body.forest_type, req.body.handover_date, req.body.renewal_first_date, req.body.renewal_first_period, req.body.renewal_second_period, req.body.renewal_third_period, req.body.renewal_fourth_period, req.body.renewal_fifth_period, req.body.renewal_sixth_period, req.body.forest_maujdat, req.body.renewal_date,religiousForestBibaranId],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };
  
  //Service for deleting a religiousForestBibaran
  module.exports = {
    deletereligiousForestBibaran: (callBack) => {
      const deletereligiousForestBibaranQuery = `DELETE  FROM religiousforestbibaran where religiousforestbibaran_id=$1`;
      pool.query(
        deletereligiousForestBibaranQuery,
        [req.params.religiousForestBibaranId],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
  };