import { Header } from "src/components/layout/header/Header";
import { About } from "../components/sections/about/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero/Hero";
import { Projects } from "../components/sections/projects/Projects";

export const Home = ({ page }) => {
  return (
    <>
      <Header page={page} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};
