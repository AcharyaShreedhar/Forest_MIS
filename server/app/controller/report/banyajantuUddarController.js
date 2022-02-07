const pool = require("../../db");

//Controller for Banya jantu Uddar Sambhandhi Bibaran
async function getBanyajantuUddarBibaran(req, res) {
  const getBanyajantuUddarBibaranQuery =
    "SELECT banyajantuko_naam as jaat,COUNT(banyajantuko_naam) as uddar_sankhya,SUM(IF(uddarpachi_mareko=1,1,0)) as uddarpachi_mareko,SUM(IF(banyajantuko_abastha=3,1,0)) as mareko_uddar FROM `banyajantu_uddars` WHERE Year(miti)=? and dist_id like ? GROUP BY banyajantuko_naam";

  pool.query(
    getBanyajantuUddarBibaranQuery,
    [req.body.currentArthikbarsa, req.body.distId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          banyajantu_uddar: results,
        })
      );
    }
  );
}

module.exports = {
  getBanyajantuUddarBibaran,
};
