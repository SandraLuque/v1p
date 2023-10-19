import { About } from "src/components/sections/about/About";
import { Contact } from "src/components/sections/contact/Contact";
import { Projects } from "src/components/sections/projects/Projects";
import { Hero } from "../components/sections/Hero/Hero";

export const Home = () => {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</main>
	);
};
