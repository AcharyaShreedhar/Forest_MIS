import Lilam from "../views/Banpaidawar/Lilam";
import Osarpasar from "../views/Banpaidawar/Osarpasar";

const banpaidawarRoutes = [
  {
    path: "/banpaidawar/lilamlist",
    title: "Lilam",
    name: "lilam",
    auth: true,
    component: Lilam,
  },

  {
    path: "/banpaidawar/osarpasarlist",
    title: "Osarpasar",
    name: "osarpasar",
    auth: true,
    component: Osarpasar,
  },
  {
    redirect: true,
    path: "/banpaidawar",
    to: "/banpaidawar/banpaidawarlilamlist",
    name: "Lilam",
    component: Lilam,
  },
];

export default banpaidawarRoutes;
