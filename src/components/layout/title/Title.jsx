import styles from "./Title.module.scss";

export const Title = ({ title, type }) => {
  return (
    <div className={styles[type]}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
