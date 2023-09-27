import styles from "./Hero.module.scss";
import { classNames } from "src/utils/classNames";
import { Avatar } from "../partials/Avatar";
import { Icons } from "src/components/icons/Icons";

export const Hero = () => {
  // const stylePhoto = {
  //   backgroundImage: `url(${IMAGES.photo})`,
  //   backgroundPosition: "50%",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   height: "25rem",
  //   width: "20rem",
  // };
  return (
    <div className={classNames("sect-container", styles.heroWraper)}>
      <div className={classNames(styles.wraper)}>
        <p>Hi, my name is</p>
        <h1 className={classNames(styles.title, styles.textColor)}>
          Sandra Luque.
        </h1>
        <h2 className={styles.subTitle}>
          I design and build accessible products for the web.
        </h2>

        <div className={styles.info}>
          <div className={styles.text}>
            <p>
              I&apos;m a passionate Front-end. welcome to my portfolio, I&apos;m
              excited to share my journey with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
