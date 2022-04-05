const pool = require('../../db')

//Controller for Upavokta Samuhako Susasan Sambhandhi Bibaran

async function getBudgetMonthly(req, res) {
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

  const getBudgetMonthlyQuery = `select bb.sirshak_id, bs.sirshak_name, bb.karyakram_sirshak_id, ks.karyakram_name, bb.barsik_lakshay_amount, bb.${chaumasik_lakshay} as chaumasik_lakshay_amount, (select if(isNull(sum(expense_amount)),0,sum(expense_amount)) ea from budget_karmacharidetails where chaumasik_id < ? and sirshak_id = bb.sirshak_id and karyakram_sirshak_id = bb.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and expense_year = ? and office_id = bb.office_id ) as gata_chaumasik_pragati, (select if(isNull(sum(expense_amount)),0,sum(expense_amount)) as ea from budget_karmacharidetails where expense_month_id < ? and sirshak_id = bb.sirshak_id and karyakram_sirshak_id = bb.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and  expense_year = ? and  office_id = bb.office_id) as gata_mahina_pragati,(select if(isNull(sum(expense_amount)),0,sum(expense_amount)) as ea from budget_karmacharidetails where expense_month_id = ? and bb.sirshak_id = bs.sirshak_id and bb.karyakram_sirshak_id = ks.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and expense_year = ? and office_id = bb.office_id) as yes_mahina_pragati, (select if(isNull(sum(expense_amount)),0,sum(expense_amount)) as ea from budget_karmacharidetails where expense_month_id <= ? and bb.sirshak_id = bs.sirshak_id and bb.karyakram_sirshak_id = ks.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and expense_year = ? and office_id = bb.office_id) as mahina_pragati from budget_barsiks bb inner join budget_sirshaks as bs on bb.sirshak_id = bs.sirshak_id inner join karyakram_sirshaks as ks on bb.karyakram_sirshak_id = ks.karyakram_sirshak_id inner join budget_karmacharidetails bk on bk.sirshak_id = bb.sirshak_id and bk.karyakram_sirshak_id = bb.karyakram_sirshak_id where bk.dist_id = 1 and bk.office_id = bb.office_id and bk.fiscal_year = '2078/079' group by bk.sirshak_id , bk.karyakram_sirshak_id order by bk.sirshak_id, bk.karyakram_sirshak_id`

  pool.query(
    getBudgetMonthlyQuery,
    [
      req.body.currentArthikbarsa,
      req.body.arthikbarsa,
      req.body.currentArthikbarsa,
      req.body.arthikbarsa,
      req.body.currentArthikbarsa,
      req.body.arthikbarsa,
      req.body.distId,
      req.body.officeId,
    ],
    (error, results, fields) => {
      if (error) throw error
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          susasanko_abastha: results[0],
        })
      )
    }
  )
}

module.exports = {
  getBudgetMonthly,
}
