import { useEffect, useState } from "react";

import styles from "./Projects.module.scss";
import { Title } from "src/components/layout/title/Title";
import Project from "../../../data/projectos";
import { Icons } from "src/components/icons/Icons";
import { Button } from "src/components/button/button";
// import { ProjectCrad } from "./ProjectCrad";

export const Projects = () => {
  // let [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("/api/projects")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProjects(json.projects);
  //     });
  // }, []);
  const projFeatures = Project.featured;

  return (
    <section name="projects" className="sect-container">
      <div className={styles.wraper}>
        <Title title="My Projects" type="subtitle" />
        <h3>See My Works Which Will Amaze You!</h3>
        <p>Descubra cómo nuestras habilidades pueden contribuir a su éxito.</p>
        <ul className={styles.projects}>
          {projFeatures.map((proj) => (
            <li className="grid md-bc-2 gap-row-3" key={proj.id}>
              <ul className={styles.content}>
                <div className={styles.topTitle}>
                  <p className={styles.overline}>{proj.status}</p>
                  <h4 className={styles.title}>{proj.title}</h4>
                </div>
                <div className={styles.description}>{proj.description}</div>
                <ul className={styles.techList}>
                  {proj.tech.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <ul className={styles.links}>
                  {proj.links.map((link, index) => (
                    <li key={index}>
                      <Button type="link" href={link.href} target="_black">
                        <i>
                          <Icons icon={link.icon} size={18} />
                        </i>
                        <span>{link.text}</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </ul>
              <div className={styles.image}>
                <div className={styles.pictureWraper}>
                  <picture>
                    <img src={proj.image} alt={proj.title} loading="lazy" />
                  </picture>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul className={styles.projects}>
          <li className="grid md-bc-2 lg-bc-3 gap-row-3">
            {projects.map((proj) => (
              <ProjectCrad key={proj.id} data={proj} />
            ))}
          </li>
        </ul> */}
      </div>
    </section>
  );
};
