const pool = require('../../db')

const r = require('ramda')

//Controller for Budget Monthly Bibaran

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

  const chaumasik_id = await req.body.chaumasik_id
  let chaumasik_amount = 'pratham_chaumasik_amount'
  if (r.equals(2, chaumasik_id)) {
    chaumasik_amount = 'doshro_chaumasik_amount'
  } else if (r.equals(3, chaumasik_id)) {
    chaumasik_amount = 'teshro_chaumasik_amount'
  }

  const getBudgetMonthlyQuery = `select bb.sirshak_id, bs.sirshak_name, bb.karyakram_sirshak_id, ks.karyakram_name, bb.barsik_lakshay_amount, bb.teshro_chaumasik_amount as chaumasik_lakshay_amount, (select if(isNull(sum(expense_amount)),0,sum(expense_amount)) ea from budget_karmacharidetails where chaumasik_id < ? and sirshak_id = bb.sirshak_id and karyakram_sirshak_id = bb.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and expense_year = ? and office_id = bb.budget_office_id ) as gata_chaumasik_pragati, (select if(isNull(sum(expense_amount)),0,sum(expense_amount)) as ea from budget_karmacharidetails where expense_month_id < ? and sirshak_id = bb.sirshak_id and karyakram_sirshak_id = bb.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and  expense_year = ? and  office_id = bb.budget_office_id) as gata_mahina_pragati,(select if(isNull(sum(expense_amount)),0,sum(expense_amount)) as ea from budget_karmacharidetails where expense_month_id = ? and sirshak_id = bb.sirshak_id and karyakram_sirshak_id = bb.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and expense_year = ? and office_id = bb.budget_office_id) as yes_mahina_pragati, (select if(isNull(sum(expense_amount)),0,sum(expense_amount)) as ea from budget_karmacharidetails where expense_month_id <= ? and sirshak_id = bb.sirshak_id and karyakram_sirshak_id = bb.karyakram_sirshak_id and fiscal_year = bb.fiscal_year and expense_year = ? and office_id = bb.budget_office_id) as mahina_pragati from budget_barsiks bb inner join budget_sirshaks as bs on bb.sirshak_id = bs.sirshak_id inner join karyakram_sirshaks as ks on bb.karyakram_sirshak_id = ks.karyakram_sirshak_id where fiscal_year = ? and bb.budget_office_id like ? group by bb.sirshak_id , bb.karyakram_sirshak_id order by bb.sirshak_id, bb.karyakram_sirshak_id`

  console.log('budgetmpnth;u:', req.body)

  pool.query(
    getBudgetMonthlyQuery,
    [
      req.body.chaumasik_id,
      req.body.expense_year,
      req.body.expense_month_id,
      req.body.expense_year,
      req.body.expense_month_id,
      req.body.expense_year,
      req.body.expense_month_id,
      req.body.expense_year,
      req.body.fiscal_year,
      req.body.office_id,
    ],
    (error, results, fields) => {
      if (error) throw error
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          budget_monthly: results,
        })
      )
      console.log('budgetmpnth;u:', results)
    }
  )
}

module.exports = {
  getBudgetMonthly,
}
