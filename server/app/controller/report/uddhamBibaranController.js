const pool = require("../../db");

//Controller for Uddham Bibaran

async function getUddhamBibaran(req, res) {
  const getUddhamBibaranQuery =
    "SELECT uddham_type, SUM(rojgar_sankhya) as rojgari_srijana, COUNT(uddham_id) as jamma FROM `uddhams` WHERE dist_id like ? GROUP BY uddham_type";

  pool.query(
    getUddhamBibaranQuery,
    [req.body.distId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          data: {
            banpaidawar_uddham: results[0],
          },
        })
      );
    }
  );
}

module.exports = {
  getUddhamBibaran,
};
