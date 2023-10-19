import IMAGES from "src/images/images";
import styles from "./GrainOverlay.module.scss";
export const GrainOverlay = () => {
	const stylesOverlay = {
		backgroundImage: `url(${IMAGES.grainOverlay})`,
	};
	return (
		<div style={stylesOverlay} className={styles.verlay}>
			{""}
		</div>
	);
};
