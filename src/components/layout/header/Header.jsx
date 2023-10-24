import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Icons } from "src/components/icons/Icons";
import { GlovalContext } from "../../../provider/provider";
import styles from "./Header.module.scss";
// import { Icons } from "src/components/icons/Icons";
import { Logo } from "src/components/logo/Logo";
import { classNames } from "src/utils/classNames";
export const Header = () => {
	const { header } = useContext(GlovalContext);
	const { menu } = header;

	const [openNav, setOpenNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const handleClick = () => setOpenNav(!openNav);
	const resetClick = () => (scrolled ? setOpenNav(!openNav) : "");

	useEffect(() => {
		const listenToScroll = () => {
			if (window.scrollY > 73) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	return (
		<header
			className={classNames(
				"pl-3 pr-3",
				styles.header,
				scrolled ? styles.scrl : styles.top,
			)}
		>
			<div className={classNames("mx-auto crossCenter", styles.navbar)}>
				<div className={styles.logo}>
					<i className="pl-1 pr-1">
						<Logo size={25} />
					</i>
				</div>
				<div className={classNames("crossCenter bdr-sm", styles.navLinks)}>
					<nav className={classNames(styles.nav, openNav && styles.open)}>
						<ul className={styles.links}>
							{menu.map(({ id, name, link }) => {
								return (
									<li key={id} className={classNames(styles.item, styles.link)}>
										<Link
											onClick={() => resetClick()}
											to={link}
											smooth={true}
											duration={500}
											className={styles.linkr}
										>
											{name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
					<div
						className={classNames("pos-a", styles.btn)}
						type="button"
						onClick={handleClick}
						onKeyDown={handleClick}
					>
						<div className={classNames("pos-r trs", styles.hamburger)}>
							<Icons icon={"close"} size={30} styles={openNav ? "show" : ""} />
							<Icons icon={"open"} size={30} styles={openNav ? "" : "show"} />
						</div>
					</div>
					<a
						href="https://drive.google.com/file/d/1rClCQGHE4LVi5qaXd6aLNmg3QxRip9gG/view?usp=share_link"
						target="_blank"
						rel="noopener noreferrer"
						className={classNames("ml-3", styles.resume)}
					>
						Resume
					</a>
				</div>
			</div>
		</header>
	);
};
