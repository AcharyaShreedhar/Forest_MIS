import Rojgarsrijana from "../views/Miscellaneous/Rojgarsrijana";

const miscellaneousRoutes = [
    {
        path: "/miscellaneous/rojgarsrijanalist",
        title: "Rojgarsrijana",
        name: "rojgarsrijana",
        auth: true,
        component: Rojgarsrijana,
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

