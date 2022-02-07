const pool = require("../../db");

//Controller for Srijana gariyeko rojgari bibaran

async function getRojgariSrijana(req, res) {
  const getRojgariSrijanaQuery =
    "SELECT karya, ekai, SUM(mahila)as mahila, SUM(purus) as purus, SUM(mahila+purus*ekai) as jamma, kaifiyat as remarks FROM `rojgar_srijanas`  WHERE dist_id like ? and miti>=? GROUP BY karya";

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
