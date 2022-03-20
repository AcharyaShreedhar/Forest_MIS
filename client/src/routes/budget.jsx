import Karyakramsirshak from '../views/Budget/Karyakramsirshak'

const budgetRoutes = [
  {
    path: '/budget/karyakramsirshak',
    title: 'Karyakramsirshak',
    name: 'gharjagga',
    auth: true,
    component: Karyakramsirshak,
  },

  {
    redirect: true,
    path: '/budget',
    to: '/budget/budgetentry',
    name: 'budgetentry',
    component: Budgetentry,
  },
]

export default budgetRoutes
