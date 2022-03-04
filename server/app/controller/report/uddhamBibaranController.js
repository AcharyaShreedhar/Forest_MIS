const pool = require('../../db')
const r = require('ramda')

//Controller for Uddham Bibaran

async function getUddhamBibaran(req, res) {
  let date_cond = ''
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = `darta_miti between ? and ? and`
  }

  let office_cond = 'office_id like ?'
  const office_len = Array.isArray(req.body.officeId)
    ? req.body.officeId.length
    : 0
  if (office_len > 1) {
    office_cond = 'office_id in (?)'
  }

  let dist_cond = 'dist_id like ?'
  const dist_len = Array.isArray(req.body.distId) ? req.body.distId.length : 0
  if (dist_len > 1) {
    dist_cond = 'dist_id in (?)'
  }

  const getUddhamBibaranQuery = `SELECT uddham_type, SUM(rojgar_sankhya) as rojgari_srijana, COUNT(uddham_id) as jamma_uddham FROM uddhams WHERE ${date_cond} ${dist_cond} and ${office_cond} GROUP BY uddham_type`

  if (isDate) {
    pool.query(
      getUddhamBibaranQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,

            banpaidawar_uddham: results,
          })
        )
      }
    )
  } else {
    pool.query(
      getUddhamBibaranQuery,
      [req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,

            banpaidawar_uddham: results,
          })
        )
      }
    )
  }
}

module.exports = {
  getUddhamBibaran,
}
