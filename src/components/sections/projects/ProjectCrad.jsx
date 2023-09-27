import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.scss";
import IMAGES from "src/images/images";

export const ProjectCrad = ({ data }) => {
  const stylesMask = {
    WebkitMaskImage: `url(${IMAGES.folder})`,
    WebkitMaskPosition: "0% 0%",
    WebkitMaskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
  };
  return (
    <article className={styles.card}>
      <Link
        to={`/projects/${data?.id}`}
        style={stylesMask}
        className={styles.linkImage}
      >
        <img src={data?.image} alt="project" className={styles.image} />
      </Link>
      <Link to={`/projects/${data?.id}`} className={styles.info}>
        <p className={styles.textAction}>view project</p>
        <div className={styles.topTitle}>
          <p>{data?.industries}</p>
          <h4 className={styles.title}>{data?.projectName}</h4>
        </div>
        <div className={styles.description}>{data?.description}</div>
        <footer>
          <ul className={styles.techList}>
            {data.tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </footer>
      </Link>
    </article>
  );
};
