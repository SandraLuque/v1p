import { useContext, useState } from "react";
import { GlovalContext } from "../../../provider/provider";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { classNames } from "src/utils/classNames";
import { Icons } from "src/components/icons/Icons";
import { Logo } from "src/components/logo/Logo";
export const Header = ({ page }) => {
  const { header } = useContext(GlovalContext);
  const { menu } = header;

  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => setOpenNav(!openNav);

  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.navbar)}>
        <div className={styles.logo}>
          <span>SAN</span>
          <i className="pl-1 pr-1 ">
            <Logo size={25} />
          </i>
          <span>RA</span>
        </div>
        <div className={styles.right}>
          <nav className={classNames(styles.nav, openNav && styles.open)}>
            <ul className={styles.links}>
              {menu.map(({ id, router, name, link, pages }) => {
                return (
                  <li
                    key={id}
                    className={classNames(
                      pages.includes(page) ? styles.show : styles.item
                    )}
                  >
                    {router ? (
                      <NavLink
                        to={link}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? styles.active : ""
                        }
                      >
                        {name}
                      </NavLink>
                    ) : (
                      <Link
                        to={link}
                        smooth={true}
                        duration={500}
                        className={styles.link}
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                );
              })}
              {page === "projectDetail" && (
                <label className={classNames(styles.active, styles.link)}>
                  Project Details
                </label>
              )}
            </ul>
          </nav>
          <button className={styles.btn} onClick={handleClick}>
            <Icons icon={openNav ? "close" : "bars"} size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};
