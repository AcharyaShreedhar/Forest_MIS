import BanyajantuUddar from "../views/Dwandabebasthapan/BanyajantuUddar";
import BanyajantuxetiRahat from "../views/Dwandabebasthapan/BanyajantuxetiRahat";

const dwandabebasthapanRoutes = [
  {
    path: "/dwandabebasthapan/banyajantuuddarlist",
    title: "Banyajantuddar",
    name: "banyajantuuddar",
    auth: true,
    component: BanyajantuUddar,
  },

  {
    path: "/dwandabebasthapan/banyajantuxetirahatlist",
    title: "Banyajantuxetirahat",
    name: "banyajantuxetirahat",
    auth: true,
    component: BanyajantuxetiRahat,
  },
  {
    redirect: true,
    path: "/dwandabebasthapan",
    to: "/dwandabebasthapan/banyajantuuddarlist",
    name: "banyajantuuddar",
    component: BanyajantuUddar,
  },
  {
    path: "/dwandabebasthapan/uddaradd/new",
    title: "Uddar",
    name: "uddar",
    auth: true,
    component: BanyajantuUddar,
  },
];

export default dwandabebasthapanRoutes;
