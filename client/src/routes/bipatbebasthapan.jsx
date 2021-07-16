import BadiBebasthapan from "../views/Bipatbebasthapan/Badibebasthapan";
import PahiroBebasthapan from "../views/Bipatbebasthapan/Pahirobebasthapan";
import Bandadelo from "../views/Bipatbebasthapan/Bandadelo";


const bipatbebasthapanRoutes = [
    {
      path: "/bipatbebasthapan/badibebasthapanlist",
      title: "BadiBebasthapan",
      name: "badibebasthapan",
      auth: true,
      component: BadiBebasthapan,
    },
    {
      path: "/bipatbebasthapan/badibebasthapanadd/new",
      title: "BadiBebasthapan",
      name: "badibebasthapan",
      auth: true,
      component: BadiBebasthapan,
    },
    {
      path: "/bipatbebasthapan/badibebasthapanedit/:id",
      title: "BadiBebasthapan",
      name: "badibebasthapan",
      auth: true,
      component: BadiBebasthapan,
    },   
    {
        path: "/bipatbebasthapan/pahirobebasthapanlist",
        title: "PahiroBebasthapan",
        name: "pahirobebasthapan",
        auth: true,
        component: PahiroBebasthapan,
      }, 
      {
        path: "/bipatbebasthapan/pahirobebasthapanadd/new",
        title: "PahiroBebasthapan",
        name: "pahirobebasthapan",
        auth: true,
        component: PahiroBebasthapan,
      },
      {
        path: "/bipatbebasthapan/pahirobebasthapanedit/:id",
        title: "PahiroBebasthapan",
        name: "pahirobebasthapan",
        auth: true,
        component: PahiroBebasthapan,
      }, 
      {
        path: "/bipatbebasthapan/bandadelolist",
        title: "Bandadelo",
        name: "bandadelo",
        auth: true,
        component: Bandadelo,
      },
    
      {
        path: "/bipatbebasthapan/bandadeloadd/new",
        title: "Bandadelo",
        name: "Bandadelo",
        auth: true,
        component: Bandadelo,
      },
    
      {
        path: "/bipatbebasthapan/bandadeloedit/:id",
        title: "Bandadelo",
        name: "Bandadelo",
        auth: true,
        component: Bandadelo,
      },
    
    {
      redirect: true,
      path: "/bipatbebasthapan",
      to: "/bipatbebasthapan/badibebasthapanlist",
      name: "badibebasthapan",
      component: BadiBebasthapan,
    },
   
  ];
  
  export default bipatbebasthapanRoutes;
  