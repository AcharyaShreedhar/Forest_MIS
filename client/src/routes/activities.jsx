import YearlyActivities from "../views/Activities/Yearlyactivities";
import Plantation from "../views/Activities/Plantation";
import Nursery from "../views/Activities/Nursery";

const activitiesRoutes = [
  {
    path: "/activities/yearlyactivitieslist",
    title: "Yearlyactivities",
    name: "yearlyactivities",

    component: YearlyActivities,
  },
  {
    path: "/activities/nurserylist",
    title: "Nursery",
    name: "nursery",

    component: Nursery,
  },
  {
    path: "/activities/plantationlist",
    title: "Plantation",
    name: "plantation",

    component: Plantation,
  },
  {
    redirect: true,

    path: "/activities",
    to: "/activities/yearlyactivitieslist",
    name: "Yearlyactivities",
    component: YearlyActivities,
  },
];

export default activitiesRoutes;
