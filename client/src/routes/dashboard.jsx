import Activities from "../views/Activities";
import Forests from "../views/Forests";
import Home from "../views/Home";
import Login from "../layouts/Login";

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
    redirect: true,
    path: "/",
    to: "/login",
    name: "Dashboard",
  },
];

export default dashboardRoutes;
