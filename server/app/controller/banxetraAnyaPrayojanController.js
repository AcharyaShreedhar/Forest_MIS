const pool = require("../db");
//Controller for Listing all BanxetraAnyaprayojan
async function getAllBanxetraAnyaprayojan(req, res) {
  const getTotalQuery = "SELECT count(*) as total from banxetra_anyaprayojans as a where a.arthik_barsa BETWEEN ? and ? and a.dist_id like ?";
  const getAllBanxetraAnyaprayojanQuery = `select * from banxetra_anyaprayojans as a where a.arthik_barsa BETWEEN ? and ? and a.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(getTotalQuery, [req.body.fromDate, req.body.toDate, req.body.distId], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllBanxetraAnyaprayojanQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.name, req.body.page, req.body.perPage],
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
async function addBanxetraAnyaprayojan(req, res) {
  const addBanxetraAnyaprayojanQuery = `INSERT INTO banxetra_anyaprayojans (dist_id, arthik_barsa, uplabdakarta_naam, upalabdha_address, xetrafal_temp, xetrafal_perm, samaya_abadhi, rukh_hataunuparne, rukh_hatayeko, sattajagga_area, xetipurti_brixyaropan, sattajagga_brixyaropan, leejrakam_adhyaadhik, barsik_pratibedan, prapta_rajaswo, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanxetraAnyaprayojanQuery,
    [
      req.body.dist_id,
      req.body.arthik_barsa,
      req.body.uplabdakarta_naam,
      req.body.upalabdha_address,
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a BanxetraAnyaprayojan
async function updateBanxetraAnyaprayojan(req, res) {
  const updateBanxetraAnyaprayojanQuery = `UPDATE banxetra_anyaprayojans SET dist_id=?, arthik_barsa=?, uplabdakarta_naam=?, upalabdha_address=?, xetrafal_temp=?, xetrafal_perm=?, samaya_abadhi=?, rukh_hataunuparne=?, rukh_hatayeko=?, sattajagga_area=?, xetipurti_brixyaropan=?, sattajagga_brixyaropan=?, leejrakam_adhyaadhik=?, barsik_pratibedan=?, prapta_rajaswo=?, created_by=?, updated_by=? WHERE banxetra_anyaprayojan_id=?`;
  pool.query(
    updateBanxetraAnyaprayojanQuery,
    [
      req.body.dist_id,
      req.body.arthik_barsa,
      req.body.uplabdakarta_naam,
      req.body.upalabdha_address,
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a BanxetraAnyaprayojan
async function deleteBanxetraAnyaprayojan(req, res) {
  const deleteBanxetraAnyaprayojanQuery = `DELETE  FROM banxetra_anyaprayojans where banxetra_anyaprayojan_id=?`;
  pool.query(
    deleteBanxetraAnyaprayojanQuery,
    [req.params.banxetraAnyaprayojanId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
