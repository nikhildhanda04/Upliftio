import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2.3,
    title: "About",
    newTab: false,
    path: "/docs",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 31,
        title: "UI UX Design",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Web Development",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Mobile App Development",
        newTab: false,
        path: "/auth/signup",
      },

      {
        id: 35.1,
        title: "Digital Marketing",
        newTab: false,
        path: "/support",
      },
      {
        id: 35.1,
        title: "CRM",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "SEO",
        newTab: false,
        path: "/error",
      },
      {
        id: 36,
        title: "Graphic Design",
        newTab: false,
        path: "/error",
      },      {
        id: 36,
        title: "IT Consultancy",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 2.3,
    title: "Projects",
    newTab: false,
    path: "/docs",
  },


  
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
