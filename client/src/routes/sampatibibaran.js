import Gharjagga from "../views/Sampatibibaran/Gharjagga";
import Sawarisadhan from "../views/Sampatibibaran/Sawarisadhan";
import AnyaSampati from "../views/Sampatibibaran/AnyaSampati";

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
    path: "/sampatibibaran/sawarisadhanadd/new",
    title: "Sawarisadhan",
    name: "sawarisadhan",
    auth: true,
    component: Sawarisadhan,
  },
  {
    path: "/sampatibibaran/sawarisadhanedit/:id",
    title: "Sawarisadhan",
    name: "sawarisadhan",
    auth: true,
    component: Sawarisadhan,
  },
 // anya sampati routes
  {
    path: "/sampatibibaran/anyasampatilist",
    title: "Anyasampati",
    name: "anyasampati",
    auth: true,
    component: AnyaSampati,
  },
  {
    path: "/sampatibibaran/anyasampatiadd/new",
    title: "Anyasampati",
    name: "anyasampati",
    auth: true,
    component: AnyaSampati,
  },
  {
    path: "/sampatibibaran/anyasampatiedit/:id",
    title: "Anyasampati",
    name: "anyasampati",
    auth: true,
    component: AnyaSampati,
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
