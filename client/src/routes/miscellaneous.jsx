import Rojgarsrijana from "../views/Miscellaneous/Rojgarsrijana";
import UddhamBibaran from "../views/Miscellaneous/UddhamBibaran";

const miscellaneousRoutes = [
  {
    path: "/miscellaneous/rojgarsrijanalist",
    title: "Rojgarsrijana",
    name: "rojgarsrijana",
    auth: true,
    component: Rojgarsrijana,
  },

  {
    path: "/miscellaneous/rojgarsrijanaadd/new",
    title: "Rojgarsrijana",
    name: "rojgarsrijana",
    auth: true,
    component: Rojgarsrijana,
  },

  {
    path: "/miscellaneous/rojgarsrijanaedit/:id",
    title: "Rojgarsrijana",
    name: "rojgarsrijana",
    auth: true,
    component: Rojgarsrijana,
  },
  {
    path: "/miscellaneous/uddhamlist",
    title: "UddhamBibaran",
    name: "UddhamBibaran",
    auth: true,
    component: UddhamBibaran,
  },

  {
    path: "/miscellaneous/uddhambibaranadd/new",
    title: "UdhhamBibaran",
    name: "UdhhamBibaran",
    auth: true,
    component: UddhamBibaran,
  },

  {
    path: "/miscellaneous/uddhambibaranedit/:id",
    title: "UddhamBibaran",
    name: "UddhamBibaran",
    auth: true,
    component: UddhamBibaran,
  },

  {
    redirect: true,
    path: "/miscellaneous",
    to: "/miscellaneous/rojgarsrijanalist",
    name: "rojgarsrijana",
    component: Rojgarsrijana,
  },
];

export default miscellaneousRoutes;
