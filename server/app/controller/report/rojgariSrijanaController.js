const pool = require("../../db");

//Controller for Srijana gariyeko rojgari bibaran

async function getRojgariSrijana(req, res) {
  const getRojgariSrijanaQuery =
    "SELECT karya, SUM(mahila+purus) FROM `rojgar_srijanas` WHERE dist_id like ? and miti>=? GROUP BY karya";

  pool.query(
    getRojgariSrijanaQuery,
    [req.body.distId, req.body.currentArthikbarsa],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          rojgari_srijana: results,
        })
      );
    }
  );
}

module.exports = {
  getRojgariSrijana,
};
