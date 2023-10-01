import { Title } from "src/components/layout/title/Title";
import { classNames } from "src/utils/classNames";
import styles from "./ProjectDetailItem.module.scss";
export const ProjectDetailItem = ({ data }) => {
	const services = data?.services;
	const steps = data?.steps;
	return (
		<div className={styles.mainWraper}>
			<section
				className={styles.banner}
				style={{ "--img": `url(${data.imageBack})` }}
			>
				<div
					className={classNames("sect-container grid md-bc-2", styles.wraper)}
				>
					<h1 className={styles.title}>{data?.work}</h1>

					<div>
						<img src={data.imageDetails} alt="" className={styles.logo} />
					</div>
				</div>
			</section>
			<section className={classNames("sect-container", styles.steps)}>
				<Title title="Sobre el proyecto" type="subtitle" />
				<div className={styles.texts}>
					<a href={data?.urlPage} target="_blank" rel="noreferrer">
						Ir al sitio web
					</a>
				</div>
				<Title title="Servicios que brindamos" type="subtitle" />
				<ul>
					{services.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<Title title="El resultado" type="subtitle" />
				<div className={styles.wraperSteps}>
					{steps.map((step, index) => (
						<figure key={index} className={styles.figure}>
							<div className={styles.wraperImg}>
								<img src={step.stepImage} alt="" loading="lazy" />
							</div>
						</figure>
					))}
				</div>
			</section>
		</div>
	);
};
