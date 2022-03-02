const pool = require('../../db')
const r = require('ramda')

//Controller for Banxetrako Jagga Anyaprayojan Ko lagi Upalabda garayeko Bibaran
async function getBanxetraAnyaprayojanBibaran(req, res) {
  let date_cond = ''
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = `arthik_barsa between ? and ? and `
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

  const getBanxetraAnyaprayojanBibaranQuery = `SELECT sanstha_name,xetrafal_temp as asthai_prayojan_area,xetrafal_perm as sthai_prayojan_area,upalabdha_address as jaggako_sthan, prayojan FROM banxetra_anyaprayojans WHERE ${date_cond} ${dist_cond} and ${office_cond}`

  if (isDate) {
    pool.query(
      getBanxetraAnyaprayojanBibaranQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            banxetra_anyaprayojan: results,
          })
        )
      }
    )
  } else {
    pool.query(
      getBanxetraAnyaprayojanBibaranQuery,
      [req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            banxetra_anyaprayojan: results,
          })
        )
      }
    )
  }
}

module.exports = {
  getBanxetraAnyaprayojanBibaran,
}
