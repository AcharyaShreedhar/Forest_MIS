import Home from "../views/Home";
import About from "../views/About"

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path:"/about",
    name:"About",
    component:About,
  },
  {
    redirect: true,
    path: "/",
    to: "/home",
    name: "Dashboard",
  },
];

export default dashboardRoutes;
