const pool = require('../../db')
const r = require('ramda')

//Controller for Srijana gariyeko rojgari bibaran

async function getRojgariSrijana(req, res) {
  let date_cond = '>=?'
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = `between ? and ?`
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

  const getRojgariSrijanaQuery = `SELECT karya, ekai, SUM(mahila)as mahila, SUM(purus) as purus, SUM(mahila+purus*ekai) as jamma, kaifiyat as remarks FROM rojgar_srijanas  WHERE ${dist_cond} and ${office_cond} and miti ${date_cond} GROUP BY karya`

  if (isDate) {
    pool.query(
      getRojgariSrijanaQuery,
      [req.body.distId, req.body.officeId, req.body.fromDate, req.body.toDate],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            rojgari_srijana: results,
          })
        )
      }
    )
  } else {
    pool.query(
      getRojgariSrijanaQuery,
      [req.body.distId, req.body.officeId, req.body.currentArthikbarsa],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            rojgari_srijana: results,
          })
        )
      }
    )
  }
}

module.exports = {
  getRojgariSrijana,
}
