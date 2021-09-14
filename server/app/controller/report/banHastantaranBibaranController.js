const pool = require("../../db");

//Controller for Upavokta Samuhako Susasan Sambhandhi Bibaran

async function getbanHastantaranBibaran(req, res) {
  const getpreviousbanHastantaranBibaranQuery =
    "select count(*) as sankhya, Sum(s.area), SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date >= ? and s.dist_id like ? and s.baiganik_ban=1 UNION select count(*) as sankhya, Sum(s.area), SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date >= ? and s.dist_id like ? and s.baiganik_ban=0 UNION select count(*) as sankhya, Sum(k.area), SUM(k.dalit_ghardhuri+k.janjati_ghardhuri+k.anya_ghardhuri) as ghardhuri, SUM(k.female+k.male) as labhanvit from kabuliyatiban_bibarans as k WHERE k.darta_miti >= ?and k.dist_id like ? UNION select count(*) as sankhya, Sum(d.area), SUM(d.dalit_ghardhuri+d.janjati_ghardhuri+d.anya_ghardhuri) as ghardhuri, SUM(d.female+d.male) as labhanvit from dharmikban_bibarans as d WHERE d.handover_date >= ?  and d.dist_id like ? UNION select count(*) as sankhya, Sum(c.area), SUM(c.dalit_ghardhuri+c.janjati_ghardhuri+c.anya_ghardhuri) as ghardhuri, SUM(c.female+c.male) as labhanvit from chaklaban_bibarans as c WHERE c.darta_miti >= ? and c.dist_id like ? UNION select count(*) as sankhya, Sum(sj.area), SUM(sj.dalit_ghardhuri+sj.janjati_ghardhuri+sj.anya_ghardhuri) as ghardhuri, SUM(sj.female+sj.male) as labhanvit from sajhedariban_bibarans as sj WHERE sj.darta_miti >= ? and sj.dist_id like ? UNION select count(*) as sankhya, Sum(ck.area), SUM(ck.dalit_ghardhuri+ck.janjati_ghardhuri+ck.anya_ghardhuri) as ghardhuri, SUM(ck.female+ck.male) as labhanvit from commercialkabuliyatiban_bibarans as ck WHERE ck.darta_miti >= ? and ck.dist_id like ? UNION select count(*) as sankhya, Sum(n.area), SUM(n.dalit_ghardhuri+n.janjati_ghardhuri+n.anya_ghardhuri) as ghardhuri, SUM(n.female+n.male) as labhanvit from nijiban_bibarans as n WHERE n.swikrit_miti >= ? and n.dist_id like ? UNION select count(*) as sankhya, Sum(r.area), SUM(r.dalit_ghardhuri+r.janjati_ghardhuri+r.anya_ghardhuri) as ghardhuri, SUM(r.female+r.male) as labhanvit from rastriyabanbibarans as r WHERE r.darta_miti >= ? and r.dist_id like ?";
  const getcurrentbanHastantaranBibaranQuery =
    "select count(*) as sankhya, Sum(s.area), SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date < ? and s.dist_id like ? and s.baiganik_ban=1 UNION select count(*) as sankhya, Sum(s.area), SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date < ? and s.dist_id like ? and s.baiganik_ban=0 UNION select count(*) as sankhya, Sum(k.area), SUM(k.dalit_ghardhuri+k.janjati_ghardhuri+k.anya_ghardhuri) as ghardhuri, SUM(k.female+k.male) as labhanvit from kabuliyatiban_bibarans as k WHERE k.darta_miti < ?and k.dist_id like ? UNION select count(*) as sankhya, Sum(d.area), SUM(d.dalit_ghardhuri+d.janjati_ghardhuri+d.anya_ghardhuri) as ghardhuri, SUM(d.female+d.male) as labhanvit from dharmikban_bibarans as d WHERE d.handover_date < ?  and d.dist_id like ? UNION select count(*) as sankhya, Sum(c.area), SUM(c.dalit_ghardhuri+c.janjati_ghardhuri+c.anya_ghardhuri) as ghardhuri, SUM(c.female+c.male) as labhanvit from chaklaban_bibarans as c WHERE c.darta_miti < ? and c.dist_id like ? UNION select count(*) as sankhya, Sum(sj.area), SUM(sj.dalit_ghardhuri+sj.janjati_ghardhuri+sj.anya_ghardhuri) as ghardhuri, SUM(sj.female+sj.male) as labhanvit from sajhedariban_bibarans as sj WHERE sj.darta_miti < ? and sj.dist_id like ? UNION select count(*) as sankhya, Sum(ck.area), SUM(ck.dalit_ghardhuri+ck.janjati_ghardhuri+ck.anya_ghardhuri) as ghardhuri, SUM(ck.female+ck.male) as labhanvit from commercialkabuliyatiban_bibarans as ck WHERE ck.darta_miti < ? and ck.dist_id like ? UNION select count(*) as sankhya, Sum(n.area), SUM(n.dalit_ghardhuri+n.janjati_ghardhuri+n.anya_ghardhuri) as ghardhuri, SUM(n.female+n.male) as labhanvit from nijiban_bibarans as n WHERE n.swikrit_miti < ? and n.dist_id like ? UNION select count(*) as sankhya, Sum(r.area), SUM(r.dalit_ghardhuri+r.janjati_ghardhuri+r.anya_ghardhuri) as ghardhuri, SUM(r.female+r.male) as labhanvit from rastriyabanbibarans as r WHERE r.darta_miti < ? and r.dist_id like ?";
  pool.query(
    getpreviousbanHastantaranBibaranQuery,
    [
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
      req.body.previousArthikbarsa,
      req.body.distId,
    ],
    (error, presults, fields) => {
      if (error) throw error;
      pool.query(
        getcurrentbanHastantaranBibaranQuery,
        [
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.currentArthikbarsa,
          req.body.distId,
        ],
        (error, cresults, fields) => {
          if (error) throw error;
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                previous: presults,
                current: cresults,
              },
            })
          );
        }
      );
    }
  );
}

module.exports = {
  getbanHastantaranBibaran,
};
