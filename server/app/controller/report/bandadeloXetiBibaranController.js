const pool = require("../../db");
const r = require("ramda")

//Controller for Banya Dadelo bata bhayeko  Xeti  Bibaran
async function getBandadeloXetiBibaran(req, res) {

  let date_cond = ""
  const isDate=(r.isNil(req.body.fromDate)) ? false : true
  if(isDate){
    date_cond = `bandadelo_miti between ? and ? and `;
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

  const getBandadeloXetiBibaranQuery =
    `SELECT bandadelo_address as sthan, xeti_area as area, banpaidawar_xeti,man_dead as manab_mrityu,man_injured as manab_ghaete FROM bandadelo_bibarans WHERE ${date_cond} ${dist_cond} and ${office_cond}`;
  if (isDate){
    pool.query(
      getBandadeloXetiBibaranQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error;
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            dadelo: results,
          })
        );
      }
    );
  }
  else{
    pool.query(
      getBandadeloXetiBibaranQuery,
      [req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error;
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            dadelo: results,
          })
        );
      }
    );
  }
}

module.exports = {
  getBandadeloXetiBibaran,
};
