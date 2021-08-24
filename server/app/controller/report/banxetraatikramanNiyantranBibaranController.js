const pool = require("../../db");

//Controller for Banxetra atikraman bibaran
async function getBanxetraAtikraman(req, res) {
  const getBanxetraAtikramanBibaranQuery =
    "SELECT SUM(IF((Year(atikraman_miti)<=?)&&(atikraman_abastha='0'),atikramit_area,0)) as previousarea,SUM(IF((Year(atikraman_miti)<=?)&&(atikraman_abastha='0'),samalagna_ghardhuri,0)) as previousghardhuri,SUM(IF(Year(atikraman_miti)=?,atikramit_area,0)) as currentarea,SUM(IF(Year(atikraman_miti)=?,samalagna_ghardhuri,0)) as currentghardhuri,SUM(IF((Year(atikraman_miti)=?)&&(atikraman_abastha='1'),atikramit_area,0)) as hatayekoarea,SUM(IF((Year(atikraman_miti)=?)&&(atikraman_abastha='1'),samalagna_ghardhuri,0)) as hatayekoghardhuri,SUM(IF(atikraman_abastha='0',atikramit_area,0))as bakiarea,SUM(IF(atikraman_abastha='0',samalagna_ghardhuri,0))as bakighardhuri FROM `banxetra_atikramans` where dist_id like ?";

  pool.query(
    getBanxetraAtikramanBibaranQuery,
    [
      req.body.previousArthikbarsa,
      req.body.previousArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.distId,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          banxetra_atikramans: {
            previous: {
              xetrafal: results[0].previousarea,
              ghar_tahara: results[0].previousghardhuri,
            },
            current: {
              xetrafal: results[0].currentarea,
              ghar_tahara: results[0].currentghardhuri,
            },
            hatayeko: {
              xetrafal: results[0].hatayekoarea,
              ghar_tahara: results[0].hatayekoghardhuri,
            },
            baki: {
              xetrafal: results[0].bakiarea,
              ghar_tahara: results[0].bakighardhuri,
            },
          },
        })
      );
    }
  );
}

module.exports = {
  getBanxetraAtikraman,
};
