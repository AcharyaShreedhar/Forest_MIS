import Dashboard from "../layouts/Dashboard";
const indexRoutes = [
  { path: "/home", name: "Home", component: Dashboard },
  {
    path: "/",
    name: "Login",
    component: Dashboard,
  },
];

export default indexRoutes;
