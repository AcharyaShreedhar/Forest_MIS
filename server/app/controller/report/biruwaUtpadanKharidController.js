const pool = require('../../db')
const r = require('ramda')

// Controller for biruwa Utpadan Kharid brixyaropan Controller

async function getBiruwaUtpadanKharid(req, res) {
  let date_cond_biruwa = ''
  let date_cond_brixyaropan = ''
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond_biruwa = `arthik_barsa between ? and ? and`
    date_cond_brixyaropan = `brixyaropan_miti between ? and ? and`
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

  const getBiruwaUtpadanKharidQuery = `SELECT utpadan_medium,SUM(IF(biruwa_type=1,biruwa_sankhya,0)) as bahuudyesiya, SUM(IF(biruwa_type=2,biruwa_sankhya,0)) as jadibuti, SUM(IF(biruwa_type=3,biruwa_sankhya,0)) as bahubarsiya FROM biruwa_utpadans WHERE ${date_cond_biruwa} ${dist_cond} and ${office_cond} GROUP BY utpadan_medium`
  const getBirxyaropanQuery = `SELECT SUM(IF((xetra=1 || xetra=2),brixyaropan_sankhya,0)) as samudayik_rastriya, SUM(IF(xetra=3,brixyaropan_sankhya,0)) as niji, SUM(IF(xetra=4,brixyaropan_sankhya,0)) as sarbajanik FROM brixyaropans WHERE ${date_cond_brixyaropan} ${dist_cond} and ${office_cond}`
  if (isDate) {
    pool.query(
      getBiruwaUtpadanKharidQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, utpadanresults, fields) => {
        if (error) throw error
        pool.query(
          getBirxyaropanQuery,
          [
            req.body.fromDate,
            req.body.toDate,
            req.body.distId,
            req.body.officeId,
          ],
          (error, birxyaropanresults, fields) => {
            if (error) throw error
            res.send(
              JSON.stringify({
                status: 200,
                error: null,
                biruwautpadan_kharid: {
                  utpadan: utpadanresults,
                  brixyaropan: birxyaropanresults[0],
                },
              })
            )
          }
        )
      }
    )
  } else {
    pool.query(
      getBiruwaUtpadanKharidQuery,
      [req.body.distId, req.body.officeId],
      (error, utpadanresults, fields) => {
        if (error) throw error
        pool.query(
          getBirxyaropanQuery,
          [req.body.distId, req.body.officeId],
          (error, birxyaropanresults, fields) => {
            if (error) throw error
            res.send(
              JSON.stringify({
                status: 200,
                error: null,
                biruwautpadan_kharid: {
                  utpadan: utpadanresults,
                  brixyaropan: birxyaropanresults[0],
                },
              })
            )
          }
        )
      }
    )
  }
}

module.exports = {
  getBiruwaUtpadanKharid,
}
