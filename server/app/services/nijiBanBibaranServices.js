// Service for Listing all nijiBanBibaran
module.exports = {
  getAllnijibanBibaranQuery: (callBack) => {
    const getAllNijibanBibaran = `select * from nijiban_bibaran`;
    pool.query(getAllnijibanBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing nijibanBibaran
module.exports = {
  getnijibanBibaranQuery: (callBack) => {
    const getnijibanBibaranQuery = `select * from nijiban_bibaran where nijiban_bibaran_id=$1`;
    pool.query(
      getnijibanBibaranQuery,
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
  addnijibanBibaranQuery: (callBack) => {
    const addnijibanBibaranQuery = `INSERT INTO nijiban_bibaran (swikrit_miti,nijiban_dhani_ko_naam,perm_addr,curr_addr,area,main_species) values ($1,$2,$3,$4,$5,$6) returning *`;
    pool.query(
      addnijibanBibaranQuery,
      [req.body.swikrit_miti, req.body.nijiban_dhani_ko_naam, req.body.perm_addr, req.body.curr_addr, req.body.area, req.body.main_species],
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
  updatenijibanBibaranQuery: (callBack) => {
    const updatenijibanBibaran = `UPDATE nijiban_bibaran SET swikrit_miti=$1, nijiban_dhani_ko_naam=$2, perm_addr=$3, curr_addr=$4, area=$5, main_species=$6 WHERE niji_banbibaran_id=$7 returning *`;
    pool.query(
      updatenijibanBibaranQuery,
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
  deletenijibanBibaran: (callBack) => {
    const deletenijibanBibaranQuery = `DELETE  FROM nijiban_bibaran where nijiban_bibaran_id=$1`;
    pool.query(
      deletenijibanBibaranQuery,
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
