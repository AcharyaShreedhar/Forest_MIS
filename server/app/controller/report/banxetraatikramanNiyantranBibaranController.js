const pool = require("../../db");

//Controller for Banxetra atikraman bibaran
async function getBanxetraAtikraman(req, res) {
  const getBanxetraAtikramanBibaranQuery =
    "SELECT SUM(IF((Year(atikraman_miti)<='?')&&(atikraman_abastha='0'),1,0)) AS previous,SUM(IF(Year(atikraman_miti)='?',1,0)) AS current,SUM(IF((Year(atikraman_miti)='?')&&(atikraman_abastha='1'),1,0)) AS hatayeko,SUM(IF(atikraman_abastha='0',1,0)) AS baki FROM `banxetra_atikramans`  where dist_id like ?";

  pool.query(
    getBanxetraAtikramanBibaranQuery,
    [
      req.body.previousArthikbarsa,
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
          data: {
            banxetra_atikramans: results[0],
          },
        })
      );
    }
  );
}

module.exports = {
  getBanxetraAtikraman,
};
