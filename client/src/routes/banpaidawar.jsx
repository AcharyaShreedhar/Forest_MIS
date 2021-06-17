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
    path: "/banpaidawar/lilamadd/new",
    title: "Lilam",
    name: "lilam",
    auth: true,
    component: Lilam,
  },

  {
    path: "/banpaidawar/lilamedit/:id",
    title: "Lilam",
    name: "Lilam",
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
 
];

export default banpaidawarRoutes;
