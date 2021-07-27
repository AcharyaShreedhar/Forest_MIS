const pool = require("../db");
//Controller for Listing totalbantypes
async function getAllTotalBantypes(req, res) {
  const getTotalQuery =
    "select (select count(*) from samudayikban_bibarans as s where s.handover_date BETWEEN ? and ? and s.dist_id like ?)+(select count(*) from chaklaban_bibarans as c where c.darta_miti BETWEEN ? and ? and c.dist_id like ?)+(select count(*) from commercialkabuliyatiban_bibarans as ck where ck.darta_miti BETWEEN ? and ? and ck.dist_id like ?)+(select count(*) from dharmikban_bibarans as d where d.handover_date BETWEEN ? and ? and d.dist_id like ?)+(select count(*) from kabuliyatiban_bibarans as k where k.entry_date BETWEEN ? and ? and k.dist_id like ?)+(select count(*) from nijiban_bibarans as n where n.swikrit_miti BETWEEN ? and ? and n.dist_id like ?)+(select count(*) from rastriyabanbibarans as r where r.darta_miti BETWEEN ? and ? and r.dist_id like ?)+(select count(*) from sajhedariban_bibarans as sa where sa.darta_miti BETWEEN ? and ? and sa.dist_id like ?) as total";
  const getAllTotalBantypesQuery =
    "select (select count(*) from samudayikban_bibarans as s WHERE s.handover_date BETWEEN ? and ? and s.dist_id like ?) as samudayikban, (select count(*) from dharmikban_bibarans as d WHERE d.handover_date BETWEEN ? and ? and d.dist_id like ?) as dharmikban, (select count(*) from chaklaban_bibarans as c WHERE c.darta_miti BETWEEN ? and ? and c.dist_id like ?) as chaklaban, (select count(*) from commercialkabuliyatiban_bibarans as ck WHERE ck.darta_miti BETWEEN ? and ? and ck.dist_id like ?) as commercialban, (select count(*) from kabuliyatiban_bibarans as k WHERE k.entry_date BETWEEN ? and ? and k.dist_id like ?) as kabuliyatiban, (select count(*) from nijiban_bibarans as n WHERE n.swikrit_miti BETWEEN ? and ? and n.dist_id like ?) as nijiban, (select count(*) from rastriyabanbibarans as r WHERE r.darta_miti BETWEEN ? and ? and r.dist_id like ?) as rastriyaban, (select count(*) from sajhedariban_bibarans as sa WHERE sa.darta_miti BETWEEN ? and ? and sa.dist_id like ?) as sajhedariban";
  pool.query(
    getTotalQuery,
    [
      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,

      req.body.fromDate,
      req.body.toDate,
      req.body.distId,
    ],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllTotalBantypesQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,

          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
        ],
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
  getAllTotalBantypes,
};
