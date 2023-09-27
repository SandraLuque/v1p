import styles from "./buttons.module.scss";
export const Button = ({ type, children, ...attributes }) => {
  if (type === "link") {
    return (
      <a className={styles.link} {...attributes}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.btn} {...attributes}>
      {children}
    </button>
  );
};
