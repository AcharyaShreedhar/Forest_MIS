const pool = require("../db");

//Service for Listing all municipality
module.exports = {
  getAllMunicipality: (callBack) => {
    const getAllMunicipalityQuery = `select * from municipality`;
    pool.query(getAllMunicipalityQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Municipality
module.exports = {
  getMunicipality: (callBack) => {
    const getMunicipalityQuery = `select * from municipality where mun_id=$1`;
    pool.query(
      getMunicipalityQuery,
      [req.params.municipalityId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Municipality
module.exports = {
  addMunicipality: (callBack) => {
    const addMunicipalityQuery = `INSERT INTO municipality (mun_name_eng,mun_name_nep,dist_id) values ($1,$2,$3) returning *`;
    pool.query(
      addMunicipalityQuery,
      [req.body.mun_name_eng, req.body.mun.name_nep, req.body.dist_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Municipality
module.exports = {
  updateMunicipality: (callBack) => {
    const updateMunicipalityQuery = `UPDATE municipality SET mun_name_eng=$1, mun_name_nep=$2, prov_id=$3 WHERE mun_id=$3 returning *`;
    pool.query(
      updateMunicipalityQuery,
      [
        req.body.mun_name_eng,
        req.body.mun_name_nep,
        req.body.dist_id,
        req.params.municipalityId,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Municipality
module.exports = {
  deleteMunicipality: (callBack) => {
    const deleteMunicipalityQuery = `DELETE  FROM municipality where mun_id=$1`;
    pool.query(
      deleteMunicipalityQuery,
      [req.params.municipalityId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
