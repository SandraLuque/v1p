import IMAGES from "src/images/images";
import styles from "./Avatar.module.scss";
import { classNames } from "src/utils/classNames";
import { TYPE_AVATAR } from "src/shared/types";
export const Avatar = ({ type }) => {
  const sizeWraper = TYPE_AVATAR[type] || "";

  return (
    <div className={classNames(styles.wraper, styles[sizeWraper])}>
      <div className={styles.circle}></div>
      <div className={styles.box}>
        <img src={IMAGES.avatar} alt="" />
      </div>
    </div>
  );
};
