const pool = require("../../db");

//Controller for Upavokta Samuhako Susasan Sambhandhi Bibaran

async function getUpavoktaSusasanBibaran(req, res) {

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

  const getUpavoktaSusasanBibaranQuery =
    `SELECT COUNT(DISTINCT(c.pan_no))as samuha_with_pan, SUM(IF(s.lekha_parixan_miti>=? && s.arthik_barsa=?,1,0)) AS lekhaparixan_gareka, SUM(IF(s.partibedan_miti>=? && s.arthik_barsa=?,1,0)) AS barsik_pratibedan_pesgareka, SUM(IF((s.sadharansava_miti >= ?) && (s.arthik_barsa=?) ,0,1)) AS sadharansava_nabaseka, SUM(c.female_rep) AS mahila_padhadhikari FROM consumer_details as c LEFT JOIN susasan as s ON c.darta_no=s.darta_no where c.${dist_cond} and c.${office_cond}`;

  pool.query(
    getUpavoktaSusasanBibaranQuery,
    [
      req.body.currentArthikbarsa,
      req.body.arthikbarsa,
      req.body.currentArthikbarsa,
      req.body.arthikbarsa,
      req.body.currentArthikbarsa,
      req.body.arthikbarsa,
      req.body.distId,
      req.body.officeId,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          susasanko_abastha: results[0],
        })
      );
    }
  );
}

module.exports = {
  getUpavoktaSusasanBibaran,
};
