const pool = require('../db')

//Controller for Listing all karyakram_sirshak
async function getAllKaryakramSirshak(req, res) {
  const getTotalQuery = `SELECT count(*) as total from karyakram_sirshaks where dist_id like ? and office_id like ?`
  const getAllKaryakramSirshakQuery = `select * from karyakram_sirshaks where dist_id like ? and office_id like ? ORDER BY ? ASC LIMIT ?, ?`
  pool.query(
    getTotalQuery,
    [req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error
      pool.query(
        getAllKaryakramSirshakQuery,
        [
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

//Controller for Listing a karyakram_sirshak
async function getKaryakramSirshak(req, res) {
  const getKaryakramSirshakQuery = `select * from karyakram_sirshaks where karyakram_sirshak_id = ?`
  pool.query(
    getKaryakramSirshakQuery,
    [req.params.karyakramSirshakId],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for karyakram_sirshak Dropdown
async function getKaryakramSirshakDropdown(req, res) {
  const getKaryakramSirshakDropdownQuery = `select karyakram_sirshak_id as id, karyakram_sirshak_no, karyakram_name as value from karyakram_sirshaks where dist_id like ? and sirshak_id like ?`
  pool.query(
    getKaryakramSirshakDropdownQuery,
    [req.body.dist_id, req.body.sirshak_id],
    (error, results, fields) => {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, data: results }))
    }
  )
}

//Controller for adding a karyakram_sirshak
async function addKaryakramSirshak(req, res, next) {
  const addKaryakramSirshakQuery = `INSERT INTO karyakram_sirshaks (sirshak_id, dist_id, office_id, user_id, karyakram_name, karyakram_sirshak_no, created_by,updated_by) values (?,?,?,?,?,?,?,?)`
  pool.query(
    addKaryakramSirshakQuery,
    [
      req.body.sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.karyakram_name,
      req.body.karyakram_sirshak_no,
      req.body.created_by,
      req.body.updated_by,
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

//Controller for updating a karyakram_sirshak
async function updateKaryakramSirshak(req, res, next) {
  const updateKaryakramSirshakQuery = `UPDATE karyakram_sirshaks SET sirshak_id = ?, dist_id=?, office_id=?, user_id=?, karyakram_name=?, karyakram_sirshak_no=?, created_by=?,updated_by=? WHERE karyakram_sirshak_id=?`

  pool.query(
    updateKaryakramSirshakQuery,
    [
      req.body.sirshak_id,
      req.body.dist_id,
      req.body.office_id,
      req.body.user_id,
      req.body.karyakram_name,
      req.body.karyakram_sirshak_no,
      req.body.created_by,
      req.body.updated_by,
      req.params.karyakramSirshakId,
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

//Controller for deleting a KaryakramSirshak
async function deleteKaryakramSirshak(req, res, next) {
  const deleteKaryakramSirshakQuery = `DELETE  FROM karyakram_sirshaks where karyakram_sirshak_id=?`
  pool.query(
    deleteKaryakramSirshakQuery,
    [req.params.karyakramSirshakId],
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
  getAllKaryakramSirshak,
  getKaryakramSirshak,
  addKaryakramSirshak,
  updateKaryakramSirshak,
  deleteKaryakramSirshak,
  getKaryakramSirshakDropdown,
}
