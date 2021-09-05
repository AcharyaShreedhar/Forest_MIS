const pool = require("../../db");

//Controller for Gaira Kastha Banpaiawar bikri bitaran Sambhandhi Bibaran
async function getGairakastaBanpaidawarBikribitaran(req, res) {
  const getGairakastaBanpaidawarBikribitaranQuery =
    "SELECT banpaidawar_kisim as name, ekai as unit, SUM(IF(banko_kisim='9',parinam,0)) AS sarkarbata, SUM(IF(banko_kisim='1' || banko_kisim='2',parinam,0)) AS samudayik_banbata, SUM(IF(banko_kisim='8',parinam,0)) AS niji FROM `banpaidawar_bikribitarans` where dist_id like ? and YEAR(bikri_miti)=? and (banpaidawar_kisim='4'||banpaidawar_kisim='5'||banpaidawar_kisim='6') GROUP BY banpaidawar_kisim";

  pool.query(
    getGairakastaBanpaidawarBikribitaranQuery,
    [req.body.distId, req.body.currentArthikbarsa],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          gairkastha_banpaidawar: results,
        })
      );
    }
  );
}

module.exports = {
  getGairakastaBanpaidawarBikribitaran,
};
