const pool = require("../db");
//Controller for Listing all BanxetraAnyaprayojan
async function getAllBanxetraAnyaprayojan(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "b.office_id like ?"
  if(office_length > 1){
    office_cond = "b.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "b.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "b.dist_id in (?)"
  }

  const getTotalQuery = `SELECT count(*) as total from banxetra_anyaprayojans as b where b.arthik_barsa BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllBanxetraAnyaprayojanQuery = `select * from banxetra_anyaprayojans as b where b.arthik_barsa BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(getTotalQuery, [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllBanxetraAnyaprayojanQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId, req.body.name, req.body.page, req.body.perPage],
      (error, results, fields) => {
        if (error) throw error;
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            data: {
              total: countresults[0].total,
              list: results,
            },
          })
        );
      }
    );
  });
}

//Controller for Listing a BanxetraAnyaprayojan
async function getBanxetraAnyaprayojan(req, res) {
  const getBanxetraAnyaprayojanQuery = `select * from banxetra_anyaprayojans where banxetra_anyaprayojan_id=?`;
  pool.query(
    getBanxetraAnyaprayojanQuery,
    [req.params.banxetraAnyaprayojanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a BanxetraAnyaprayojan
async function addBanxetraAnyaprayojan(req, res, next) {
  const addBanxetraAnyaprayojanQuery = `INSERT INTO banxetra_anyaprayojans (dist_id, office_id, arthik_barsa, uplabdakarta_naam, upalabdha_address, sanstha_name, prayojan, xetrafal_temp, xetrafal_perm, samaya_abadhi, rukh_hataunuparne, rukh_hatayeko, sattajagga_area, xetipurti_brixyaropan, sattajagga_brixyaropan, leejrakam_adhyaadhik, barsik_pratibedan, prapta_rajaswo, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanxetraAnyaprayojanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.arthik_barsa,
      req.body.uplabdakarta_naam,
      req.body.upalabdha_address,
      req.body.sanstha_name,
      req.body.prayojan,
      req.body.xetrafal_temp,
      req.body.xetrafal_perm,
      req.body.samaya_abadhi,
      req.body.rukh_hataunuparne,
      req.body.rukh_hatayeko,
      req.body.sattajagga_area,
      req.body.xetipurti_brixyaropan,
      req.body.sattajagga_brixyaropan,
      req.body.leejrakam_adhyaadhik,
      req.body.barsik_pratibedan,
      req.body.prapta_rajaswo,
      req.body.created_by,
      req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a BanxetraAnyaprayojan
async function updateBanxetraAnyaprayojan(req, res, next) {
  const updateBanxetraAnyaprayojanQuery = `UPDATE banxetra_anyaprayojans SET dist_id=?, office_id=?, arthik_barsa=?, uplabdakarta_naam=?, upalabdha_address=?, sanstha_name=?, prayojan=?, xetrafal_temp=?, xetrafal_perm=?, samaya_abadhi=?, rukh_hataunuparne=?, rukh_hatayeko=?, sattajagga_area=?, xetipurti_brixyaropan=?, sattajagga_brixyaropan=?, leejrakam_adhyaadhik=?, barsik_pratibedan=?, prapta_rajaswo=?, created_by=?, updated_by=? WHERE banxetra_anyaprayojan_id=?`;
  pool.query(
    updateBanxetraAnyaprayojanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.arthik_barsa,
      req.body.uplabdakarta_naam,
      req.body.upalabdha_address,
      req.body.sanstha_name,
      req.body.prayojan,
      req.body.xetrafal_temp,
      req.body.xetrafal_perm,
      req.body.samaya_abadhi,
      req.body.rukh_hataunuparne,
      req.body.rukh_hatayeko,
      req.body.sattajagga_area,
      req.body.xetipurti_brixyaropan,
      req.body.sattajagga_brixyaropan,
      req.body.leejrakam_adhyaadhik,
      req.body.barsik_pratibedan,
      req.body.prapta_rajaswo,
      req.body.created_by,
      req.body.updated_by,
      req.params.banxetraAnyaprayojanId,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a BanxetraAnyaprayojan
async function deleteBanxetraAnyaprayojan(req, res, next) {
  const deleteBanxetraAnyaprayojanQuery = `DELETE  FROM banxetra_anyaprayojans where banxetra_anyaprayojan_id=?`;
  pool.query(
    deleteBanxetraAnyaprayojanQuery,
    [req.params.banxetraAnyaprayojanId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

module.exports = {
  getAllBanxetraAnyaprayojan,
  getBanxetraAnyaprayojan,
  addBanxetraAnyaprayojan,
  updateBanxetraAnyaprayojan,
  deleteBanxetraAnyaprayojan,
};
