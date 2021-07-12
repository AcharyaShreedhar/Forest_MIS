import JaladharSamrakshyan from "../views/Samrakshyan/Jaladharsamrakshyan";
import NadikinarSamrakshyan from "../views/Samrakshyan/Nadikinarsamrakshyan";
import PanimuhanSamrakshyan from "../views/Samrakshyan/Panimuhansamrakshyan";
import PokhariSamrakshyan from "../views/Samrakshyan/Pokharisamrakshyan";


const samrakshyanRoutes = [
    {
      path: "/samrakshyan/jaladharsamrakshyanlist",
      title: "JaladharSamrakshyan",
      name: "jaladharsamrakshyan",
      auth: true,
      component: JaladharSamrakshyan,
    },
    {
        path: "/samrakshyan/nadikinarsamrakshyanlist",
        title: "NadikinarSamrakshyan",
        name: "nadikinarsamrakshyan",
        auth: true,
        component: NadikinarSamrakshyan,
    },
    {
        path: "/samrakshyan/panimuhansamrakshyanlist",
        title: "PanimuhanSamrakshyan",
        name: "panimuhansamrakshyan",
        auth: true,
        component: PanimuhanSamrakshyan,
    },
    {
        path: "/samrakshyan/pokharisamrakshyanlist",
        title: "PokhariSamrakshyan",
        name: "pokharisamrakshyan",
        auth: true,
        component: PokhariSamrakshyan,
    },
  
    
    {
      redirect: true,
      path: "/samrakshyan",
      to: "/samrakshyan/jaladharsamrakshyanlist",
      name: "jaladharsamrakshyan",
      component: JaladharSamrakshyan,
    },
   
  ];
  
  export default samrakshyanRoutes;
  