import { useContext } from "react";
import { Icons } from "src/components/icons/Icons";
import { Titles } from "src/components/titles/Titles";
import { GlovalContext } from "src/provider/provider";
import { classNames } from "src/utils/classNames";
import styles from "./Contact.module.scss";
export const Contact = () => {
	const { contact } = useContext(GlovalContext);
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
				<div>{contact.name}</div>
				<ul className="crossCenter gap-1">
					{contact.socials.map((item) => (
						<li key={item.id}>
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="d-if"
							>
								<Icons icon={item.icon} styles="filltrans" />{" "}
								<span className="ml-1">{item.name}</span>
							</a>
						</li>
					))}
				</ul>
				<div>{contact.email}</div>
			</div>
		</section>
	);
};
