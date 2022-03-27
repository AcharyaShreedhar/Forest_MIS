import BudgetBarshik from '../views/Budget/BudgetBarshik'
import BudgetEntry from '../views/Budget/BudgetEntry'
import BudgetSirshak from '../views/Budget/BudgetSirshak'
import KaryakramSirshak from '../views/Budget/KaryakramSirshak'

const budgetRoutes = [
  {
    path: '/budget/karyakramsirshaklist',
    title: 'KaryakramSirshak',
    name: 'karyakramsirshak',
    auth: true,
    component: KaryakramSirshak,
  },
  {
    path: '/budget/karyakramsirshakadd/new',
    title: 'KaryakramSirshak',
    name: 'karyakramsirshak',
    auth: true,
    component: KaryakramSirshak,
  },
  {
    path: '/budget/karyakramsirshakedit/:id',
    title: 'KaryakramSirshak',
    name: 'karyakramsirshak',
    auth: true,
    component: KaryakramSirshak,
  },

  {
    path: '/budget/budgetsirshaklist',
    title: 'BudgetSirshak',
    name: 'budgetsirshak',
    auth: true,
    component: BudgetSirshak,
  },
  {
    path: '/budget/budgetsirshakadd/new',
    title: 'BudgetSirshak',
    name: 'budgetsirshak',
    auth: true,
    component: BudgetSirshak,
  },
  {
    path: '/budget/budgetsirshakedit/:id',
    title: 'BudgetSirshak',
    name: 'budgetsirshak',
    auth: true,
    component: BudgetSirshak,
  },

  {
    path: '/budget/budgetbarshiklist',
    title: 'BudgetBarshik',
    name: 'budgetbarshik',
    auth: true,
    component: BudgetBarshik,
  },
  {
    path: '/budget/budgetbarshikadd/new',
    title: 'BudgetBarshik',
    name: 'budgetbarshik',
    auth: true,
    component: BudgetBarshik,
  },
  {
    path: '/budget/budgetbarshikedit/:id',
    title: 'BudgetBarshik',
    name: 'budgetbarshik',
    auth: true,
    component: BudgetBarshik,
  },

  {
    path: '/budget/budgetentrylist',
    title: 'BudgetEntry',
    name: 'budgetentry',
    auth: true,
    component: BudgetEntry,
  },

  {
    path: '/budget/budgetentryadd/new',
    title: 'BudgetEntry',
    name: 'budgetentry',
    auth: true,
    component: BudgetEntry,
  },

  {
    path: '/budget/budgetentryedit/:id',
    title: 'BudgetEntry',
    name: 'budgetentry',
    auth: true,
    component: BudgetEntry,
  },

  {
    redirect: true,
    path: '/budget',
    to: '/budget/budgetentrylist',
    name: 'budgetenty',
    component: BudgetEntry,
  },
]

export default budgetRoutes
