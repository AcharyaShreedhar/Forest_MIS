const pool = require("../db");

//Controller for Listing totalbanyajantuuddar
async function getAllTotalBanyajantuuddar(req, res) {
  const getTotalQuery =
    "select count * from banyajantu_uddars where dist_id like ?  ";
  const getAllTotalBanyajantuuddarQuery =
    "SELECT miti,dist_id, count(*) FROM `banyajantu_uddars` GROUP BY YEAR(miti) HAVING dist_id=?";
  pool.query(
    getTotalQuery,
    [req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllTotalBanyajantuuddarQuery,
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
  getAllTotalBanyajantuuddar,
};
