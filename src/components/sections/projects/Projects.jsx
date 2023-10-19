import { useContext, useState } from "react";
import { Icons } from "src/components/icons/Icons";
import { Titles } from "src/components/titles/Titles";
import { GlovalContext } from "src/provider/provider";
import { classNames } from "src/utils/classNames";
import styles from "./Projects.module.scss";
export const Projects = () => {
	const { projects } = useContext(GlovalContext);
	const [hoveredCart, setHoveredCart] = useState(-1);

	const showCartHandler = (i) => {
		setHoveredCart(i);
		console.log(i);
	};

	const hideCartHandler = () => {
		setHoveredCart(-1);
	};

	return (
		<section className="l-section" name="projects">
			<Titles variant={"h2"} st="ta-c">
				<h2>My Projects</h2>
			</Titles>
			<div className="d-g gap-1 ta-c">
				<p className="fn-bigger">
					Discover how our skills can contribute to your success.
				</p>
				<p>
					Some personal projects I've developed and designed for both enjoyment
					and educational purposes.
				</p>
			</div>
			<div className="section-wraper">
				{projects.map((item, i) => (
					<div
						className="dgrid full cols-lg-2 dgap-6 row-gap section-card bdr-sm ov-h"
						key={item.id}
					>
						<div
							className={styles.imGroup}
							onMouseLeave={hideCartHandler}
							onMouseEnter={() => showCartHandler(i)}
						>
							<div className="pos-r main-full">
								<div className={styles.wraperCrad}>
									<ul
										className={classNames(
											styles.linkCard,
											styles[`crad${item.order}`],
											hoveredCart === i ? styles[`pulse${item.order}`] : "",
										)}
									>
										{item.visit.map((item) => (
											<li key={item.text}>
												<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													className="txt-grey"
												>
													<Icons icon={item.icon} styles="filltrans" />
												</a>
											</li>
										))}
									</ul>
									<div
										className={classNames(
											styles.webCard,
											styles[`crad${item.order}`],
										)}
									>
										<div
											className={classNames(
												styles.innerImg,
												hoveredCart === i ? styles[`animate${i}`] : "",
											)}
										>
											<img src={item.img} alt={item.title} loading="lazy" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.wrapper}>
							<Titles variant={"h3"}>
								<h3>{item.title}</h3>
							</Titles>
							<div>
								<div className={classNames("pt-3 pb-3", styles.item)}>
									<p>
										timeframe: <span className="txt-grey400">{item.time}</span>
									</p>
								</div>
								<div className={classNames("pt-3 pb-3", styles.item)}>
									<p>
										functions:
										<span className="txt-grey400">{item.functions}</span>
									</p>
								</div>
								<div className={classNames("pt-3 pb-3", styles.item)}>
									<p>
										tech: <span className="txt-grey400">{item.tech}</span>
									</p>
								</div>
								<div
									className={classNames("pt-3 pb-3", styles.item, styles.visit)}
								>
									<p>visit:</p>
									<ul className="crossCenter gap-1">
										{item.visit.map((item) => (
											<li key={item.text}>
												<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{item.text}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div className={classNames("pt-3 pb-3 txt-grey400")}>
									<p>{item.description}</p>
								</div>
							</div>
							<h3 className={classNames("pt-3 pb-3", styles.year)}>
								{item.year}
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
