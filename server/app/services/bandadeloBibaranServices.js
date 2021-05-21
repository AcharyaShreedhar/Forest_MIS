const pool = require("../db");

//Service for Listing all bandadeloBibaran
module.exports = {
  getAllBandadeloBibaran: (callBack) => {
    const getAllBandadeloBibaranQuery = `select * from bandadelo_bibaran`;
    pool.query(getAllBandadeloBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a bandadeloBibaran
module.exports = {
  getBandadeloBibaran: (callBack) => {
    const getBandadeloBibaranQuery = `select * from bandadelo_bibaran where bandadelo_bibaran_id=$1`;
    pool.query(
      getBandadeloBibaranQuery,
      [req.params.bandadeloBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a bandadeloBibaran
module.exports = {
  addBandadeloBibaran: (callBack) => {
    const addBandadeloBibaranQuery = `INSERT INTO bandadelo_bibaran (bandadelo_address, ban_type, ban_prajati, xeti_area, niyantran_karta, sahabhagi_mahila, sahabhagi_purus, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
    pool.query(
      addBandadeloBibaranQuery,
      [req.body.bandadelo_address, req.body.ban_type, req.body.ban_prajati, req.body.xeti_area, req.body.niyantran_karta, req.body.sahabhagi_mahila, req.body.sahabhagi_purus, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a bandadeloBibaran
module.exports = {
  updateBandadeloBibaran: (callBack) => {
    const updateBandadeloBibaranQuery = `UPDATE bandadelo_bibaran SET bandadelo_address=$1, ban_type=$2, ban_prajati=$3, xeti_area=$4, niyantran_karta=$5, sahabhagi_mahila=$6, sahabhagi_purus=$7, created_by=$8, updated_by=$9 WHERE bandadelo_bibaran_id=$10 returning *`;
    pool.query(
      updateandadeloBibaranQuery,
      [req.body.bandadelo_address, req.body.ban_type, req.body.ban_prajati, req.body.xeti_area, req.body.niyantran_karta, req.body.sahabhagi_mahila, req.body.sahabhagi_purus, req.body.created_by, req.body.updated_by, req.params.bandadeloBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a bandadeloBibaran
module.exports = {
  deleteBandadeloBibaran: (callBack) => {
    const deleteBandadeloBibaranQuery = `DELETE  FROM bandadelo_bibaran where bandadelo_bibaran_id=$1`;
    pool.query(
      deleteBandadeloBibaranQuery,
      [req.params.bandadeloBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
