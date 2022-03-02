const pool = require("../db");
const r = require("ramda")

//Controller for Listing totalbanyajantuuddar
async function getAllTotalBanyajantuuddar(req, res) {

  let date_cond = ""
  let miti_col = ""
  const isDate=(r.isNil(req.body.fromDate)) ? false : true
  if(isDate){
    miti_col = "miti as uddar_miti, "
    date_cond = `miti between ? and ? and `;
  }

  let office_cond = "office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "office_id in (?)"
  }

  let dist_cond = "dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "dist_id in (?)"
  }

  const getTotalQuery =
    `select count(*) from banyajantu_uddars where ${date_cond} ${dist_cond} and ${office_cond} `;
  const getAllTotalBanyajantuuddarQuery =
    `SELECT Year(miti) as miti , ${miti_col} dist_id, office_id, count(*) as sankhya FROM banyajantu_uddars GROUP BY YEAR(miti) HAVING ${date_cond} ${dist_cond} and ${office_cond}`;
  
  if (isDate){
    pool.query(
      getTotalQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, countresults, fields) => {
        if (error) throw error;
        pool.query(
          getAllTotalBanyajantuuddarQuery,
          [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
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
  else{
    pool.query(
      getTotalQuery,
      [req.body.distId, req.body.officeId],
      (error, countresults, fields) => {
        if (error) throw error;
        pool.query(
          getAllTotalBanyajantuuddarQuery,
          [req.body.distId, req.body.officeId],
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
}

module.exports = {
  getAllTotalBanyajantuuddar,
};
