import Activities from "../views/Activities";
import Banbibaran from "../views/Banbibaran";
import Banpaidawar from "../views/Banpaidawar";
import Bipatbebasthapan from "../views/Bipatbebasthapan";
import Dwandabebasthapan from "../views/Dwandabebasthapan";
import Forests from "../views/Forests";
import Home from "../views/Home";
import Karmachari from "../views/Karmachari";
import Karyabibaran from "../views/Karyabibaran";
import Login from "../layouts/Login";
import Miscellaneous from "../views/Miscellaneous";
import Report from "../views/Report";
import Sampatibibaran from "../views/Sampatibibaran";
import Samrakshyan from "../views/Samrakshyan";
import User from "../views/User";
import Offices from "../views/Offices";

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
    path: "/karmachari",
    name: "karmachari",
    component: Karmachari,
  },
  {
    path: "/karyabibaran",
    name: "karyabibaran",
    component: Karyabibaran,
  },
  {
    path: "/miscellaneous",
    name: "Miscellaneous",
    component: Miscellaneous,
  },
  {
    path: "/bipatbebasthapan",
    name: "Bipatbebasthapan",
    component: Bipatbebasthapan,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/samrakshyan",
    name: "Samrakshyan",
    component: Samrakshyan,
  },
  {
    path: "/userlist",
    title: "Users",
    name: "User",
    auth: true,
    component: User,
  },

  {
    path: "/useradd/new",
    title: "User",
    name: "user",
    auth: true,
    component: User,
  },
  {
    path: "/useredit/:id",
    title: "User",
    name: "user",
    auth: true,
    component: User,
  },
  {
    path: "/officelist",
    title: "Offices",
    name: "Office",
    auth: true,
    component: Offices,
  },

  {
    path: "/officeadd/new",
    title: "Office",
    name: "office",
    auth: true,
    component: Offices,
  },
  {
    path: "/officeedit/:id",
    title: "Office",
    name: "office",
    auth: true,
    component: Offices,
  },

  {
    redirect: true,
    path: "/",
    to: "/login",
    name: "Dashboard",
  },
];

export default dashboardRoutes;
