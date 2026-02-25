// src/components/Header/menuData.tsx

import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "RDS Kids",
    path: "/rds-Kids",
    newTab: false,
  },
  //{
  //  id: 3,
  //  title: "Servicios",
   // path: "/contact",
  //  newTab: false,
  //},
  {
    id: 5, 
    title: "Contacto",
    path: "/contact",
    newTab: false,
  },
  {
   id: 4, 
    title: "Inscripción Edad Feliz",
    path: "/formkids",
    newTab: false,
  },
  //{
  //  id: 6, 
  //  title: "Blog",
  //  path: "/blog",
  //  newTab: false,
//  },
   
];
export default menuData;
