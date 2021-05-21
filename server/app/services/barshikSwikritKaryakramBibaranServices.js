const pool = require("../db");

//Service for Listing all barshikSwikritKaryakramBibaran
module.exports = {
  getAllBarshikSwikritKaryakramBibaran: (callBack) => {
    const getAllBarshikSwikritKaryakramBibaranQuery = `select * from barshikswikritkaryakram_bibaran`;
    pool.query(getAllBarshikSwikritKaryakramBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing barshikSwikritKaryakramBibaran
module.exports = {
  getBarshikSwikritKaryakramBibaran: (callBack) => {
    const getBarshikSwikritKaryakramBibaranQuery = `select * from barshikswikritkaryakram_bibaran where barshikswikritkaryakram_bibaran_id=$1`;
    pool.query(
      getBarshikSwikritKaryakramBibaranQuery,
      [req.params.barshikSwikritKaryakramBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding barshikSwikritKaryakramBibaran
module.exports = {
  addBarshikSwikritKaryakramBibaran: (callBack) => {
    const addBarshikSwikritKaryakramBibaranQuery = `INSERT INTO barshikswikritkaryakram_bibaran (arthik_barsa, narsari_sankhya, barga, laxya, pragati, brixyaropan, remarks, created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
    pool.query(
      addBarshikSwikritKaryakramBibaranQuery,
      [req.body.arthik_barsa, req.body.narsari_sankhya, req.body.barga, req.body.laxya, req.body.pragati, req.body.brixyaropan, req.body.remarks, req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a barshikSwikritKaryakramBibaran
module.exports = {
  updateBarshikSwikritKaryakramBibaran: (callBack) => {
    const updateBarshikSwikritKaryakramBibaranQuery = `UPDATE barshikswikritkaryakram_bibaran SET arthik_barsa=$1, narsari_sankhya=$2, barga=$3, laxya=$4, pragati=$5, brixyaropan=$6, remarks=$7, created_by=$8, updated_by=$9 WHERE barshikswikritkaryakram_bibaran_id=$10 returning *`;
    pool.query(
      updateBarshikSwikritKaryakramBibaranQuery,
      [req.body.arthik_barsa, req.body.narsari_sankhya, req.body.barga, req.body.laxya, req.body.pragati, req.body.brixyaropan, req.body.remarks, req.body.created_by, req.body.updated_by, req.params.barshikSwikritKaryakramBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a barshikSwikritKaryakramBibaran
module.exports = {
  deleteBarshikSwikritKaryakramBibaran: (callBack) => {
    const deleteBarshikSwikritKaryakramBibaranQuery = `DELETE  FROM barshikswikritkaryakram_bibaran where barshikswikritkaryakram_bibaran_id=$1`;
    pool.query(
      deleteBarshikSwikritKaryakramBibaranQuery,
      [req.params.barshikSwikritKaryakramBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
