import { useContext } from "react";
import { Titles } from "src/components/titles/Titles";
import { GlovalContext } from "src/provider/provider";
import { classNames } from "src/utils/classNames";
import styles from "./About.module.scss";
import { Experience } from "./Experience/Experience";
export const About = () => {
	const { about } = useContext(GlovalContext);
	const { experience, expertises } = about;
	return (
		<section className="l-section unfilled" name="about">
			<Titles variant={"h2"} st="ta-c">
				<h2>About</h2>
			</Titles>
			<div className="span-lg-3 d-g gap-1 ta-c pl-2 pr-2">
				<p>
					After studying computer science for three years, I decided to dedicate
					myself to front-end development, then I studied web design courses.
					This gave me the necessary skills to develop applications and web
					pages with a great team.
				</p>
				<p>
					I have designed websites and mobile applications for different clients
					ranging from education, health and technology.
				</p>
				<p>
					When I'm not working, you can find me playing soccer, at the movies or
					just getting lost on the internet.
				</p>
			</div>
			<div className="section-wraper">
				<div className="section-card bdr-sm">
					<Titles variant={"h3"} st="d-g gap-2">
						<h3 className="mb-5">Expertises</h3>
					</Titles>
					<div className="dgrid full cols-lg-3 row-gap ">
						{expertises.map((item) => (
							<article
								className={classNames("bdr-sm", styles.card)}
								key={item.id}
							>
								<div className={styles.img}>
									<img src={item.img} alt={item.title} loading="lazy" />
								</div>
								<div className="d-g gap-1">
									<Titles variant={"h4"}>
										<h4>{item.title}</h4>
									</Titles>
									<p className="fn-small txt-grey">{item.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
				<div className="dgrid full section-card bdr-sm">
					<Experience experience={experience} />
				</div>
			</div>
		</section>
	);
};
