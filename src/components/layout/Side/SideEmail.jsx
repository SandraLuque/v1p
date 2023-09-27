import { classNames } from "src/utils/classNames";
import styles from "./Side.module.scss";

export const SideEmail = () => {
  return (
    <div className={classNames(styles.side, styles.right)}>
      <div className={styles.list}>
        <a
          href="mailto:chambiluquesandra@gmail.com"
          className={classNames(styles.link, styles.email)}
        >
          chambiluquesandra@gmail.com
        </a>
      </div>
    </div>
  );
};
