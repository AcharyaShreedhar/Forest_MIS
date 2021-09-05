const pool = require("../../db");

//Controller for Samuhabhitra Banpaidawar Bikri Bitaran

async function getBanpaidawarbikriSamuhaBhitra(req, res) {
  const getBikriBibaranQuery =
    "SELECT SUM(IF((banpaidawar_kisim='1' && bikri_medium='1'),rakam*ekai,0)) AS kathdaura, SUM(IF(banpaidawar_kisim!='1'&& bikri_medium='1',rakam*ekai,0)) AS gairkastha,SUM(IF( bikri_medium='1',rakam*ekai,0)) AS total FROM `banpaidawar_bikribitarans` where dist_id like ?";

  pool.query(
    getBikriBibaranQuery,
    [req.body.distId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          data: {
            banpaidawar_bikri: results[0],
          },
        })
      );
    }
  );
}

module.exports = {
  getBanpaidawarbikriSamuhaBhitra,
};
