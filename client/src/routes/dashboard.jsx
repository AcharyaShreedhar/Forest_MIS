import Activities from "../views/Activities";
import Banbibaran from "../views/Banbibaran";
import Banpaidawar from "../views/Banpaidawar";
import Dwandabebasthapan from "../views/Dwandabebasthapan";
import Forests from "../views/Forests";
import Home from "../views/Home";
import Login from "../layouts/Login";
import Sampatibibaran from "../views/Sampatibibaran";

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
    path: "/banbibaran",
    name: "Banbibaran",
    component: Banbibaran,
  },
  {
    path: "/sampatibibaran",
    name: "Sampatibibaran",
    component: Sampatibibaran,
  },
  {
    redirect: true,
    path: "/",
    to: "/login",
    name: "Dashboard",
  },
];

export default dashboardRoutes;
