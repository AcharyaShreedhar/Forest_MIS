import Banbibaran from "../views/Forests/Banbibaran";

const forestRoutes = [
  {
    path: "/forests/samudayikbanlist",
    title: "Samudayikban",
    name: "samudayikban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/samudayikbanadd/new",
    title: "Samudayikban",
    name: "samudayikban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/samudayikbanedit/:id",
    title: "Samudayikban",
    name: "samudayikban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/dharmikbanlist",
    title: "Dharmikban",
    name: "dharmikban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/dharmikbanadd/new",
    title: "Dharmikban",
    name: "dharmikban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/dharmikbanedit/:id",
    title: "Dharmikban",
    name: "dharmikban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/kabuliyatibanlist",
    title: "Kabuliyatiban",
    name: "kabuliyatiban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/kabuliyatibanadd/new",
    title: "Kabuliyatiban",
    name: "kabuliyatiban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/kabuliyatibanedit/:id",
    title: "Kabuliyatiban",
    name: "kabuliyatiban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/nijibanlist",
    title: "Nijiban",
    name: "nijiban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/nijibanadd/new",
    title: "Nijiban",
    name: "nijiban",
    auth: true,
    component: Banbibaran,
  },
  {
    path: "/forests/nijibanedit/:id",
    title: "Nijiban",
    name: "nijiban",
    auth: true,
    component: Banbibaran,
  },
  {
    redirect: true,
    path: "/forests",
    to: "/forests/samudayikbanlist",
    name: "samudayikban",

    component: Banbibaran,
  },
];

export default forestRoutes;
