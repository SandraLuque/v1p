import IMAGES from "src/images/images";
const Project = {
  featured: [
    {
      id: 1,
      title: "Facturación Electrónica",
      status: "Featured Project",
      description:
        "An Akar Sac project, available in Play Store, allows you to issue invoices and bills with all the SUNAT requirements. In this project I was in charge of the UX, UI, design and part of the implementation.",
      tech: [
        "Java",
        "Angular",
        "Postgresql",
        "SCSS",
        "Adobe XD",
        "Adobe Illustrator",
      ],
      links: [
        {
          href: "https://play.google.com/store/apps/details?id=pe.akar.suite",
          icon: "play-store",
          text: "Google Play",
        },
        {
          href: "https://akar.pe/index.html",
          icon: "link-external",
          text: "view page",
        },
      ],
      image: IMAGES.facturacion,
    },
    {
      id: 2,
      title: "La tienda de Characato",
      status: "Featured Project",
      description:
        "A project of Akar-Suite in conjunction with the Municipality of Arequipa to help the economic activation plan, available in Play Store, APP to facilitate the sale of products of small traders. In this project, I was involved in the planning, UX, UI, design, and part of the implementation.",
      tech: ["Angular", "Postgresql", "SCSS", "Adobe XD", "Adobe Illustrator"],
      links: [
        {
          href: "plahttps://play.google.com/store/apps/details?id=pe.akar.comprasy-store",
          icon: "play-store",
          text: "Google Play",
        },
      ],
      image: IMAGES.tienda,
    },
    {
      id: 3,
      title: "AKAR Taxi AQP",
      status: "Featured Project",
      description:
        "An Akar-Suite project available in Play Store, App to request a cab service using a mobile device. In this project I was involved in planning, UX, UI, design and part of the implementation.",
      tech: ["Angular", "Postgresql", "SCSS", "Adobe XD", "Adobe Illustrator"],
      links: [
        {
          href: "https://play.google.com/store/apps/details?id=pe.akar.etaxitest",
          icon: "play-store",
          text: "Google Play",
        },
      ],
      image: IMAGES.taxi,
    },
  ],
};
export default Project;
