import Dashboard from "../layouts/Dashboard";
import Login from "../layouts/Login";
const indexRoutes = [
  { path: "/home", name: "Home", component: Dashboard },
  {
    path: "/",
    name: "Login",
    component: Dashboard,
  },
];

export default indexRoutes;
