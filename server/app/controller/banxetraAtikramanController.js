const pool = require("../db");

//Controller for Listing all Banxetra Atikramans
async function getAllBanxetraAtikramans(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from banxetra_atikramans as b where b.atikraman_miti BETWEEN ? and ? and b.dist_id like ?";
  const getAllBanxetraAtikramansQuery = `select * from banxetra_atikramans as b where b.atikraman_miti BETWEEN ? and ? and b.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBanxetraAtikramansQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
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
    }
  );
}

//Controller for Listing a Banxetra Atikraman
async function getBanxetraAtikramans(req, res) {
  const getBanxetraAtikramansQuery = `select * from banxetra_atikramans where banxetra_atikraman_id=?`;
  pool.query(
    getBanxetraAtikramansQuery,
    [req.params.banxetraAtikramanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Banxetra Atikraman
async function addBanxetraAtikramans(req, res) {
  const addBanxetraAtikramansQuery = `INSERT INTO banxetra_atikramans (dist_id, atikramit_area,address,atikraman_kisim,dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,atikraman_miti,atikraman_prayojan,samrachana_bibaran,atikraman_abastha,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanxetraAtikramansQuery,
    [
      req.body.dist_id,
      req.body.atikramit_area,
      req.body.address,
      req.body.atikraman_kisim,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.atikraman_miti,
      req.body.atikraman_prayojan,
      req.body.samrachana_bibaran,
      req.body.atikraman_abastha,
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

//Controller for updating a Banxetra Atikraman
async function updateBanxetraAtikramans(req, res) {
  const updateBanxetraAtikramansQuery = `UPDATE banxetra_atikramans SET dist_id=?, atikramit_area=?,address=?,atikraman_kisim=?,dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,atikraman_miti=?,atikraman_prayojan=?,samrachana_bibaran=?,atikraman_abastha=?,created_by=?,updated_by=? WHERE banxetra_atikraman_id=?`;
  pool.query(
    updateBanxetraAtikramansQuery,
    [
      req.body.dist_id,
      req.body.atikramit_area,
      req.body.address,
      req.body.atikraman_kisim,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.atikraman_miti,
      req.body.atikraman_prayojan,
      req.body.samrachana_bibaran,
      req.body.atikraman_abastha,
      req.body.created_by,
      req.body.updated_by,
      req.params.banxetraAtikramanId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Banxetra Atikraman
async function deleteBanxetraAtikramans(req, res) {
  const deleteBanxetraAtikramansQuery = `DELETE  FROM banxetra_atikramans WHERE banxetra_atikraman_id=?`;
  pool.query(
    deleteBanxetraAtikramansQuery,
    [req.params.banxetraAtikramanId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanxetraAtikramans,
  getBanxetraAtikramans,
  addBanxetraAtikramans,
  updateBanxetraAtikramans,
  deleteBanxetraAtikramans,
};
