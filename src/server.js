import { createServer, Model } from "miragejs";
import IMAGES from "./images/images";
export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      projects: Model,
    },

    seeds(server) {
      server.create("project", {
        id: 1,
        projectName: "Puridiom-pe",
        industries: "Technology",
        title: "DISEÑO E IMPLEMENTACION DE  PAGINA WEB UI/UX",
        description:
          "An Akar-Suite project available in Play Store, App to request a cab service using a mobile device. In this project I was involved in planning, UX, UI, design and part of the implementation.",
        tech: ["JS", "SCSS", "Adobe XD", "Adobe Illustrator"],
        link: ["https://puridiom.pe/"],
        icon: "link-external",
        image: IMAGES.puridiomPe,
        imageProject: IMAGES.purProject,
        imageBanner: IMAGES.purBanner,
        heroDetails: IMAGES.purHeroDetails,
        summary: "Identidad visual, Gráfica Publicitaria.",
        summaryTitle:
          "El desarrollo profesional está asociado a formar parte de un equipo sólido con alta probabilidad de éxito en la ejecución de proyecto",
        summaryDetails:
          "PURIDIOM-PE S.A.C es una empresa arequipeña centrada en soluciones de la más alta calidad a través de los servicios de consultoría, desarrollo y capacitación en Tecnología de la Información basados en el conocimiento, creatividad e innovación.",
        urlPage: "https://puridiom.pe/",
        services: ["Branding", "UX/UI Design", "Desarrollo web"],
        result:
          "Se buscó captar el carácter tecnológico a través de la tipografía asociada al desarrollo. En cuanto a los colores, opte por una combinación elegante y atrevida con tonos claros y futuristas. Mientras que los colores primarios - Azul vívido-Azul ligero  transmiten una sensación de confianza, compromiso y elegancia. Como resultado, el diseño combina a la perfección elementos tecnológicos.",
        steps: [
          {
            stepNumber: 1,
            stepImage: IMAGES.purWeb,
          },
          {
            stepNumber: 2,
            stepImage: IMAGES.purMovile,
          },
          {
            stepNumber: 3,
            stepImage: IMAGES.purWebMovile,
          },
          {
            stepNumber: 4,
            stepImage: IMAGES.purProces,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.purVariant,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.purBranding,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.purTypography,
          },
        ],
      });
      server.create("project", {
        id: 2,
        projectName: "Yaukyu",
        industries: "Education",
        title: "DISEÑO E IMPLEMENTACION DE  PAGINA WEB UI/UX",
        description:
          "An Akar-Suite project available in Play Store, App to request a cab service using a mobile device. In this project I was involved in planning, UX, UI, design and part of the implementation.",
        tech: ["JS", "SCSS", "Adobe XD", "Adobe Illustrator"],
        link: ["https://puridiom.pe/"],
        icon: "link-external",
        image: IMAGES.yaykuy,
        imageProject: IMAGES.yauProject,
        imageBanner: IMAGES.yauBanner,
        heroDetails: IMAGES.yauHeroDetails,
        summary: "Identidad visual, Gráfica Publicitaria.",
        summaryTitle:
          "El desarrollo profesional está asociado a formar parte de un equipo sólido con alta probabilidad de éxito en la ejecución de proyecto",
        summaryDetails:
          "PURIDIOM-PE S.A.C es una empresa arequipeña centrada en soluciones de la más alta calidad a través de los servicios de consultoría, desarrollo y capacitación en Tecnología de la Información basados en el conocimiento, creatividad e innovación.",
        urlPage: "https://puridiom.pe/",
        services: ["Branding", "UX/UI Design", "Desarrollo web"],
        result:
          "Se buscó captar el carácter tecnológico a través de la tipografía asociada al desarrollo. En cuanto a los colores, opte por una combinación elegante y atrevida con tonos claros y futuristas. Mientras que los colores primarios - Azul vívido-Azul ligero  transmiten una sensación de confianza, compromiso y elegancia. Como resultado, el diseño combina a la perfección elementos tecnológicos.",
        steps: [
          {
            stepNumber: 1,
            stepImage: IMAGES.yauWeb,
          },
          {
            stepNumber: 2,
            stepImage: IMAGES.purMovile,
          },
          {
            stepNumber: 3,
            stepImage: IMAGES.yauWebMovile,
          },
          {
            stepNumber: 4,
            stepImage: IMAGES.yauProces,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.yauVariant,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.yauBranding,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.yauTypography,
          },
        ],
      });
      server.create("project", {
        id: 3,
        projectName: "Protfolio",
        industries: "Education",
        title: "DISEÑO E IMPLEMENTACION DE  PORTFOLIO WEB UI/UX",
        description:
          "An Akar-Suite project available in Play Store, App to request a cab service using a mobile device. In this project I was involved in planning, UX, UI, design and part of the implementation.",
        tech: ["JS", "SCSS", "Adobe XD", "Adobe Illustrator"],
        link: ["https://puridiom.pe/"],
        icon: "link-external",
        image: IMAGES.portfolio,
        imageProject: IMAGES.yauProject,
        imageBanner: IMAGES.yauBanner,
        heroDetails: IMAGES.yauHeroDetails,
        summary: "Identidad visual, Gráfica Publicitaria.",
        summaryTitle:
          "El desarrollo profesional está asociado a formar parte de un equipo sólido con alta probabilidad de éxito en la ejecución de proyecto",
        summaryDetails:
          "PURIDIOM-PE S.A.C es una empresa arequipeña centrada en soluciones de la más alta calidad a través de los servicios de consultoría, desarrollo y capacitación en Tecnología de la Información basados en el conocimiento, creatividad e innovación.",
        urlPage: "https://puridiom.pe/",
        services: ["Branding", "UX/UI Design", "Desarrollo web"],
        result:
          "Se buscó captar el carácter tecnológico a través de la tipografía asociada al desarrollo. En cuanto a los colores, opte por una combinación elegante y atrevida con tonos claros y futuristas. Mientras que los colores primarios - Azul vívido-Azul ligero  transmiten una sensación de confianza, compromiso y elegancia. Como resultado, el diseño combina a la perfección elementos tecnológicos.",
        steps: [
          {
            stepNumber: 1,
            stepImage: IMAGES.yauWeb,
          },
          {
            stepNumber: 2,
            stepImage: IMAGES.purMovile,
          },
          {
            stepNumber: 3,
            stepImage: IMAGES.yauWebMovile,
          },
          {
            stepNumber: 4,
            stepImage: IMAGES.yauProces,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.yauVariant,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.yauBranding,
          },
          {
            stepNumber: 5,
            stepImage: IMAGES.yauTypography,
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/projects", (schema) => {
        return schema.projects.all();
      });
      this.get("/projects/:id", (schema, request) => {
        const id = request.params.id;
        return schema.projects.find(id);
      });
    },
  });

  return server;
}
