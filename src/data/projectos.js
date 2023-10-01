import IMAGES from "src/images/images";
const Project = {
	featured: [
		{
			id: 1,
			name: "akar",
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
			image: IMAGES.akar,
		},
		{
			id: 2,
			name: "tienda",
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
			image: IMAGES.akarTienda,
		},
		{
			id: 3,
			name: "taxi",
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
			image: IMAGES.akarTaxi,
		},
	],
	others: [
		{
			id: 1,
			name: "puridiom",
			title: "Puridiom-pe",
			industries: "Technology",
			work: "DISEÑO E IMPLEMENTACION DE  PAGINA WEB UI/UX",
			description:
				"An Akar Sac project, available in Play Store, allows you to issue invoices and bills with all the SUNAT requirements. In this project I was in charge of the UX, UI, design and part of the implementation.",
			result:
				"Se buscó captar el carácter tecnológico a través de la tipografía asociada al desarrollo. En cuanto a los colores, opte por una combinación elegante y atrevida con tonos claros y futuristas. Mientras que los colores primarios - Azul vívido-Azul ligero  transmiten una sensación de confianza, compromiso y elegancia. Como resultado, el diseño combina a la perfección elementos tecnológicos.",
			tech: ["JS", "SCSS", "Adobe XD", "Adobe Illustrator"],
			services: ["Branding", "UX/UI Design", "Desarrollo web"],
			links: [
				{
					href: "https://puridiom.pe/",
					text: "view project",
				},
			],
			image: IMAGES.puridiom,
			imageBack: IMAGES.puridiomBack,
			imageDetails: IMAGES.puridiomDetails,
			steps: [
				{
					stepNumber: 1,
					stepImage: IMAGES.puridiomStep1,
				},
				{
					stepNumber: 2,
					stepImage: IMAGES.puridiomStep2,
				},
				{
					stepNumber: 3,
					stepImage: IMAGES.puridiomStep3,
				},
				{
					stepNumber: 4,
					stepImage: IMAGES.puridiomStep4,
				},
				{
					stepNumber: 5,
					stepImage: IMAGES.puridiomStep5,
				},
				{
					stepNumber: 5,
					stepImage: IMAGES.puridiomStep6,
				},
				{
					stepNumber: 5,
					stepImage: IMAGES.puridiomStep7,
				},
			],
		},
	],
};
export default Project;
