import Lilam from "../views/Banpaidawar/Lilam";
import Osarpasar from "../views/Banpaidawar/Osarpasar";
import Bikribitaran from "../views/Banpaidawar/Bikribitaran";

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

  {
    path: "/banpaidawar/osarpasaradd/new",
    title: "Osarpasar",
    name: "Osarpasar",
    auth: true,
    component: Osarpasar,
  },

  {
    path: "/banpaidawar/osarpasaredit/:id",
    title: "Osarpasar",
    name: "Osarpasar",
    auth: true,
    component: Osarpasar,
  },

  {
    path: "/banpaidawar/bikribitaranlist",
    title: "Bikribitaran",
    name: "bikribitaran",
    auth: true,
    component: Bikribitaran,
  },
  {
    path: "/banpaidawar/bikribitaranadd/new",
    title: "Bikribitaran",
    name: "bikribitaran",
    auth: true,
    component: Bikribitaran,
  },
 
];

export default banpaidawarRoutes;
