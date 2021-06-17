import Activities from "../views/Activities";
import Banpaidawar from "../views/Banpaidawar";
import Forests from "../views/Forests";
import Home from "../views/Home";
import Login from "../layouts/Login";
import Dwandabebasthapan from "../views/Dwandabebasthapan";

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/forests",
    name: "Forests",
    component: Forests,
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/banpaidawar",
    name: "Banpaidawar",
    component: Banpaidawar,
  },
  {
    path: "/dwandabebasthapan",
    name: "Dwandabebasthapan",
    component: Dwandabebasthapan,
  },
  {
    redirect: true,
    path: "/",
    to: "/login",
    name: "Dashboard",
  },
];

export default dashboardRoutes;
