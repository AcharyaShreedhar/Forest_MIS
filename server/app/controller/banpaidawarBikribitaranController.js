const pool = require("../db")
//Controller for Listing all BanpaidawarBikribitaran
async function getAllBanpaidawarBikribitaran(req, res) {
  const getTotalQuery = "SELECT count(*) as total from banpaidawar_bikribitarans"
    const getAllBanpaidawarBikribitaranQuery = `select * from banpaidawar_bikribitarans ORDER BY ? ASC LIMIT ?, ?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBanpaidawarBikribitaranQuery,
        [req.body.name, req.body.page, req.body.perPage],
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
  
  //Controller for Listing a Banpaidawar_Bikribitaran
  async function getBanpaidawarBikribitaran(req, res) {
    const getBanpaidawarBikribitaranQuery = `select * from banpaidawar_bikribitarans where bikribitaran_id=?`;
    pool.query(getBanpaidawarBikribitaranQuery, [req.params.banpaidawarBikribitaranId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a Banpaidawar_Bikribitaran
  async function addBanpaidawarBikribitaran(req, res) {
    const addBanpaidawarBikribitaranQuery = `INSERT INTO banpaidawar_bikribitarans (bandpaidawar_kisim, ekai, aantarik_dar, aantarik_parinam ,aantarik_rakam,aaapurti_dar,aapurti_parinam, aapurti_rakam, bahiya_dar, bahiya_parinam 	,bahiya_rakam, jamma_parinam	, jamma_rakam, kul_jamma, created_by, updated_by, createdAt, updatedAt    ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      addBanpaidawarBikribitaranQuery,
      [
        req.body.bandpaidawar_kisim,
        req.body.ekai, 
        req.body.aantarik_dar, 
        req.body.aantarik_parinam, 
        req.body.aantarik_rakam,
        req.body.aaapurti_dar,
	      req.body.aaapurti_parinam,
        req.body.aapurti_rakam,
        req.body.bahiya_dar,
        req.body.bahiya_parinam,
        req.body.bahiya_rakam,
        req.body.jamma_parinam,
        req.body.jamma_rakam,
        req.body.kul_jamma,
        req.body.created_by, 
        req.body.updated_by, 
        req.body.createdAt,
        req.body.updatedAt,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for updating a BanpaidawarBikribitaran
  async function updateBanpaidawarBikribitaran(req, res) {
    const updateBanpaidawarBikribitaranQuery = `UPDATE banpaidawar_bikribitarans SET bandpaidawar_kisim=?, ekai=?, aantarik_dar=?, aantarik_parinam=?, aantarik_rakam=?, aaapurti_dar=?, aapurti_parinam=?, aapurti_rakam=?, bahiya_dar=?, bahiya_parinam=?, bahiya_rakam=?, jamma_parinam=?, jamma_rakam=?, kul_jamma=?, created_by=?, updated_by=?, createdAt=?, updatedAt=? WHERE bikribitaran_id=?`;
    pool.query(
      updateBanpaidawarBikribitaranQuery,
      [
        req.body.bandpaidawar_kisim,
        req.body.ekai, 
        req.body.aantarik_dar, 
        req.body.aantarik_parinam, 
        req.body.aantarik_rakam,
        req.body.aaapurti_dar,
	      req.body.aaapurti_parinam,
        req.body.aapurti_rakam,
        req.body.bahiya_dar,
        req.body.bahiya_parinam,
        req.body.bahiya_rakam,
        req.body.jamma_parinam,
        req.body.jamma_rakam,
        req.body.kul_jamma,
        req.body.created_by, 
        req.body.updated_by, 
        req.body.createdAt,
        req.body.updatedAt,
        req.params.banpaidawarBikribitaranId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a BanpaidawarBikribitaran
  async function deleteBanpaidawarBikribitaran(req, res) {
    const deleteBanpaidawarBikribitaranQuery = `DELETE  FROM banpaidawar_bikribitarans where bikribitaran_id=?`;
    pool.query(
      deleteBanpaidawarBikribitaranQuery,
      [req.params.banpaidawarBikribitaranId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllBanpaidawarBikribitaran,
    getBanpaidawarBikribitaran,
    addBanpaidawarBikribitaran,
    updateBanpaidawarBikribitaran,
    deleteBanpaidawarBikribitaran,
  };
  