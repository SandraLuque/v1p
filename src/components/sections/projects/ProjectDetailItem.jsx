import { classNames } from "src/utils/classNames";
import styles from "./ProjectDetailItem.module.scss";
export const ProjectDetailItem = ({ data }) => {
  const services = data?.services;
  const steps = data?.steps;
  return (
    <div className={styles.mainWraper}>
      <section
        className={styles.banner}
        style={{ "--img": `url(${data.imageBanner})` }}
      >
        <div
          className={classNames("sect-container grid md-bc-2", styles.wraper)}
        >
          <h1 className={styles.title}>{data?.title}</h1>

          <div>
            <img src={data.heroDetails} alt="" className={styles.logo} />
          </div>
        </div>
      </section>
      <section className={classNames("sect-container", styles.steps)}>
        <h2>Sobre el proyecto</h2>
        <div className={styles.texts}>
          <h3>{data.summary}</h3>
          <h4>{`" ${data.summaryTitle} "`}</h4>
          <h3>Descripción del proyecto</h3>
          <p>{data.summaryDetails}</p>
          <a href={data?.urlPage} target="_blank" rel="noreferrer">
            Ir al sitio web
          </a>
        </div>
        <div>
          <h3>Servicios que brindamos</h3>
          <ul>
            {services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>El resultado</h3>
          <p>{data.result}</p>
          <div className={styles.wraperSteps}>
            {steps.map((step, index) => (
              <figure key={index} className={styles.figure}>
                <div className={styles.wraperImg}>
                  <img src={step.stepImage} alt="" loading="lazy" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
