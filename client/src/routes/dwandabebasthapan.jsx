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
    path: "/dwandabebasthapan/banyajantuuddaradd/new",
    title: "BanyajantuUddar",
    name: "banyajantuuddar",
    auth: true,
    component: BanyajantuUddar,
  },

  {
    path: "/dwandabebasthapan/banyajantuuddaredit/:id",
    title: "BanyajantuUddar",
    name: "banyajantuuddar",
    auth: true,
    component: BanyajantuUddar,
  },


  {
    path: "/dwandabebasthapan/banyajantuxetirahatlist",
    title:"Banyajantuxetirahat",
    name: "banyajantuxetirahat",
    auth: true,
    component: BanyajantuxetiRahat,
  },

 
  {
    path: "/dwandabebasthapan/banyajantuxetirahatadd/new",
    title: "BanyajantuxetiRahat",
    name: "banyajantuxetirahat",
    auth: true,
    component: BanyajantuxetiRahat,
  },

  {
    path: "/dwandabebasthapan/banyajantuxetirahatedit/:id",
    title: "BanyajantuxetiRahat",
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
 
];

export default dwandabebasthapanRoutes;
