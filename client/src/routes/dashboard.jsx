import Home from "../views/Home";
import Forests from "../views/Forests";

const dashboardRoutes = [
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
    redirect: true,
    path: "/",
    to: "/home",
    name: "Dashboard",
  },
];

export default dashboardRoutes;
