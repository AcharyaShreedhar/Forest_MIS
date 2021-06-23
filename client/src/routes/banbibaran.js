import Bandadelo from "../views/Banbibaran/Bandadelo";
import Banxetraatikraman from "../views/Banbibaran/Banxetraatikraman";
import Muddaanusandhandayari from "../views/Banbibaran/Muddaanusandhandayari";
import Banxetraanyaprayojan from "../views/Banbibaran/Banxetraanyaprayojan";
import Seedgardenplots from "../views/Banbibaran/Seedgardenplots";
import { BandadeloBibaran } from "../components";

const banbibaranRoutes = [
  {
    path: "/banbibaran/bandadelolist",
    title: "Bandadelo",
    name: "bandadelo",
    auth: true,
    component: Bandadelo,
  },

  {
    path: "/banbibaran/bandadeloadd/new",
    title: "Bandadelo",
    name: "Bandadelo",
    auth: true,
    component: Bandadelo,
  },

  {
    path: "/banbibaran/bandadeloedit/:id",
    title: "Bandadelo",
    name: "Bandadelo",
    auth: true,
    component: Bandadelo,
  },
  {
    path: "/banbibaran/banxetraatikramanlist",
    title: "Banxetraatikraman",
    name: "banxetraatikraman",
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
    path: "/banbibaran/banxetraanyaprayojanlist",
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
    to: "/banbibaran/bandadelolist",
    name: "Bandadelo",
    component: Bandadelo,
  },
];

export default banbibaranRoutes;
