import AnnualReport from '../views/Report/AnnualReport'
import DateReport from '../views/Report/DateReport'
import BudgetMonthlyReport from '../views/Report/BudgetMonthlyReport'

const reportRoutes = [
  {
    path: '/report/annualreport',
    title: 'AnnualReport',
    name: 'AnnualReport',
    auth: true,
    component: AnnualReport,
  },
  {
    path: '/report/datereport',
    title: 'DateReport',
    name: 'DateReport',
    auth: true,
    component: DateReport,
  },
  {
    path: '/report/budgetmonthlyreport',
    title: 'MonthlyReport',
    name: 'MonthlyReport',
    auth: true,
    component: BudgetMonthlyReport,
  },
  {
    redirect: true,
    path: '/report',
    to: '/report/annualreport',
    name: 'AnnualReport',
    component: AnnualReport,
  },
]

export default reportRoutes
