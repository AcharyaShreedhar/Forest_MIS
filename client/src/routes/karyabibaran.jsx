import BanbikasKaryabibaran from "../views/Karyabibaran/Banbikaskaryabibaran";
import SamajikKaryabibaran from "../views/Karyabibaran/Samajikkaryabibaran";

const karyabibaranRoutes = [
    {
        path: "/karyabibaran/banbikaskaryabibaranlist",
        title: "BanbikasKaryabibaran",
        name: "banbikaskaryabibaran",
        auth: true,
        component: BanbikasKaryabibaran,
      },
      {
        path: "/karyabibaran/banbikaskaryabibaranadd/new",
        title: "BanbikasKaryabibaran",
        name: "banbikaskaryabibaran",
        auth: true,
        component: BanbikasKaryabibaran,
      },
      {
        path: "/karyabibaran/samajikkaryabibaranlist",
        title: "SamajikKaryabibaran",
        name: "samajikkaryabibaran",
        auth: true,
        component: SamajikKaryabibaran,
      },
      {
        path: "/karyabibaran/samajikkaryabibaranadd/new",
        title: "SamajikKaryabibaran",
        name: "samajikkaryabibaran",
        auth: true,
        component: SamajikKaryabibaran,
      },

      {
        path: "/karyabibaran/samajikkaryabibaranedit/:id",
        title: "SamajikKaryabibaran",
        name: "samajikkaryabibaran",
        auth: true,
        component: SamajikKaryabibaran,
      },

    {
        redirect: true,
        path: "/karyabibaran",
        to: "/karyabibaran/banbikaskaryabibaranlist",
        name: "Banbikaskaryabibaran",
        component: BanbikasKaryabibaran,
      },
];

export default karyabibaranRoutes;