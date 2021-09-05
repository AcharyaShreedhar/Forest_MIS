const pool = require("../../db");

//Controller for kath daura  bikri bitaran Sambhandhi Bibaran
async function getKathdauraBikribitaran(req, res) {
  const getKathdauraBikribitaranQuery =
    "SELECT banko_kisim,SUM(IF(bikri_medium='1' && (banpaidawar_kisim='1' ||banpaidawar_kisim='2'||banpaidawar_kisim='3'),parinam,0)) AS samuhabhitra_kath,SUM(IF(bikri_medium='1' && banpaidawar_kisim='7',parinam,0)) AS samuhabhitra_daura,SUM(IF(bikri_medium='2' && (banpaidawar_kisim='1' ||banpaidawar_kisim='2'||banpaidawar_kisim='3'),parinam,0)) AS aapurti_kaath,SUM(IF(bikri_medium='2' && banpaidawar_kisim='7',parinam,0)) AS aapurti_daura,SUM(IF(bikri_medium='3' && banpaidawar_kisim='1',parinam,0)) AS samuha_khayar,SUM(IF(bikri_medium='3' && banpaidawar_kisim='2',parinam,0)) AS samuha_saal,SUM(IF(bikri_medium='3' && banpaidawar_kisim='3',parinam,0)) AS samuha_anya,SUM(IF(bikri_medium='3' && banpaidawar_kisim='7',parinam,0)) AS samuha_daura,FROM `banpaidawar_bikribitarans` where dist_id like ? and YEAR(bikri_miti)=? GROUP BY banko_kisim";

  pool.query(
    getKathdauraBikribitaranQuery,
    [req.body.distId, req.body.currentArthikbarsa],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          kathdaura_bikri: results,
        })
      );
    }
  );
}

module.exports = {
  getKathdauraBikribitaran,
};
