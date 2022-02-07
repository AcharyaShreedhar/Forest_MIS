import Banxetraatikraman from "../views/Banbibaran/Banxetraatikraman";
import Muddaanusandhandayari from "../views/Banbibaran/Muddaanusandhandayari";
import Banxetraanyaprayojan from "../views/Banbibaran/Banxetraanyaprayojan";
import Seedgardenplots from "../views/Banbibaran/Seedgardenplots";

const banbibaranRoutes = [
  
  {
    path: "/banbibaran/banxetraatikramanlist",
    title: "Banxetraatikraman",
    name: "banxetraatikraman",
    auth: true,
    component: Banxetraatikraman,
  },

  {
    path: "/banbibaran/banxetraatikramanadd/new",
    title: "Banxetraatikraman",
    name: "Banxetraatikraman",
    auth: true,
    component: Banxetraatikraman,
  },

  {
    path: "/banbibaran/banxetraatikramanedit/:id",
    title: "Banxetraatikraman",
    name: "Banxetraatikraman",
    auth: true,
    component: Banxetraatikraman,
  },

  {
    path: "/banbibaran/muddaanusandhandayarilist",
    title: "Muddaanusandhandayari",
    name: "muddaanusandhandayari",
    auth: true,
    component: Muddaanusandhandayari,
  },
  {
    path: "/banbibaran/muddaanusandhandayariadd/new",
    title: "Muddaanusandhandayari",
    name: "muddaanusandhandayari",
    auth: true,
    component: Muddaanusandhandayari,
  },
  {
    path: "/banbibaran/muddaanusandhandayariedit/:id",
    title: "Muddaanusandhandayari",
    name: "muddaanusandhandayari",
    auth: true,
    component: Muddaanusandhandayari,
  },
  {
    path: "/banbibaran/banxetraanyaprayojanlist",
    title: "Banxetraanyaprayojan",
    name: "banxetraanyaprayojan",
    auth: true,
    component: Banxetraanyaprayojan,
  },

  {
    path: "/banbibaran/banxetraanyaprayojanadd/new",
    title: "Banxetraanyaprayojan",
    name: "banxetraanyaprayojan",
    auth: true,
    component: Banxetraanyaprayojan,
  },
  {
    path: "/banbibaran/banxetraanyaprayojanedit/:id",
    title: "Banxetraanyaprayojan",
    name: "banxetraanyaprayojan",
    auth: true,
    component: Banxetraanyaprayojan,
  },

  {
    path: "/banbibaran/seedgardenplotslist",
    title: "Seedgardenplot",
    name: "seedgardenplot",
    auth: true,
    component: Seedgardenplots,
  },
  {
    path: "/banbibaran/seedgardenplotsadd/new",
    title: "Seedgardenplot",
    name: "seedgardenplot",
    auth: true,
    component: Seedgardenplots,
  },
  {
    path: "/banbibaran/seedgardenplotsedit/:id",
    title: "Seedgardenplot",
    name: "seedgardenplot",
    auth: true,
    component: Seedgardenplots,
  },
  {
    redirect: true,
    path: "/banbibaran",
    to: "/banbibaran/seedgardenplotslist",
    name: "seedgardenplot",
    component: Seedgardenplots,
  },
];

export default banbibaranRoutes;
