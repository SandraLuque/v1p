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
				link: "hero",
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
				id: 5,
				router: false,
				name: "Contact",
				link: "contact",
				pages: ["home"],
			},
		],
	},
	expertises: [
		{
			id: uuidv4(),
			title: "UI Design",
			description:
				"Design and user experience play a big role when I'm working on a project. I always try to find the right balance between looks, usability and performance.",
			icons: ["ai", "psd", "xd", "figma"],
			img: IMAGES.exptDesign,
		},

		{
			id: uuidv4(),
			title: "Front-End Development",
			description:
				"I specialize in front-end development and I'm currently most familiar with the React ecosystem. Whenever I encounter something new, I try to quickly wrap my head around it",
			icons: ["html", "js", "react"],
			img: IMAGES.exptDevelopment,
		},
		{
			id: uuidv4(),
			title: "Interactivity",
			description:
				"I love adding animation and interactivity to my work for an even more engaging experience.",
			icons: ["css", "sass", "gsap"],
			img: IMAGES.exptInteractivity,
		},
	],
	projects: [
		{
			id: 1,
			order: "01",
			title: "Facturación Electrónica",
			time: "1-2 years",
			functions: "Wireframing & Prototyping / UI Design",
			tech: "Angular / Postgresql",
			img: IMAGES.facturacion,
			visit: [
				{
					href: "https://play.google.com/store/apps/details?id=pe.akar.suite",
					icon: "google-play",
					text: "Google Play",
				},
				{
					href: "https://global.akar.pe/app/login",
					icon: "world-www",
					text: "view page",
				},
			],
			description:
				"An Akar Sac project, available in Play Store, allows you to issue invoices and bills with all the SUNAT requirements. In this project I was in charge of the UX, UI, design and part of the implementation.",
			year: "©2019",
		},
		{
			id: 2,
			order: "02",
			title: "Characato's store",
			time: "1-18 months",
			functions: "Wireframing & Prototyping / UI Design",
			tech: "Angular / Postgresql / SCSS",
			img: IMAGES.tienda,
			visit: [
				{
					href: "https://play.google.com/store/apps/details?id=pe.akar.comprasy-store",
					icon: "google-play",
					text: "Google Play",
				},
			],
			description:
				"A project of Akar-Suite in conjunction with the Municipality of Arequipa to help the economic activation plan, available in Play Store, APP to facilitate the sale of products of small traders. In this project, I was involved in the planning, UX, UI, design, and part of the implementation.",
			year: "©2020",
		},
		{
			id: 3,
			order: "03",
			title: "AKAR Taxi AQP",
			time: "1-15 months",
			functions: "Wireframing & Prototyping / UI Design",
			tech: "Angular / Postgresql / SCSS",
			img: IMAGES.taxi,
			visit: [
				{
					href: "https://play.google.com/store/apps/details?id=pe.akar.comprasy-store",
					icon: "google-play",
					text: "Google Play",
				},
			],
			description:
				"An Akar-Suite project available in Play Store, App to request a cab service using a mobile device.",
			year: "©2020",
		},
	],
	contact: {
		name: "© SANDRA LUQUE 2023",
		email: "chambiluquesandra@gmail.com",
		socials: [
			{
				id: 1,
				name: "LinkedIn",
				link: "https://www.linkedin.com/in/sandrachambiluque/",
				icon: "linkedin",
			},
			{
				id: 2,
				name: "Github",
				link: "https://github.com/SandraLuque",
				icon: "github",
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
