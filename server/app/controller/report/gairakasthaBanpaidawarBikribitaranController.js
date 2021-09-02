const pool = require("../../db");

//Controller for Gaira Kastha Banpaiawar bikri bitaran Sambhandhi Bibaran
async function getGairakastaBanpaidawarBikribitaran(req, res) {
  const getGairakastaBanpaidawarBikribitaranQuery =
    "SELECT banpaidawar_kisim as name, ekai as unit, SUM(IF(banko_kisim='9',aantarik_parinam+aapurti_parinam+bahiya_parinam,0)) AS sarkarbata, SUM(IF(bandpaidawar_kisim='1' || banko_kisim='2',aantarik_parinam+aapurti_parinam+bahiya_parinam,0)) AS samudayik_banbata, SUM(IF(banko_kisim='8',aantarik_parinam+aapurti_parinam+bahiya_parinam,0)) AS niji FROM `banpaidawar_bikribitarans` where dist_id like ? and YEAR(bikri_miti)=? and (bandpaidawar_kisim='4'||bandpaidawar_kisim='5'||bandpaidawar_kisim='6') GROUP BY bandpaidawar_kisim";

  pool.query(
    getGairakastaBanpaidawarBikribitaranQuery,
    [
      req.body.currentArthikbarsa,
      req.body.distId,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          gairkastha_banpaidawar: results
        })
      );
    }
  );
}

module.exports = {
    getGairakastaBanpaidawarBikribitaran,
};
