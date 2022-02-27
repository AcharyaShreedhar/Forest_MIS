const pool = require("../../db");

//Controller for Upavokta Samuhako Susasan Sambhandhi Bibaran

// select count(*) as sankhya, SUM(s.area) as area , SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date < "2078-04-01" and s.dist_id like "%" and s.baiganik_ban=1 UNION ALL select count(*) as sankhya, SUM(s.area) as area, SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date < "2078-04-01" and s.dist_id like "%" and s.baiganik_ban=2 UNION ALL select count(*) as sankhya, SUM(k.area) as area, SUM(k.dalit_ghardhuri+k.janjati_ghardhuri+k.anya_ghardhuri) as ghardhuri, SUM(k.female+k.male) as labhanvit from kabuliyatiban_bibarans as k WHERE k.darta_miti < "2078-04-01"and k.dist_id like "%" UNION ALL select count(*) as sankhya, SUM(d.area) as area, SUM(d.dalit_ghardhuri+d.janjati_ghardhuri+d.anya_ghardhuri) as ghardhuri, SUM(d.female+d.male) as labhanvit from dharmikban_bibarans as d WHERE d.handover_date < "2078-04-01"  and d.dist_id like "%" UNION ALL select count(*) as sankhya, SUM(c.area) as area, SUM(c.dalit_ghardhuri+c.janjati_ghardhuri+c.anya_ghardhuri) as ghardhuri, SUM(c.female+c.male) as labhanvit from chaklaban_bibarans as c WHERE c.darta_miti < "2078-04-01" and c.dist_id like "%" UNION ALL select count(*) as sankhya, SUM(sj.area) as area, SUM(sj.dalit_ghardhuri+sj.janjati_ghardhuri+sj.anya_ghardhuri) as ghardhuri, SUM(sj.female+sj.male) as labhanvit from sajhedariban_bibarans as sj WHERE sj.darta_miti < "2078-04-01" and sj.dist_id like "%" UNION ALL select count(*) as sankhya, SUM(ck.area), SUM(ck.dalit_ghardhuri+ck.janjati_ghardhuri+ck.anya_ghardhuri) as ghardhuri, SUM(ck.female+ck.male) as labhanvit from commercialkabuliyatiban_bibarans as ck WHERE ck.darta_miti < "2078-04-01" and ck.dist_id like "%" UNION ALL select count(*) as sankhya, SUM(n.area) as area, SUM(n.dalit_ghardhuri+n.janjati_ghardhuri+n.anya_ghardhuri) as ghardhuri, SUM(n.female+n.male) as labhanvit from nijiban_bibarans as n WHERE n.swikrit_miti < "2078-04-01"and n.dist_id like "%" UNION ALL select count(*) as sankhya, SUM(r.area) as area, SUM(r.dalit_ghardhuri+r.janjati_ghardhuri+r.anya_ghardhuri) as ghardhuri, SUM(r.female+r.male) as labhanvit from rastriyabanbibarans as r WHERE r.darta_miti < "2078-04-01" and r.dist_id like "%"

async function getbanHastantaranBibaran(req, res) {

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

  const getcurrentbanHastantaranBibaranQuery =
    `select count(*) as sankhya, SUM(s.area) as area, SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date >= ? and s.${dist_cond} and s.${office_cond} and s.baiganik_ban=1 UNION ALL select count(*) as sankhya, SUM(s.area) as area, SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date >= ? and s.${dist_cond} and s.${office_cond} and s.baiganik_ban=2 UNION ALL select count(*) as sankhya, SUM(k.area) as area, SUM(k.dalit_ghardhuri+k.janjati_ghardhuri+k.anya_ghardhuri) as ghardhuri, SUM(k.female+k.male) as labhanvit from kabuliyatiban_bibarans as k WHERE k.darta_miti >= ?and k.${dist_cond} and k.${office_cond} UNION ALL select count(*) as sankhya, SUM(d.area) as area, SUM(d.dalit_ghardhuri+d.janjati_ghardhuri+d.anya_ghardhuri) as ghardhuri, SUM(d.female+d.male) as labhanvit from dharmikban_bibarans as d WHERE d.handover_date >= ?  and d.${dist_cond} and d.${office_cond} UNION ALL select count(*) as sankhya, SUM(c.area) as area, SUM(c.dalit_ghardhuri+c.janjati_ghardhuri+c.anya_ghardhuri) as ghardhuri, SUM(c.female+c.male) as labhanvit from chaklaban_bibarans as c WHERE c.darta_miti >= ? and c.${dist_cond} and c.${office_cond} UNION ALL select count(*) as sankhya, SUM(sj.area) as area, SUM(sj.dalit_ghardhuri+sj.janjati_ghardhuri+sj.anya_ghardhuri) as ghardhuri, SUM(sj.female+sj.male) as labhanvit from sajhedariban_bibarans as sj WHERE sj.darta_miti >= ? and sj.${dist_cond} and sj.${office_cond} UNION ALL select count(*) as sankhya, SUM(ck.area), SUM(ck.dalit_ghardhuri+ck.janjati_ghardhuri+ck.anya_ghardhuri) as ghardhuri, SUM(ck.female+ck.male) as labhanvit from commercialkabuliyatiban_bibarans as ck WHERE ck.darta_miti >= ? and ck.${dist_cond} and ck.${office_cond} UNION ALL select count(*) as sankhya, SUM(n.area) as area, SUM(n.dalit_ghardhuri+n.janjati_ghardhuri+n.anya_ghardhuri) as ghardhuri, SUM(n.female+n.male) as labhanvit from nijiban_bibarans as n WHERE n.swikrit_miti >= ? and n.${dist_cond} and n.${office_cond} UNION ALL select count(*) as sankhya, SUM(r.area) as area, SUM(r.dalit_ghardhuri+r.janjati_ghardhuri+r.anya_ghardhuri) as ghardhuri, SUM(r.female+r.male) as labhanvit from rastriyabanbibarans as r WHERE r.darta_miti >= ? and r.${dist_cond} and r.${office_cond}`;
  const getpreviousbanHastantaranBibaranQuery =
    `select count(*) as sankhya, SUM(s.area) as area , SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date < ? and s.${dist_cond} and s.${office_cond} and s.baiganik_ban=1 UNION ALL select count(*) as sankhya, SUM(s.area) as area, SUM(s.dalit_ghardhuri+s.janjati_ghardhuri+s.anya_ghardhuri) as ghardhuri, SUM(s.female+s.male) as labhanvit from samudayikban_bibarans as s WHERE s.handover_date < ? and s.${dist_cond} and s.${office_cond} and s.baiganik_ban=2 UNION ALL select count(*) as sankhya, SUM(k.area) as area, SUM(k.dalit_ghardhuri+k.janjati_ghardhuri+k.anya_ghardhuri) as ghardhuri, SUM(k.female+k.male) as labhanvit from kabuliyatiban_bibarans as k WHERE k.darta_miti < ? and k.${dist_cond} and k.${office_cond} UNION ALL select count(*) as sankhya, SUM(d.area) as area, SUM(d.dalit_ghardhuri+d.janjati_ghardhuri+d.anya_ghardhuri) as ghardhuri, SUM(d.female+d.male) as labhanvit from dharmikban_bibarans as d WHERE d.handover_date < ?  and d.${dist_cond} and d.${office_cond} UNION ALL select count(*) as sankhya, SUM(c.area) as area, SUM(c.dalit_ghardhuri+c.janjati_ghardhuri+c.anya_ghardhuri) as ghardhuri, SUM(c.female+c.male) as labhanvit from chaklaban_bibarans as c WHERE c.darta_miti < ? and c.${dist_cond} and c.${office_cond} UNION ALL select count(*) as sankhya, SUM(sj.area) as area, SUM(sj.dalit_ghardhuri+sj.janjati_ghardhuri+sj.anya_ghardhuri) as ghardhuri, SUM(sj.female+sj.male) as labhanvit from sajhedariban_bibarans as sj WHERE sj.darta_miti < ? and sj.${dist_cond} and sj.${office_cond} UNION ALL select count(*) as sankhya, SUM(ck.area), SUM(ck.dalit_ghardhuri+ck.janjati_ghardhuri+ck.anya_ghardhuri) as ghardhuri, SUM(ck.female+ck.male) as labhanvit from commercialkabuliyatiban_bibarans as ck WHERE ck.darta_miti < ? and ck.${dist_cond} and ck.${office_cond} UNION ALL select count(*) as sankhya, SUM(n.area) as area, SUM(n.dalit_ghardhuri+n.janjati_ghardhuri+n.anya_ghardhuri) as ghardhuri, SUM(n.female+n.male) as labhanvit from nijiban_bibarans as n WHERE n.swikrit_miti < ? and n.${dist_cond} and n.${office_cond} UNION ALL select count(*) as sankhya, SUM(r.area) as area, SUM(r.dalit_ghardhuri+r.janjati_ghardhuri+r.anya_ghardhuri) as ghardhuri, SUM(r.female+r.male) as labhanvit from rastriyabanbibarans as r WHERE r.darta_miti < ? and r.${dist_cond} and r.${office_cond}`;
  pool.query(
    getpreviousbanHastantaranBibaranQuery,
    [
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
      req.body.currentArthikbarsa,
      req.body.distId,
      req.body.officeId,
    ],
    (error, presults, fields) => {
      if (error) throw error;
      pool.query(
        getcurrentbanHastantaranBibaranQuery,
        [
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
          req.body.currentArthikbarsa,
          req.body.distId,
          req.body.officeId,
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
