const pool = require("../db");

//Service for Listing banxetraAtikramanAreaBibaran
module.exports = {
  getAllBanxetraAtikramanAreaBibaran: (callBack) => {
    const getAllBanxetraAtikramanAreaBibaranQuery = `select * from banxetra_atikraman_area_bibaran`;
    pool.query(getAllBanxetraAtikramanAreaBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a banxetraAtikramanAreaBibaran
module.exports = {
  getBanxetraAtikramanAreaBibaran: (callBack) => {
    const getBanxetraAtikramanAreaBibaranQuery = `select * from banxetra_atikraman_area_bibaran where banxetra_atikraman_area_bibaran_id=$1`;
    pool.query(
      getBanxetraAtikramanAreaBibaranQuery,
      [req.params.banxetraAtikramanAreaBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a banxetraAtikramanAreaBibaran
module.exports = {
  addBanxetraAtikramanAreaBibaran: (callBack) => {
    const addBanxetraAtikramanAreaBibaranQuery = `INSERT INTO banxetra_atikraman_area_bibaran (atikramit_area, address, atikraman_kisim, samlagna_ghardhuri, atikraman_prayojan, samrachana_bibaran, atikraman_abastha, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
    pool.query(
      addBanxetraAtikramanAreaBibaranQuery,
      [req.body.atikramit_area, req.body.address, req.body.atikraman_kisim, req.body.samlagna_ghardhuri, req.body.atikraman_prayojan, req.body.samrachana_bibaran, req.body.atikraman_abastha, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a banxetraAtikramanAreaBibaran
module.exports = {
  updateBanxetraAtikramanAreaBibaran: (callBack) => {
    const updateBanxetraAtikramanAreaBibaranQuery = `UPDATE banxetra_atikraman_area_bibaran SET atikramit_area=$1, address=$2, atikraman_kisim=$3, samlagna_ghardhuri=$4, atikraman_prayojan=$5, samrachana_bibaran=$6, atikraman_abastha=$7, created_by=$8, updated_by=$9 WHERE banxetra_atikraman_area_bibaran_id=$10 returning *`;
    pool.query(
      updateBanxetraAtikramanAreaBibaranQuery,
      [req.body.atikramit_area, req.body.address, req.body.atikraman_kisim, req.body.samlagna_ghardhuri, req.body.atikraman_prayojan, req.body.samrachana_bibaran, req.body.atikraman_abastha, req.body.created_by, req.body.updated_by, req.params.banxetraAtikramanAreaBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a banxetraAtikramanAreaBibaran
module.exports = {
  deleteBanxetraAtikramanAreaBibaran: (callBack) => {
    const deleteBanxetraAtikramanAreaBibaranQuery = `DELETE  FROM banxetra_atikraman_area_bibaran where banxetra_atikraman_area_bibaran_id=$1`;
    pool.query(
      deleteBanxetraAtikramanAreaBibaranQuery,
      [req.params.banxetraAtikramanAreaBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
