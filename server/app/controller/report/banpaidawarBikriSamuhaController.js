const pool = require("../../db");

//Controller for Samuhabhitra Banpaidawar Bikri Bitaran

async function getBanpaidawarbikriSamuhaBhitra(req, res) {
  const getBikriBibaranQuery =
    "SELECT SUM(IF(bandpaidawar_kisim='1',aantarik_rakam*ekai,0)) AS kathdaura, SUM(IF(bandpaidawar_kisim!='1',aantarik_rakam*ekai,0)) AS gairkastha,SUM(aantarik_rakam*ekai) AS total FROM `banpaidawar_bikribitarans` where dist_id like ?";

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
