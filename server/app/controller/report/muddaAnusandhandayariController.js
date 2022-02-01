const pool = require("../../db");

//Controller for MuddaAnusandhan Dayari  Sambhandhi Bibaran
async function getMuddaAnusandhandayariBibaran(req, res) {
  const getMuddaAnusandhandayariBibaranQuery =
    "SELECT SUM(IF(faisala_miti<=? && faisala_status='0',1,0)) AS faisalahunabaki, SUM(IF(jaheri_partibedan_miti>=?,1,0)) AS dayar_bhayeka, SUM(IF(faisala_miti<=? && faisala_status='1',1,0)) AS faisala_bhayeka, SUM(IF(faisala_status='0',1,0)) AS faisalahunabaki_jamma FROM `mudda_anusandhan_dayaris` where dist_id like ? GROUP BY kasurko_kisim";

  pool.query(
    getMuddaAnusandhandayariBibaranQuery,
    [
      req.body.previousArthikbarsa,
      req.body.previousArthikbarsa,
      req.body.previousArthikbarsa,
      req.body.distId,
    ],
    (error, results, fields) => {
      if (error) throw error;
      // console.log("result-faisala",results, results.length);
      let mudda = {};
      if (results.length!==0){
        mudda = {
            banpaidawar_chorinikasi: results[0],
            banyajantu_aparad: results[1],
            banatikraman: results[2],
            total: {
              faisalahunabaki:
                results[0].faisalahunabaki +
                results[1].faisalahunabaki +
                results[2].faisalahunabaki,
              dayar_bhayeka:
                results[0].dayar_bhayeka +
                results[1].dayar_bhayeka +
                results[2].dayar_bhayeka,
              faisala_bhayeka:
                results[0].faisala_bhayeka +
                results[1].faisala_bhayeka +
                results[2].faisala_bhayeka,
              faisalahunabaki_jamma:
                results[0].faisalahunabaki_jamma +
                results[1].faisalahunabaki_jamma +
                results[2].faisalahunabaki_jamma,
            }
          }
      }else{
        mudda = {}
      }
      // console.log("mudda",mudda);
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          mudda: mudda
          // mudda: {
          //   banpaidawar_chorinikasi: results[0],
          //   banyajantu_aparad: results[1],
          //   banatikraman: results[2],
          //   total: {
          //     faisalahunabaki:
          //       results[0].faisalahunabaki +
          //       results[1].faisalahunabaki +
          //       results[2].faisalahunabaki,
          //     dayar_bhayeka:
          //       results[0].dayar_bhayeka +
          //       results[1].dayar_bhayeka +
          //       results[2].dayar_bhayeka,
          //     faisala_bhayeka:
          //       results[0].faisala_bhayeka +
          //       results[1].faisala_bhayeka +
          //       results[2].faisala_bhayeka,
          //     faisalahunabaki_jamma:
          //       results[0].faisalahunabaki_jamma +
          //       results[1].faisalahunabaki_jamma +
          //       results[2].faisalahunabaki_jamma,
          //   },
          // },
        })
      );
    }
  );
}

module.exports = {
  getMuddaAnusandhandayariBibaran,
};
