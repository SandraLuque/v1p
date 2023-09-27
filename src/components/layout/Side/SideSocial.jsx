import { Icons } from "src/components/icons/Icons";
import styles from "./Side.module.scss";
export const SideSocial = () => {
  return (
    <div className={styles.side}>
      <ul className={styles.list}>
        <li>
          <a
            href="https://www.linkedin.com/in/sandra-veronica-chambi-luque/"
            className={styles.link}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Icons icon="linkedin" size={25} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SandraLuque"
            className={styles.link}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Icons icon="github" size={25} />
          </a>
        </li>
      </ul>
    </div>
  );
};
