import { createContext } from "react";
import IMAGES from "src/images/images";
import { v4 as uuidv4 } from "uuid";

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
	projects: {
		apps: [
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
				image: IMAGES.app,
			},
			{
				id: 2,
				name: "tienda",
				title: "La tienda de Characato",
				status: "Featured Project",
				description:
					"A project of Akar-Suite in conjunction with the Municipality of Arequipa to help the economic activation plan, available in Play Store, APP to facilitate the sale of products of small traders. In this project, I was involved in the planning, UX, UI, design, and part of the implementation.",
				tech: [
					"Angular",
					"Postgresql",
					"SCSS",
					"Adobe XD",
					"Adobe Illustrator",
				],
				links: [
					{
						href: "plahttps://play.google.com/store/apps/details?id=pe.akar.comprasy-store",
						icon: "play-store",
						text: "Google Play",
					},
				],
				image: IMAGES.appTienda,
			},
			{
				id: 3,
				name: "taxi",
				title: "AKAR Taxi AQP",
				status: "Featured Project",
				description:
					"An Akar-Suite project available in Play Store, App to request a cab service using a mobile device. In this project I was involved in planning, UX, UI, design and part of the implementation.",
				tech: [
					"Angular",
					"Postgresql",
					"SCSS",
					"Adobe XD",
					"Adobe Illustrator",
				],
				links: [
					{
						href: "https://play.google.com/store/apps/details?id=pe.akar.etaxitest",
						icon: "play-store",
						text: "Google Play",
					},
				],
				image: IMAGES.appTaxi,
			},
		],
		files: [
			{
				id: "1",
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
				linkPage: "https://puridiom.pe/",
				image: IMAGES.puridiom,
				imageBack: IMAGES.puridiomBack,
				imageDetails: IMAGES.puridiomDetails,
				steps: [
					{
						id: uuidv4(),
						stepNumber: 1,
						stepImage: IMAGES.puridiomStep1,
					},
					{
						id: uuidv4(),
						stepNumber: 2,
						stepImage: IMAGES.puridiomStep2,
					},
					{
						id: uuidv4(),
						stepNumber: 3,
						stepImage: IMAGES.puridiomStep3,
					},
					{
						id: uuidv4(),
						stepNumber: 4,
						stepImage: IMAGES.puridiomStep4,
					},
					{
						id: uuidv4(),
						stepNumber: 5,
						stepImage: IMAGES.puridiomStep5,
					},
					{
						id: uuidv4(),
						stepNumber: 6,
						stepImage: IMAGES.puridiomStep6,
					},
					{
						id: uuidv4(),
						stepNumber: 7,
						stepImage: IMAGES.puridiomStep7,
					},
					{
						id: uuidv4(),
						stepNumber: 8,
						stepImage: IMAGES.puridiomStep8,
					},
					{
						id: uuidv4(),
						stepNumber: 9,
						stepImage: IMAGES.puridiomStep9,
					},
					{
						id: uuidv4(),
						stepNumber: 10,
						stepImage: IMAGES.puridiomStep10,
					},
				],
			},
			{
				id: "3",
				name: "akar",
				title: "Akar",
				industries: "Education",
				work: "DISEÑO E IMPLEMENTACION DE  PAGINA WEB UI/UX",
				description:
					"An Akar Sac project, available in Play Store, allows you to issue invoices and bills with all the SUNAT requirements. In this project I was in charge of the UX, UI, design and part of the implementation.",
				result:
					"Se buscó captar el carácter tecnológico a través de la tipografía asociada al desarrollo. En cuanto a los colores, opte por una combinación elegante y atrevida con tonos claros y futuristas. Mientras que los colores primarios - Azul vívido-Azul ligero  transmiten una sensación de confianza, compromiso y elegancia. Como resultado, el diseño combina a la perfección elementos tecnológicos.",
				tech: ["JS", "SCSS", "Adobe XD", "Adobe Illustrator"],
				services: ["Branding", "UX/UI Design", "Desarrollo web"],
				linkPage: "https://puridiom.pe/",
				image: IMAGES.akar,
				imageBack: IMAGES.akarBack,
				imageDetails: IMAGES.akarDetails,
				steps: [
					{
						id: uuidv4(),
						stepNumber: 1,
						stepImage: IMAGES.akarStep1,
					},
					{
						id: uuidv4(),
						stepNumber: 2,
						stepImage: IMAGES.akarStep2,
					},
					{
						id: uuidv4(),
						stepNumber: 3,
						stepImage: IMAGES.akarStep3,
					},
					{
						id: uuidv4(),
						stepNumber: 4,
						stepImage: IMAGES.akarStep4,
					},
					{
						id: uuidv4(),
						stepNumber: 5,
						stepImage: IMAGES.akarStep5,
					},
				],
			},
			{
				id: "2",
				name: "yaukyu",
				title: "Yaukyu",
				industries: "Education",
				work: "DISEÑO E IMPLEMENTACION DE  PAGINA WEB UI/UX",
				description:
					"An Akar Sac project, available in Play Store, allows you to issue invoices and bills with all the SUNAT requirements. In this project I was in charge of the UX, UI, design and part of the implementation.",
				result:
					"Se buscó captar el carácter tecnológico a través de la tipografía asociada al desarrollo. En cuanto a los colores, opte por una combinación elegante y atrevida con tonos claros y futuristas. Mientras que los colores primarios - Azul vívido-Azul ligero  transmiten una sensación de confianza, compromiso y elegancia. Como resultado, el diseño combina a la perfección elementos tecnológicos.",
				tech: ["JS", "SCSS", "Adobe XD", "Adobe Illustrator"],
				services: ["Branding", "UX/UI Design", "Desarrollo web"],
				linkPage: "https://puridiom.pe/",
				image: IMAGES.yaykuy,
				imageBack: IMAGES.yaykuyBack,
				imageDetails: IMAGES.yaykuyDetails,
				steps: [
					{
						id: uuidv4(),
						stepNumber: 1,
						stepImage: IMAGES.yaykuyStep1,
					},
					{
						id: uuidv4(),
						stepNumber: 2,
						stepImage: IMAGES.yaykuyStep2,
					},
					{
						id: uuidv4(),
						stepNumber: 3,
						stepImage: IMAGES.yaykuyStep3,
					},
					{
						id: uuidv4(),
						stepNumber: 4,
						stepImage: IMAGES.yaykuyStep4,
					},
					{
						id: uuidv4(),
						stepNumber: 5,
						stepImage: IMAGES.yaykuyStep5,
					},
					{
						id: uuidv4(),
						stepNumber: 5,
						stepImage: IMAGES.yaykuyStep6,
					},
					{
						id: uuidv4(),
						stepNumber: 5,
						stepImage: IMAGES.yaykuyStep7,
					},
				],
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
