const pool = require('../db')
//Controller for Listing all BanpaidawarBikribitaran
async function getAllBanpaidawarBikribitaran(req, res) {
  let office_cond = 'b.office_id like ?'
  const office_len = Array.isArray(req.body.officeId)
    ? req.body.officeId.length
    : 0
  if (office_len > 1) {
    office_cond = 'b.office_id in (?)'
  }

  let dist_cond = 'b.dist_id like ?'
  const dist_len = Array.isArray(req.body.distId) ? req.body.distId.length : 0
  if (dist_len > 1) {
    dist_cond = 'b.dist_id in (?)'
  }

  const getTotalQuery = `SELECT count(*) as total from banpaidawar_bikribitarans as b where b.bikri_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`
  const getAllBanpaidawarBikribitaranQuery = `select * from banpaidawar_bikribitarans as b where b.bikri_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error
      pool.query(
        getAllBanpaidawarBikribitaranQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.officeId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
        (error, results, fields) => {
          if (error) throw error
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                total: countresults[0].total,
                list: results,
              },
            })
          )
        }
      )
    }
  )
}

//Controller for Listing a Banpaidawar_Bikribitaran
async function getBanpaidawarBikribitaran(req, res) {
  const getBanpaidawarBikribitaranQuery = `select * from banpaidawar_bikribitarans where bikribitaran_id=?`
  pool.query(
    getBanpaidawarBikribitaranQuery,
    [req.params.banpaidawarbikribitaranId],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for adding a Banpaidawar_Bikribitaran
async function addBanpaidawarBikribitaran(req, res, next) {
  const addBanpaidawarBikribitaranQuery = `INSERT INTO banpaidawar_bikribitarans (dist_id, office_id, bikri_miti, bandpaidawar_kisim, ekai, aantarik_dar, aantarik_parinam ,aantarik_rakam,aaapurti_dar,aapurti_parinam,aapurti_rakam, bahiya_dar,bahiya_parinam,bahiya_rakam,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  pool.query(
    addBanpaidawarBikribitaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.bikri_miti,
      req.body.bandpaidawar_kisim,
      req.body.ekai,
      req.body.aantarik_dar,
      req.body.aantarik_parinam,
      req.body.aantarik_rakam,
      req.body.aaapurti_dar,
      req.body.aapurti_parinam,
      req.body.aapurti_rakam,
      req.body.bahiya_dar,
      req.body.bahiya_parinam,
      req.body.bahiya_rakam,
      req.body.created_by,
      req.body.updated_by,
      req.body.createdAt,
      req.body.updatedAt,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        next(error)
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }))
    }
  )
}

//Controller for updating a BanpaidawarBikribitaran
async function updateBanpaidawarBikribitaran(req, res, next) {
  const updateBanpaidawarBikribitaranQuery = `UPDATE banpaidawar_bikribitarans SET dist_id=?, office_id=?, bikri_miti=?, bandpaidawar_kisim=?, ekai=?, aantarik_dar=?, aantarik_parinam=?, aantarik_rakam=?, aaapurti_dar=?, aapurti_parinam=?, aapurti_rakam=?, bahiya_dar=?, bahiya_parinam=?, bahiya_rakam=?, created_by=?, updated_by=? WHERE bikribitaran_id=?`
  pool.query(
    updateBanpaidawarBikribitaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.bikri_miti,
      req.body.bandpaidawar_kisim,
      req.body.ekai,
      req.body.aantarik_dar,
      req.body.aantarik_parinam,
      req.body.aantarik_rakam,
      req.body.aaapurti_dar,
      req.body.aapurti_parinam,
      req.body.aapurti_rakam,
      req.body.bahiya_dar,
      req.body.bahiya_parinam,
      req.body.bahiya_rakam,
      req.body.created_by,
      req.body.updated_by,
      req.params.banpaidawarbikribitaranId,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        next(error)
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }))
    }
  )
}

//Controller for deleting a BanpaidawarBikribitaran
async function deleteBanpaidawarBikribitaran(req, res, next) {
  const deleteBanpaidawarBikribitaranQuery = `DELETE  FROM banpaidawar_bikribitarans where bikribitaran_id=?`
  pool.query(
    deleteBanpaidawarBikribitaranQuery,
    [req.params.banpaidawarbikribitaranId],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        next(error)
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }))
    }
  )
}

module.exports = {
  getAllBanpaidawarBikribitaran,
  getBanpaidawarBikribitaran,
  addBanpaidawarBikribitaran,
  updateBanpaidawarBikribitaran,
  deleteBanpaidawarBikribitaran,
}
