import Gharjagga from "../views/Sampatibibaran/Gharjagga";
import Sawarisadhan from "../views/Sampatibibaran/Sawarisadhan";

const sampatibibaranRoutes = [
  {
    path: "/sampatibibaran/gharjaggalist",
    title: "Gharjagga",
    name: "gharjagga",
    auth: true,
    component: Gharjagga,
  },
  {
    path: "/sampatibibaran/gharjaggaadd/new",
    title: "Gharjagga",
    name: "gharjagga",
    auth: true,
    component: Gharjagga,
  },
  {
    path: "/sampatibibaran/gharjaggaedit/:id",
    title: "Gharjagga",
    name: "gharjagga",
    auth: true,
    component: Gharjagga,
  },

  {
    path: "/sampatibibaran/sawarisadhanlist",
    title: "Sawarisadhan",
    name: "sawarisadhan",
    auth: true,
    component: Sawarisadhan,
  },
  {
    redirect: true,
    path: "/sampatibibaran",
    to: "/sampatibibaran/gharjaggalist",
    name: "banyajantuuddar",
    component: Gharjagga,
  },
];

export default sampatibibaranRoutes;
