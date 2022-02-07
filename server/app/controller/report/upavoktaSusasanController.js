const pool = require("../../db");

//Controller for Upavokta Samuhako Susasan Sambhandhi Bibaran

async function getUpavoktaSusasanBibaran(req, res) {
  const getUpavoktaSusasanBibaranQuery =
    "SELECT COUNT(DISTINCT(c.pan_no))as samuha_with_pan, SUM(IF(s.lekha_parixan_miti>=? && s.arthik_barsa=?,1,0)) AS lekhaparixan_gareka, SUM(IF(s.partibedan_miti>=? && s.arthik_barsa=?,1,0)) AS barsik_pratibedan_pesgareka, SUM(IF((s.sadharansava_miti >= ?) && (s.arthik_barsa=?) ,0,1)) AS sadharansava_nabaseka, SUM(c.female_rep) AS mahila_padhadhikari FROM `consumer_details` as c LEFT JOIN `susasan` as s ON c.darta_no=s.darta_no where c.dist_id like ?";

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
