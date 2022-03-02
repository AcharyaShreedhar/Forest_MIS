import AnnualReport from '../views/Report/AnnualReport'
import DateReport from '../views/Report/DateReport'

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
    redirect: true,
    path: '/report',
    to: '/report/annualreport',
    name: 'AnnualReport',
    component: AnnualReport,
  },
]

export default reportRoutes
