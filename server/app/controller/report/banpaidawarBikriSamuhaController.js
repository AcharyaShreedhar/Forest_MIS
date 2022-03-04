const pool = require('../../db')
const r = require('ramda')

//Controller for Samuhabhitra Banpaidawar Bikri Bitaran

async function getBanpaidawarbikriSamuhaBhitra(req, res) {
  let date_cond = ''
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = `bikri_miti between ? and ? and`
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

  const getBikriBibaranQuery = `SELECT SUM(IF((banpaidawar_kisim='1' && bikri_medium='1'),rakam*ekai,0)) AS kathdaura, SUM(IF(banpaidawar_kisim!='1'&& bikri_medium='1',rakam*ekai,0)) AS gairkastha,SUM(IF( bikri_medium='1',rakam*ekai,0)) AS total FROM banpaidawar_bikribitarans where ${date_cond} ${dist_cond} and ${office_cond}`

  if (isDate) {
    pool.query(
      getBikriBibaranQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            data: {
              banpaidawar_bikri: results[0],
            },
          })
        )
      }
    )
  } else {
    pool.query(
      getBikriBibaranQuery,
      [req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            data: {
              banpaidawar_bikri: results[0],
            },
          })
        )
      }
    )
  }
}

module.exports = {
  getBanpaidawarbikriSamuhaBhitra,
}
