import { Icons } from "src/components/icons/Icons";
import { Titles } from "src/components/titles/Titles";
import IMAGES from "src/images/images";
import { classNames } from "src/utils/classNames";
import { Avatar } from "../partials/Avatar";
import { SocialPill } from "../partials/SocialPill";
import styles from "./Hero.module.scss";

export const Hero = () => {
	const stylesImage = {
		backgroundImage: `url(${IMAGES.fondoPrincipal})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
	};
	return (
		<section
			name="hero"
			className={classNames("mx-auto", styles.heroWraper)}
			style={stylesImage}
		>
			<div className={classNames("gridCenter pos-r", styles.wraper)}>
				<div className="gridCenter">
					<div className={styles.avatar}>
						<Avatar type="big" />
					</div>
					<div className={classNames(styles.texts, " d-g gap-1")}>
						<Titles variant={"h1"} st="ta-c">
							<h1>Junior Web Developer</h1>
							<h1>+ UI Designer</h1>
						</Titles>
						<p className="fn-big ta-c">
							I&apos;m Sandra, a <span className="color">self-taught </span>
							junior web developer with experience in development and layout
							projects. I have worked on both individual and team projects,
							which has allowed me to acquire solid skills in the design,
							development and maintenance of applications, as well as in the
							layout of user interfaces.
							<Icons icon="arrow_left" size={30} />
						</p>
						<div className="d-f jc-c">
							<SocialPill />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
