const pool = require('../../db')
const r = require('ramda')

//Controller for Banya jantu Xeti Rahat Bibaran
async function getBanyajantuXetiRahatBibaran(req, res) {
  let date_cond = ''
  const isDate = r.isNil(req.body.fromDate) ? false : true
  if (isDate) {
    date_cond = `xeti_miti between ? and ? and`
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

  const getBanyajantuXetiRahatBibaranQuery = `SELECT pidit_name,pidit_address as address,ghatana_address,xeti_miti as ghatana_miti,xetigarne_animal as ghatana_ghataune_banyajantu_prajati,(IF(man_injury=3,1,0)) AS manisko_mrityu,(IF(man_injury!=3,1,0)) AS manis_ghaete,pasudhan_xeti,balinali_noksani,ghargoth_xeti,anna_bhandaran as bhandaran_anna,vuktani_rakam as rahat_upalabda FROM banyajantuxeti_bibarans WHERE ${date_cond} ${dist_cond} and ${office_cond}`

  if (isDate) {
    pool.query(
      getBanyajantuXetiRahatBibaranQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            banyajantu_xeti_rahat: results,
          })
        )
      }
    )
  } else {
    pool.query(
      getBanyajantuXetiRahatBibaranQuery,
      [req.body.distId, req.body.officeId],
      (error, results, fields) => {
        if (error) throw error
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            banyajantu_xeti_rahat: results,
          })
        )
      }
    )
  }
}

module.exports = {
  getBanyajantuXetiRahatBibaran,
}
