const pool = require("../../db");

//Controller for Banya jantu Uddar Sambhandhi Bibaran
async function getBanyajantuUddarBibaran(req, res) {

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

  const getBanyajantuUddarBibaranQuery =
    `SELECT banyajantuko_naam as jaat,COUNT(banyajantuko_naam) as uddar_sankhya,SUM(IF(uddarpachi_mareko=1,1,0)) as uddarpachi_mareko,SUM(IF(banyajantuko_abastha=3,1,0)) as mareko_uddar FROM banyajantu_uddars WHERE Year(miti)=? and ${dist_cond} and ${office_cond} GROUP BY banyajantuko_naam`;

  pool.query(
    getBanyajantuUddarBibaranQuery,
    [req.body.currentArthikbarsa, req.body.distId, req.body.officeId],
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
