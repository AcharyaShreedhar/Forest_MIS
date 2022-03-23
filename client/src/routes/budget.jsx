import BudgetBarsik from '../views/Budget/BudgetBarsik';
import BudgetEntry from '../views/Budget/BudgetEntry';
import BudgetSirshak from '../views/Budget/BudgetSirshak';
import KaryakramSirshak from '../views/Budget/KaryakramSirshak';

const budgetRoutes = [
  {
    path: '/budget/karyakramsirshaklist',
    title: 'KaryakramSirshak',
    name: 'gharjagga',
    auth: true,
    component: KaryakramSirshak,
  },
  {
    path: '/budget/karyakramsirshakadd/new',
    title: 'KaryakramSirshak',
    name: 'gharjagga',
    auth: true,
    component: KaryakramSirshak,
  },
  {
    path: '/budget/karyakramsirshakedit/:id',
    title: 'KaryakramSirshak',
    name: 'gharjagga',
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
    path: '/budget/budgetbarsiklist',
    title: 'BudgetBarsik',
    name: 'budgetbarsik',
    auth: true,
    component: BudgetBarsik,
  },
  {
    path: '/budget/budgetbarsikadd/new',
    title: 'BudgetBarsik',
    name: 'budgetbarsik',
    auth: true,
    component: BudgetBarsik,
  },
  {
    path: '/budget/budgetbarsikedit/:id',
    title: 'BudgetBarsik',
    name: 'budgetbarsik',
    auth: true,
    component: BudgetBarsik,
  },

  {
    path: '/budget/budgetentrylist',
    title: 'BudgetEntry',
    name: 'budgetentry',
    auth: true,
    component: BudgetEntry,
  },
];

export default budgetRoutes;
