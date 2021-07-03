import YearlyActivities from "../views/Activities/Yearlyactivities";
import Plantation from "../views/Activities/Plantation";
import Nursery from "../views/Activities/Nursery";
import Jadibuti from "../views/Activities/Jadibuti";

const activitiesRoutes = [
  {
    path: "/activities/yearlyactivitieslist",
    title: "Yearlyactivities",
    name: "yearlyactivities",
    auth: true,
    component: YearlyActivities,
  },
  {
    path: "/activities/nurserylist",
    title: "Nursery",
    name: "nursery",
    auth: true,
    component: Nursery,
  },

  {
    path: "/activities/biruwautpadanadd/new",
    title: "Nursery",
    name: "Nursery",
    auth: true,
    component: Nursery,
  },

  {
    path: "/activities/biruwautpadanedit/:id",
    title: "Nursery",
    name: "Nursery",
    auth: true,
    component: Nursery,
  },
  {
    path: "/activities/plantationlist",
    title: "Plantation",
    name: "plantation",
    auth: true,
    component: Plantation,
  },
  {
    path: "/activities/brixyaropanadd/new",
    title: "Plantation",
    name: "plantation",
    auth: true,
    component: Plantation,
  },
  {
    path: "/activities/brixyaropanedit/:id",
    title: "Plantation",
    name: "plantation",
    auth: true,
    component: Plantation,
  },
  {
    path: "/activities/yearlyactivitiesadd/new",
    title: "Yearlyactivities",
    name: "Yearlyactivities",
    auth: true,
    component: YearlyActivities,
  },

  {
    path: "/activities/yearlyactivitiesedit/:id",
    title: "Yearlyactivities",
    name: "Yearlyactivities",
    auth: true,
    component: YearlyActivities,
  },

  {
    path: "/activities/jadibutilist",
    title: "Jadibuti",
    name: "jadibuti",
    auth: true,
    component: Jadibuti,
  },

  {
    redirect: true,
    path: "/activities",
    to: "/activities/nurserylist",
    name: "nursery",
    component: Nursery,
  },
];

export default activitiesRoutes;
