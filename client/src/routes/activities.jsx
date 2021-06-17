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
    redirect: true,
    path: "/activities",
    to: "/activities/nurserylist",
    name: "nursery",
    component: Nursery,
  },

];

export default activitiesRoutes;
