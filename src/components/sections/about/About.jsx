import styles from "./About.module.scss";
import { classNames } from "src/utils/classNames";
import { Avatar } from "../partials/Avatar";
import { Title } from "src/components/layout/title/Title";
export const About = () => {
  return (
    <section name="about" className="sect-container">
      <div className={classNames("grid md-bc-2 gap-row-3", styles.wraper)}>
        <div className={styles.avatar}>
          <Avatar type={"big"} />
        </div>
        <div>
          <Title title="About me" type="subtitle" />
          <div className={styles.text}>
            <h3>Need a creative product? I can help you!</h3>
            <p>
              Como Desarrollador Front-End Junior, he tenido el placer de
              trabajar en equipo en las diferentes etapas del desarrollo
              front-end como la planificación, diseño, desarrollo y soporte.
            </p>
            <p>
              Poseo habilidades en HTML, CSS, JavaScript, React,MIU, Tailwind y
              SCSS. Sobresalgo en el diseño y mantenimiento de sitios web
              elaborando interfaces dinámicas y atractivas a través de la
              escritura de código limpio y optimizado y la utilización de
              herramientas y técnicas de desarrollo de vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
