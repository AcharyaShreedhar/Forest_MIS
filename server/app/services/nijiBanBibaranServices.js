// Service for Listing all nijiBanBibaran
module.exports = {
  getAll: (callBack) => {
    const getAllNijibanBibaran = `select * from niji_ban_bibaran`;
    pool.query(getAllNijibanBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Province
module.exports = {
  getProvince: (callBack) => {
    const getNijibanBibaranQuery = `select * from niji_ban_bibaran where niji_ban_bibaran_id=$1`;
    pool.query(
      getNijibanBibaranQuery,
      [req.params.NijibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Province
module.exports = {
  addProvince: (callBack) => {
    const addNijibanBibaranQuery = `INSERT INTO niji_ban_bibaran (swikrit_miti,niji_ban_dhani_ko_naam,perm_addr,curr_addr,area,main_species) values ($1,$2,$3,$4,$5,$6) returning *`;
    pool.query(
      addNijibanBibaranQuery,
      [req.body.swikrit_miti, req.body.niji_ban_dhani_ko_naam, req.body.perm_addr, req.body.curr_addr, req.body.area, req.body.main_species],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Province
module.exports = {
  updateProvince: (callBack) => {
    const updateNijibanBibaran = `UPDATE niji_ban_bibaran SET swikrit_miti=$1, niji_ban_dhani_ko_naam=$2, perm_addr=$3, curr_addr=$4, area=$5, main_species=$6 WHERE niji_ban_bibaran_id=$7 returning *`;
    pool.query(
      updateNijibanBibaranQuery,
      [req.body.swikrit_miti, req.body.niji_ban_dhani_ko_naam, req.body.perm_addr, req.body.curr_add, req.body.area, req.body.main_species, req.params.nijiBanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Province
module.exports = {
  deleteNijibanBibaran: (callBack) => {
    const deleteNijibanBibaranQuery = `DELETE  FROM niji_ban_bibaran where province_id=$1`;
    pool.query(
      deleteNijibanBibaranQuery,
      [req.params.NijibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
