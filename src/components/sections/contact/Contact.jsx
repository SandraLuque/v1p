import { useContext } from "react";
import { Titles } from "src/components/titles/Titles";
import { GlovalContext } from "src/provider/provider";
import { classNames } from "src/utils/classNames";
import { SocialPill } from "../partials/SocialPill";
import styles from "./Contact.module.scss";
export const Contact = () => {
	const { contact } = useContext(GlovalContext);
	const currentYear = new Date().getFullYear().toString();
	return (
		<section className="l-section" name="contact">
			<Titles variant={"h2"} st="ta-c">
				<h2>Contact</h2>
			</Titles>
			<div className="d-g  ta-c fn-big">
				<p>
					I'm actively looking for a full-time position as a front-end
					developer.
				</p>
				<p>Feel free to say hi or drop a line, I'd love to hear from you!</p>
			</div>
			<div className={classNames("crossCenter gap-1", styles.contact)}>
				<div>
					{contact.name} {currentYear}
				</div>
				<SocialPill />
				<div>{contact.email}</div>
			</div>
		</section>
	);
};
