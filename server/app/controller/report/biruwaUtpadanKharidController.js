const pool = require("../../db");

// Controller for biruwa Utpadan Kharid brixyaropan Controller

async function getBiruwaUtpadanKharid(req, res) {
  const getBiruwaUtpadanKharidQuery =
    "SELECT utpadan_medium,SUM(IF(biruwa_type=1,biruwa_sankhya,0)) as bahuudesiya, SUM(IF(biruwa_type=2,biruwa_sankhya,0)) as jadibuti, SUM(IF(biruwa_type=3,biruwa_sankhya,0)) as bahubarsiya FROM `biruwa_utpadans` WHERE dist_id like ? GROUP BY utpadan_medium";
  const getBirxyaropanQuery =
    "SELECT SUM(IF((xetra=1 || xetra=2),brixyaropan_sankhya,0)) as samudayik_rastriya, SUM(IF(xetra=3,brixyaropan_sankhya,0)) as niji, SUM(IF(xetra=4,brixyaropan_sankhya,0)) as sarbajanik FROM `brixyaropans` WHERE dist_id like ?";
  pool.query(
    getBiruwaUtpadanKharidQuery,
    [req.body.distId],
    (error, utpadanresults, fields) => {
      if (error) throw error;
      pool.query(
        getBirxyaropanQuery,
        [req.body.distId],
        (error, birxyaropanresults, fields) => {
          if (error) throw error;
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              biruwautpadan_kharid: {
                utpadan: utpadanresults,
                brixyaropan: birxyaropanresults,
              },
            })
          );
        }
      );
    }
  );
}

module.exports = {
  getBiruwaUtpadanKharid,
};
