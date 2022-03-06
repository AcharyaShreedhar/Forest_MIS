const pool = require('../../db')

//Controller for Nabikaran Bibaran Data

async function getNabikaranBibaran(req, res) {
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

  const getSNabikaranBibaranQuery = `SELECT SUM(IF(Year(n.renewal_date)<=?,1,0)) AS expired,SUM(IF(Year(n.renewal_date)=?,1,0)) AS renewed,SUM(IF(Year(n.renewal_date)!=?,1,0)) AS remaining,SUM(IF(Year(n.renewal_date)=?,1,0)) as tobeexpired,SUM(IF(Year(n.renewal_date)!=? OR Year(n.renewal_date)=?,1,0)) as torenew FROM samudayikban_bibarans as s LEFT JOIN nabikaran_karyayojanas as n ON s.darta_no=n.darta_id where s.${dist_cond} and s.${office_cond}`
  const getKNabikaranBibaranQuery = `SELECT SUM(IF(Year(n.renewal_date)<=?,1,0)) AS expired,SUM(IF(Year(n.renewal_date)=?,1,0)) AS renewed,SUM(IF(Year(n.renewal_date)!=?,1,0)) AS remaining,SUM(IF(Year(n.renewal_date)=?,1,0)) as tobeexpired,SUM(IF(Year(n.renewal_date)!=? OR Year(n.renewal_date)=?,1,0)) as torenew FROM dharmikban_bibarans as s LEFT JOIN nabikaran_karyayojanas as n ON s.darta_no=n.darta_id where s.${dist_cond} and s.${office_cond}`
  pool.query(
    getSNabikaranBibaranQuery,
    [
      req.body.currentArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.upcommingArthikbarsa,
      req.body.currentArthikbarsa,
      req.body.upcommingArthikbarsa,
      req.body.distId,
      req.body.officeId,
    ],
    (error, sresults, fields) => {
      if (error) throw error
      pool.query(
        getKNabikaranBibaranQuery,
        [
          req.body.currentArthikbarsa,
          req.body.currentArthikbarsa,
          req.body.currentArthikbarsa,
          req.body.upcommingArthikbarsa,
          req.body.currentArthikbarsa,
          req.body.upcommingArthikbarsa,
          req.body.distId,
          req.body.officeId,
        ],
        (error, kresults, fields) => {
          if (error) throw error
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                kabuliyatiban: kresults[0],
                samudayikban: sresults[0],
              },
            })
          )
        }
      )
    }
  )
}

module.exports = {
  getNabikaranBibaran,
}
