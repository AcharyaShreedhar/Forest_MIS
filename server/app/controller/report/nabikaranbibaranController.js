const pool = require("../../db");

//Controller for Nabikaran Bibaran Data

async function getNabikaranBibaran(req, res) {
  const getSNabikaranBibaranQuery =
    "select(select count(*) from (SELECT darta_no,dist_id, n.* FROM `samudayikban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewal_date)<=?) as expired,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `samudayikban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewed_date)=?) as renewed,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `samudayikban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewed_date)!=?) as remaining,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `samudayikban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewal_date)=?) as tobeexpired,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `samudayikban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewed_date)!=? or Year(v.renewal_date)=?) as torenew";
  const getKNabikaranBibaranQuery =
    "select(select count(*) from (SELECT darta_no,dist_id, n.* FROM `kabuliyatiban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewal_date)<=?) as expired,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `kabuliyatiban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewed_date)=?) as renewed,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `kabuliyatiban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewed_date)!=?) as remaining,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `kabuliyatiban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewal_date)=?) as tobeexpired,(select count(*) from (SELECT darta_no,dist_id, n.* FROM `kabuliyatiban_bibarans` as s LEFT JOIN `nabikaran_karyayojanas` as n ON s.darta_no=n.darta_id where s.dist_id like ?) as v where Year(v.renewed_date)!=? or Year(v.renewal_date)=?) as torenew";
  pool.query(
    getSNabikaranBibaranQuery,
    [
      req.body.distId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.upcommingArthikbarsa,
      req.body.distId,
      req.body.currentArthikbarsa,
      req.body.upcommingArthikbarsa,
    ],
    (error, sresults, fields) => {
      if (error) throw error;
      pool.query(
        getKNabikaranBibaranQuery,
        [
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.upcommingArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.upcommingArthikbarsa,
        ],
        (error, kresults, fields) => {
          if (error) throw error;
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                kabuliyatiban: kresults,
                samudayikban: sresults,
              },
            })
          );
        }
      );
    }
  );
}

module.exports = {
  getNabikaranBibaran,
};
