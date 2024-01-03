import { Titles } from "src/components/titles/Titles";
import { ExperienceItem } from "../../partials/ExperienceItem";
import styles from "./Experience.module.scss";
export const Experience = ({ experience }) => {
	return (
		<div>
			<Titles variant={"h3"}>
				<h3 className="mb-5">Work Experience</h3>
			</Titles>
			<ol className={styles.experience}>
				{experience.map((experiencie) => (
					<li key={experiencie.id} className="mb-5 ms-4">
						<ExperienceItem experiencie={experiencie} clases={styles.rounded} />
					</li>
				))}
			</ol>
		</div>
	);
};
