const pool = require("../../db");

//Controller for Gaira Kastha Banpaiawar bikri bitaran Sambhandhi Bibaran
async function getGairakastaBanpaidawarBikribitaran(req, res) {

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

  const getGairakastaBanpaidawarBikribitaranQuery =
    `SELECT banpaidawar_kisim as name, ekai as unit, SUM(IF(banko_kisim='9',parinam,0)) AS sarkarbata, SUM(IF(banko_kisim='1' || banko_kisim='2',parinam,0)) AS samudayik_banbata, SUM(IF(banko_kisim='8',parinam,0)) AS niji FROM banpaidawar_bikribitarans where ${dist_cond} and ${office_cond} and YEAR(bikri_miti)=? and (banpaidawar_kisim='4'||banpaidawar_kisim='5'||banpaidawar_kisim='6') GROUP BY banpaidawar_kisim`;

  pool.query(
    getGairakastaBanpaidawarBikribitaranQuery,
    [req.body.distId, req.body.officeId, req.body.currentArthikbarsa],
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
