import KarmachariBibaran from "../views/Karmachari/Karmacharibibaran";
import KarmachariDarbandi from "../views/Karmachari/Karmacharidarbandi";

const karmachariRoutes = [
    {
      path: "/karmachari/karmacharibibaranlist",
      title: "KarmachariBibaran",
      name: "karmacharibibaran",
      auth: true,
      component: KarmachariBibaran,
    },
  
    {
      path: "/karmachari/karmacharibibaranadd/new",
      title: "KarmachariBibaran",
      name: "karmacharibibaran",
      auth: true,
      component: KarmachariBibaran,
    },
  
    {
      path: "/karmachari/karmacharibibaranedit/:id",
      title: "KarmachariBibaran",
      name: "karmacharibibaran",
      auth: true,
      component: KarmachariBibaran,
    },
  
  
    {
      path: "/karmachari/karmacharidarbandilist",
      title:"KarmachariDarbandi",
      name: "karmacharidarbandi",
      auth: true,
      component: KarmachariDarbandi,
    },
  
   
    {
      path: "/karmachari/karmacharidarbandiadd/new",
      title: "KarmachariDarbandi",
      name: "karmacharidarbandi",
      auth: true,
      component: KarmachariDarbandi,
    },
  
    {
      path: "/karmachari/karmacharidarbandiedit/:id",
      title: "KarmachariDarbandi",
      name: "karmacharidarbandi",
      auth: true,
      component: KarmachariDarbandi,
    },
    
    {
      redirect: true,
      path: "/karmachari",
      to: "/karmachari/karmacharibibaranlist",
      name: "karmacharibibaran",
      component: KarmachariBibaran,
    },
   
  ];
  
  export default karmachariRoutes;
  