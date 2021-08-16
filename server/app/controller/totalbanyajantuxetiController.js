const pool = require("../db");

//Controller for Listing totalbanyajantuxeti
async function getAllTotalBanyajantuxeti(req, res) {
  const getTotalQuery =
    "select count(*) from banyajantuxeti_bibarans where dist_id like ?  ";
  const getAllTotalBanyajantuxetiQuery =
    "SELECT Year(xeti_miti) as miti ,dist_id, count(*) as sankhya FROM `banyajantuxeti_bibarans` GROUP BY YEAR(xeti_miti) HAVING dist_id like ?";
  pool.query(
    getTotalQuery,
    [req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllTotalBanyajantuxetiQuery,
        [req.body.distId],
        (error, results, fields) => {
          if (error) throw error;
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                total: countresults[0].total,
                list: results,
              },
            })
          );
        }
      );
    }
  );
}

module.exports = {
  getAllTotalBanyajantuxeti,
};
