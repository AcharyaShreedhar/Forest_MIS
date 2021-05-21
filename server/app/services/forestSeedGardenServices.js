const pool = require("../db");

//Service for Listing all forestSeedGarden
module.exports = {
  getAllforestSeedGarden: (callBack) => {
    const getAllforestSeedGardenQuery = `select * from forestseed_garden`;
    pool.query(getAllForestSeedGardenQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a forestSeedGarden
module.exports = {
  getForestSeedGarden: (callBack) => {
    const getForestSeedGardenQuery = `select * from forestseed_garden where forestseed_garden_id=$1`;
    pool.query(
      getForestSeedGardenQuery,
      [req.params.forestSeedGardenId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a forestSeedGarden
module.exports = {
  addForestSeedGarden: (callBack) => {
    const addForestSeedGardenQuery = `INSERT INTO forestseed_garden (plot_type, prajati, area, location, established_date, status, created_by, updated_by) values ($1,$2,$3,$4,$5,$^,$7,$8) returning *`;
    pool.query(
      addForestSeedGardenQuery,
      [req.body.plot_type, req.body.prajati, req.body.area, req.body.location, req.body.established_date, req.body.status, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a forestSeedGarden
module.exports = {
  updateForestSeedGarden: (callBack) => {
    const updateForestSeedGardenQuery = `UPDATE forestseed_garden SET plot_type=$1, prajati=$2, area=$3, location=$4, established_date=$5, status=$6, created_by=$7, updated_by=$8 WHERE forestseed_garden_id=$9 returning *`;
    pool.query(
      updateForestSeedGardenQuery,
      [req.body.plot_type, req.body.prajati, req.body.area, req.body.location, req.body.established_date, req.body.status, req.body.created_by, req.body.updated_by, req.params.forestSeedGardenId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a forestSeedGarden
module.exports = {
  deleteProvince: (callBack) => {
    const deleteForestSeedGardenQuery = `DELETE  FROM forestseed_garden where forestseed_garden_id=$1`;
    pool.query(
      deleteForestSeedGardenQuery,
      [req.params.forestSeedGardenId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
