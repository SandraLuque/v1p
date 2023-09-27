import { createContext } from "react";
import IMAGES from "src/images/images";

const dataGlobal = {
  header: {
    logo: IMAGES.logo,
    menu: [
      {
        id: 1,
        router: true,
        name: "Home",
        link: "/",
        pages: ["home", "projectDetail", "education"],
      },
      {
        id: 2,
        router: false,
        name: "About",
        link: "about",
        pages: ["home"],
      },
      {
        id: 3,
        router: false,
        name: "Projects",
        link: "projects",
        pages: ["home"],
      },
      {
        id: 4,
        router: true,
        name: "Education",
        link: "/education",
        pages: ["home", "education", "projectDetail"],
      },

      {
        id: 5,
        router: false,
        name: "Contact",
        link: "contact",
        pages: ["home"],
      },
    ],
  },
};

export const GlovalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlovalContext.Provider value={dataGlobal}>
      {children}
    </GlovalContext.Provider>
  );
};
