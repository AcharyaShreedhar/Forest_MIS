import AnnualReport from "../views/Report/AnnualReport";
import DateReport from "../views/Report/DateReport";

const reportRoutes = [
  {
    path: "/report/annualreport",
    title: "Annualreport",
    name: "annualreport",
    auth: true,
    component: AnnualReport,
  },
  {
    path: "/report/datereport",
    title: "datereport",
    name: "datereport",
    auth: true,
    component: DateReport,
  },
  {
    redirect: true,
    path: "/report",
    to: "/report/annualreport",
    name: "annualreport",
    component: AnnualReport,
  },
];

export default reportRoutes;
