import Samudayikban from "../views/Forests/Samudayikban";
import Dharmikban from "../views/Forests/Dharmikban";
import Kabuliyatiban from "../views/Forests/Kabuliyatiban";
import Nijiban from "../views/Forests/Nijiban";

const forestRoutes = [
  {
    path: "/forests/samudauikban",
    title: "Samudayikban",
    name: "samudayikban",
    component: Samudayikban,
  },
  {
    path: "/forests/dharmikban",
    title: "Dharmikban",
    name: "dharmikban",
    component: Dharmikban,
  },
  {
    path: "/forests/kabuliyatiban",
    title: "Kabuliyatiban",
    name: "kabuliyatiban",
    component: Kabuliyatiban,
  },
  {
    path: "/forests/nijiban",
    title: "Nijiban",
    name: "nijiban",
    component: Nijiban,
  },
  {
    redirect: true,
    path: "/forests",
    to: "/forests/samudayikban",
    name: "samudayikban",
    component: Samudayikban,
  },
];

export default forestRoutes;
