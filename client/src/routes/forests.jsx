import Banbibaran from "../views/Forests/Banbibaran";

const forestRoutes = [
  {
    path: "/forests/samudayikbanlist",
    title: "Samudayikban",
    name: "samudayikban",
    component: Banbibaran,
  },
  {
    path: "/forests/dharmikbanlist",
    title: "Dharmikban",
    name: "dharmikban",
    component: Banbibaran,
  },
  {
    path: "/forests/kabuliyatibanlist",
    title: "Kabuliyatiban",
    name: "kabuliyatiban",
    component: Banbibaran,
  },
  {
    path: "/forests/nijibanlist",
    title: "Nijiban",
    name: "nijiban",
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
