const pool = require('../../db')
const r = require('ramda')

//Controller for kath daura  bikri bitaran Sambhandhi Bibaran
async function getKathdauraBikribitaran(req, res) {
  let date_cond = 'YEAR(bikri_miti)=?'
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = `bikri_miti between ? and ?`
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

  const getKathdauraBikribitaranQuery = `SELECT banko_kisim,SUM(IF(bikri_medium='1' && (banpaidawar_kisim='1' ||banpaidawar_kisim='2'||banpaidawar_kisim='3'),parinam,0)) AS samuhabhitra_kath,SUM(IF(bikri_medium='1' && banpaidawar_kisim='7',parinam,0)) AS samuhabhitra_daura,SUM(IF(bikri_medium='2' && (banpaidawar_kisim='1' ||banpaidawar_kisim='2'||banpaidawar_kisim='3'),parinam,0)) AS aapurti_kath,SUM(IF(bikri_medium='2' && banpaidawar_kisim='7',parinam,0)) AS aapurti_daura,SUM(IF(bikri_medium='3' && banpaidawar_kisim='1',parinam,0)) AS samuha_khayar,SUM(IF(bikri_medium='3' && banpaidawar_kisim='2',parinam,0)) AS samuha_saal,SUM(IF(bikri_medium='3' && banpaidawar_kisim='3',parinam,0)) AS samuha_anya,SUM(IF(bikri_medium='3' && banpaidawar_kisim='7',parinam,0)) AS samuha_daura FROM banpaidawar_bikribitarans where ${dist_cond} and ${office_cond} and ${date_cond} GROUP BY banko_kisim`

  if (isDate) {
    pool.query(
      getKathdauraBikribitaranQuery,
      [req.body.distId, req.body.officeId, req.body.fromDate, req.body.toDate],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            kathdaura_bikri: results,
          })
        )
      }
    )
  } else {
    pool.query(
      getKathdauraBikribitaranQuery,
      [req.body.distId, req.body.officeId, req.body.currentArthikbarsa],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            kathdaura_bikri: results,
          })
        )
      }
    )
  }
}

module.exports = {
  getKathdauraBikribitaran,
}
