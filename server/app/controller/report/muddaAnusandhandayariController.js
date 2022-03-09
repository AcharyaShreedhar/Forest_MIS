const pool = require('../../db')
const r = require('ramda')

//Controller for MuddaAnusandhan Dayari  Sambhandhi Bibaran
async function getMuddaAnusandhandayariBibaran(req, res) {
  let date_cond = '>=?'
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = ` between ? and ?`
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

  const getMuddaAnusandhandayariBibaranQuery = `SELECT SUM(IF(faisala_miti<=? && faisala_status='2',1,0)) AS faisalahunabaki, SUM(IF(jaheri_partibedan_miti${date_cond},1,0)) AS dayar_bhayeka, SUM(IF(faisala_miti<=? && faisala_status='1',1,0)) AS faisala_bhayeka, SUM(IF(faisala_status='2',1,0)) AS faisalahunabaki_jamma FROM mudda_anusandhan_dayaris where ${dist_cond} and ${office_cond} GROUP BY kasurko_kisim`

  if (isDate) {
    pool.query(
      getMuddaAnusandhandayariBibaranQuery,
      [
        req.body.fromDate,
        req.body.fromDate,
        req.body.toDate,
        req.body.fromDate,
        req.body.distId,
        req.body.officeId,
      ],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            mudda: {
              banpaidawar_chorinikasi: !r.isNil(results[0]) ? results[0] : 0,
              banyajantu_aparad: !r.isNil(results[1]) ? results[1] : 0,
              banatikraman: !r.isNil(results[2]) ? results[2] : 0,
              total: {
                faisalahunabaki: !r.isNil(results[0])
                  ? results[0].faisalahunabaki
                  : 0 + !r.isNil(results[1])
                  ? results[1].faisalahunabaki
                  : 0 + !r.isNil(results[2])
                  ? results[2].faisalahunabaki
                  : 0,
                dayar_bhayeka: !r.isNil(results[0])
                  ? results[0].dayar_bhayeka
                  : 0 + !r.isNil(results[1])
                  ? results[1].dayar_bhayeka
                  : 0 + !r.isNil(results[2])
                  ? results[2].dayar_bhayeka
                  : 0,
                faisala_bhayeka: !r.isNil(results[0])
                  ? results[0].faisala_bhayeka
                  : 0 + !r.isNil(results[1])
                  ? results[1].faisala_bhayeka
                  : 0 + !r.isNil(results[2])
                  ? results[2].faisala_bhayeka
                  : 0,
                faisalahunabaki_jamma: !r.isNil(results[0])
                  ? results[0].faisalahunabaki_jamma
                  : 0 + !r.isNil(results[1])
                  ? results[1].faisalahunabaki_jamma
                  : 0 + !r.isNil(results[2])
                  ? results[2].faisalahunabaki_jamma
                  : 0,
              },
            },
          })
        )
      }
    )
  } else {
    pool.query(
      getMuddaAnusandhandayariBibaranQuery,
      [
        req.body.previousArthikbarsa,
        req.body.previousArthikbarsa,
        req.body.previousArthikbarsa,
        req.body.distId,
        req.body.officeId,
      ],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            mudda: {
              banpaidawar_chorinikasi: !r.isNil(results[0]) ? results[0] : 0,
              banyajantu_aparad: !r.isNil(results[1]) ? results[1] : 0,
              banatikraman: !r.isNil(results[2]) ? results[2] : 0,
              total: {
                faisalahunabaki: !r.isNil(results[0])
                  ? results[0].faisalahunabaki
                  : 0 + !r.isNil(results[1])
                  ? results[1].faisalahunabaki
                  : 0 + !r.isNil(results[2])
                  ? results[2].faisalahunabaki
                  : 0,
                dayar_bhayeka: !r.isNil(results[0])
                  ? results[0].dayar_bhayeka
                  : 0 + !r.isNil(results[1])
                  ? results[1].dayar_bhayeka
                  : 0 + !r.isNil(results[2])
                  ? results[2].dayar_bhayeka
                  : 0,
                faisala_bhayeka: !r.isNil(results[0])
                  ? results[0].faisala_bhayeka
                  : 0 + !r.isNil(results[1])
                  ? results[1].faisala_bhayeka
                  : 0 + !r.isNil(results[2])
                  ? results[2].faisala_bhayeka
                  : 0,
                faisalahunabaki_jamma: !r.isNil(results[0])
                  ? results[0].faisalahunabaki_jamma
                  : 0 + !r.isNil(results[1])
                  ? results[1].faisalahunabaki_jamma
                  : 0 + !r.isNil(results[2])
                  ? results[2].faisalahunabaki_jamma
                  : 0,
              },
            },
          })
        )
      }
    )
  }
}

module.exports = {
  getMuddaAnusandhandayariBibaran,
}
