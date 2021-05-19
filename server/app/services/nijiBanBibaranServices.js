// Service for Listing all nijiBanBibaran
module.exports = {
  getAllNijibanBibaranQuery: (callBack) => {
    const getAllNijibanBibaran = `select * from nijiban_bibaran`;
    pool.query(getAllNijibanBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing nijibanBibaran
module.exports = {
  getNijibanBibaranQuery: (callBack) => {
    const getNijibanBibaranQuery = `select * from nijiban_bibaran where nijiban_bibaran_id=$1`;
    pool.query(
      getNijibanBibaranQuery,
      [req.params.nijibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding nijibanBibaran
module.exports = {
  addNijibanBibaranQuery: (callBack) => {
    const addNijibanBibaranQuery = `INSERT INTO nijiban_bibaran (swikrit_miti,nijiban_dhani_ko_naam,perm_addr,curr_addr,area,main_species,created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *`;
    pool.query(
      addNijibanBibaranQuery,
      [req.body.swikrit_miti, req.body.nijiban_dhani_ko_naam, req.body.perm_addr, req.body.curr_addr, req.body.area, req.body.main_species, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a nijibanBibaran
module.exports = {
  updateNijibanBibaranQuery: (callBack) => {
    const updateNijibanBibaran = `UPDATE nijiban_bibaran SET swikrit_miti=$1, nijiban_dhani_ko_naam=$2, perm_addr=$3, curr_addr=$4, area=$5, main_species=$6, created_by=$7, updated_by=$8 WHERE nijiban_bibaran_id=$9 returning *`;
    pool.query(
      updateNijibanBibaranQuery,
      [req.body.swikrit_miti, req.body.nijiban_dhani_ko_naam, req.body.perm_addr, req.body.curr_add, req.body.area, req.body.main_species, req.params.nijiBanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a nijibanBibaran
module.exports = {
  deleteNijibanBibaran: (callBack) => {
    const deleteNijibanBibaranQuery = `DELETE  FROM nijiban_bibaran where nijiban_bibaran_id=$1`;
    pool.query(
      deleteNijibanBibaranQuery,
      [req.params.nijibanBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
